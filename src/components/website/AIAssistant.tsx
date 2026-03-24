import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, Compass, BarChart3, RotateCcw, Bot } from 'lucide-react';
import { callAI, type AITool } from '../../lib/ai-service';

interface AIAssistantProps {
  isDark: boolean;
}

const TABS: { id: AITool; label: string; icon: typeof FileText; description: string; placeholder: string }[] = [
  {
    id: 'brief',
    label: 'Project Brief',
    icon: FileText,
    description: 'Describe what you need and get a structured project brief with scope, timeline, and deliverables.',
    placeholder: 'e.g., "We\'re a fintech startup building a mobile banking app. We need the full UX/UI design for iOS and Android, plus a brand identity refresh. Timeline is 3 months."',
  },
  {
    id: 'recommend',
    label: 'Service Match',
    icon: Compass,
    description: 'Tell us your situation and we\'ll recommend exactly which Collabrix services fit your needs.',
    placeholder: 'e.g., "We\'re scaling from 20 to 80 people this year and need to hire 5 senior engineers and a VP of Product. We also want to redesign our internal tools dashboard."',
  },
  {
    id: 'scope',
    label: 'Scope Analyzer',
    icon: BarChart3,
    description: 'Paste your requirements and get a complexity analysis with engagement format and process overview.',
    placeholder: 'e.g., "Redesign our e-commerce platform (web + mobile), create a design system, and recruit a Head of Design and 2 senior product designers to own it going forward."',
  },
];

export function AIAssistant({ isDark }: AIAssistantProps) {
  const [activeTab, setActiveTab] = useState<AITool>('brief');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const activeTabData = TABS.find((t) => t.id === activeTab)!;

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;
    setResult('');
    setError('');
    setIsLoading(true);

    const res = await callAI(activeTab, input);
    if (res.error) {
      setError(res.error);
    } else {
      setResult(res.result);
    }
    setIsLoading(false);

    // Scroll result into view after render
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleReset = () => {
    setInput('');
    setResult('');
    setError('');
  };

  const handleTabSwitch = (tab: AITool) => {
    setActiveTab(tab);
    setResult('');
    setError('');
  };

  return (
    <section
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 overflow-hidden"
      aria-labelledby="ai-assistant-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-sky-500/8' : 'bg-sky-400/10'
        }`} />
        <div className={`absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-orange-500/6' : 'bg-orange-400/8'
        }`} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: isDark ? 'rgba(56,189,248,0.25)' : 'rgba(14,165,233,0.2)',
              background: isDark
                ? 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(249,115,22,0.05))'
                : 'linear-gradient(135deg, rgba(14,165,233,0.06), rgba(249,115,22,0.04))',
            }}
          >
            <Bot size={14} className="text-sky-500 dark:text-sky-400" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-700 dark:text-sky-300">
              AI-Powered
            </span>
          </motion.div>

          <h2
            id="ai-assistant-heading"
            className="tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Not sure where to start?{' '}
            <span className="bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent">
              Ask our AI
            </span>
          </h2>
          <p className="text-base sm:text-lg opacity-55 max-w-xl mx-auto leading-relaxed">
            Describe your situation and get an instant project brief, service recommendation, or scope analysis — no commitment required.
          </p>
        </motion.div>

        {/* Main glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-3xl p-[1px]"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(255,255,255,0.05), rgba(249,115,22,0.15))'
              : 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(255,255,255,0.6), rgba(249,115,22,0.1))',
          }}
        >
          <div
            className={`rounded-3xl p-6 sm:p-8 lg:p-10 ${
              isDark
                ? 'bg-gray-950/80 backdrop-blur-2xl'
                : 'bg-white/70 backdrop-blur-2xl'
            }`}
          >
            {/* Tab bar */}
            <div className="flex gap-2 flex-wrap mb-6" role="tablist" aria-label="AI tools">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleTabSwitch(tab.id)}
                    className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                      isActive
                        ? isDark
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-400/30 shadow-[0_0_20px_-4px_rgba(56,189,248,0.2)]'
                          : 'bg-sky-50 text-sky-700 border border-sky-200 shadow-sm'
                        : isDark
                          ? 'bg-white/5 text-white/50 border border-white/8 hover:bg-white/8 hover:text-white/70 hover:border-white/15'
                          : 'bg-gray-50 text-gray-500 border border-gray-150 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-200'
                    }`}
                  >
                    <Icon size={15} className={isActive ? '' : 'opacity-60 group-hover:opacity-80'} aria-hidden="true" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Description with animation */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-sm opacity-50 leading-relaxed mb-5"
              >
                {activeTabData.description}
              </motion.p>
            </AnimatePresence>

            {/* Input area */}
            <div className="relative mb-5">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activeTabData.placeholder}
                rows={4}
                maxLength={2000}
                className={`w-full px-4 py-3.5 rounded-2xl border text-base transition-all duration-200 resize-none focus:outline-none focus:ring-4 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:ring-sky-400/20 focus:border-sky-400/40'
                    : 'bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-sky-500/15 focus:border-sky-400'
                }`}
                aria-label="Describe your requirements"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit();
                }}
              />
              <span className={`absolute bottom-2.5 right-3.5 text-xs ${isDark ? 'text-white/20' : 'text-gray-300'}`}>
                {input.length}/2000
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className={`group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-250 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-4 min-h-[44px] ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-400 hover:to-sky-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 focus:ring-sky-400/30'
                    : 'bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:from-sky-500 hover:to-sky-600 shadow-lg shadow-sky-600/20 hover:shadow-sky-600/30 focus:ring-sky-500/20'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={15} className="group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                    <span>Analyze</span>
                    <kbd className="hidden sm:inline text-[10px] opacity-40 ml-0.5 font-mono">
                      {/Mac|iPhone|iPad/.test(navigator?.userAgent ?? '') ? '⌘' : 'Ctrl'}+↵
                    </kbd>
                  </>
                )}
              </button>

              {(result || error || input) && (
                <button
                  onClick={handleReset}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/40 min-h-[44px] ${
                    isDark
                      ? 'bg-white/5 text-white/50 hover:bg-white/8 hover:text-white/70'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-150 hover:text-gray-700'
                  }`}
                  aria-label="Clear and start over"
                >
                  <RotateCcw size={14} aria-hidden="true" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl border text-sm ${
                  isDark
                    ? 'bg-red-950/40 border-red-800/30 text-red-300'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}
                role="alert"
              >
                {error}
              </motion.div>
            )}

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  ref={resultRef}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`mt-6 p-6 sm:p-8 rounded-2xl border ${
                    isDark
                      ? 'bg-white/[0.03] border-white/8'
                      : 'bg-gray-50/80 border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isDark ? 'bg-sky-400/15' : 'bg-sky-100'
                    }`}>
                      <Sparkles size={12} className="text-sky-500" aria-hidden="true" />
                    </div>
                    <span className={`text-[11px] font-semibold uppercase tracking-widest ${
                      isDark ? 'text-sky-400/60' : 'text-sky-600/60'
                    }`}>
                      AI Analysis
                    </span>
                  </div>
                  <div
                    className={`prose prose-sm max-w-none leading-relaxed ${
                      isDark
                        ? 'prose-invert prose-headings:text-white/90 prose-p:text-white/65 prose-li:text-white/65 prose-strong:text-white/80'
                        : 'prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800'
                    } prose-headings:font-bold prose-headings:tracking-tight`}
                    dangerouslySetInnerHTML={{ __html: markdownToHTML(result) }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs opacity-30 mt-5"
        >
          AI-generated analysis for exploration purposes. For precise estimates, reach out to our team.
        </motion.p>
      </div>
    </section>
  );
}

/**
 * Minimal markdown → HTML converter (no dependencies).
 * Handles: headings, bold, italic, bullet lists, numbered lists, paragraphs.
 */
function markdownToHTML(md: string): string {
  const lines = md.split('\n');
  const html: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeList = () => {
    if (inUl) { html.push('</ul>'); inUl = false; }
    if (inOl) { html.push('</ol>'); inOl = false; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Blank line
    if (!line.trim()) {
      closeList();
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      html.push(`<h${level + 1}>${inlineFormat(headingMatch[2])}</h${level + 1}>`);
      continue;
    }

    // Bullet list
    if (/^[\-\*]\s+/.test(line)) {
      if (inOl) { html.push('</ol>'); inOl = false; }
      if (!inUl) { html.push('<ul>'); inUl = true; }
      html.push(`<li>${inlineFormat(line.replace(/^[\-\*]\s+/, ''))}</li>`);
      continue;
    }

    // Numbered list
    if (/^\d+\.\s+/.test(line)) {
      if (inUl) { html.push('</ul>'); inUl = false; }
      if (!inOl) { html.push('<ol>'); inOl = true; }
      html.push(`<li>${inlineFormat(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    // Paragraph
    closeList();
    html.push(`<p>${inlineFormat(line)}</p>`);
  }

  closeList();
  return html.join('\n');
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}
