/**
 * Cloudflare Worker — OpenAI proxy for The Collabrix AI tools.
 *
 * Deploy:
 *   1. Install wrangler: npm i -g wrangler
 *   2. wrangler login
 *   3. wrangler secret put OPENAI_API_KEY   (paste your key)
 *   4. wrangler deploy workers/ai-proxy.js --name collabrix-ai
 *
 * Then set VITE_AI_PROXY_URL=https://collabrix-ai.<your-subdomain>.workers.dev
 * in your .env file and redeploy the site.
 */

const ALLOWED_ORIGINS = [
  'https://thecollabrix.com',
  'https://collabrix-zone.github.io',
  'http://localhost:3000',
];

// Simple in-memory rate limiter (per-IP, resets on worker restart)
const rateMap = new Map();
const RATE_LIMIT = 10; // requests per window
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }


    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers });
    }

    // Rate limit
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { tool, message, systemPrompt } = await request.json();

      if (!message || !systemPrompt) {
        return new Response(JSON.stringify({ error: 'Missing message or systemPrompt' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      // Validate tool type
      if (!['brief', 'recommend', 'scope'].includes(tool)) {
        return new Response(JSON.stringify({ error: 'Invalid tool type' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message.slice(0, 2000) },
          ],
          max_tokens: 1200,
          temperature: 0.7,
        }),
      });

      if (!openaiRes.ok) {
        const errText = await openaiRes.text().catch(() => 'OpenAI error');
        return new Response(JSON.stringify({ error: `OpenAI API error: ${openaiRes.status}` }), {
          status: 502,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      const data = await openaiRes.json();
      const result = data.choices?.[0]?.message?.content || '';

      return new Response(JSON.stringify({ result }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Internal error' }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};
