import type { Plugin } from 'vite';
import { getPageMetadata, staticRoutes } from '../src/data/seo';

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function pageHtml(html: string, path: string) {
  const meta = getPageMetadata(path);
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<meta name="robots"[^>]*>/, `<meta name="robots" content="${meta.robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${meta.canonical}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${meta.canonical}" />`)
    .replace(/<meta (property="og:title"|name="twitter:title")[^>]*>/g, `<meta $1 content="${escapeHtml(meta.title)}" />`)
    .replace(/<meta (property="og:description"|name="twitter:description")[^>]*>/g, `<meta $1 content="${escapeHtml(meta.description)}" />`)
    .replace(/<script id="site-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="site-schema" type="application/ld+json">${JSON.stringify(meta.structuredData).replace(/</g, '\\u003c')}</script>`);
}

// Real route entry files support GitHub Pages refreshes and non-JS social crawlers.
export function staticPages(): Plugin {
  return {
    name: 'collabrix-static-pages',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') throw new Error('Missing HTML entry');
      const template = String(index.source);
      index.source = pageHtml(template, '/');
      for (const route of staticRoutes.filter(route => route !== '/')) {
        this.emitFile({ type: 'asset', fileName: `${route.slice(1)}/index.html`, source: pageHtml(template, route) });
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: pageHtml(template, '/404') });
    },
  };
}
