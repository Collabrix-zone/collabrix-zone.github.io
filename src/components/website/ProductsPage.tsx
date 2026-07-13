import { motion } from 'motion/react';
import { Shield, Layers, Search, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Typewriter } from './Typewriter';

interface ProductsPageProps {
  isDark: boolean;
}

const features = [
  {
    icon: <Shield size={24} />,
    title: 'Redact before AI',
    description: 'Sensitive content is stripped out locally before anything reaches a model provider.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Knowledge cards',
    description: 'Documents and threads become structured decisions, rationale, and findings — with cited evidence.',
  },
  {
    icon: <Search size={24} />,
    title: 'Searchable memory',
    description: 'Ask questions in plain language and get answers traced back to their source.',
  },
];

export function ProductsPage({ isDark }: ProductsPageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-sm font-semibold tracking-widest uppercase opacity-50">Our Products</span>
            <span className="opacity-30 text-sm">·</span>
            <Typewriter
              words={['Built In-House', 'Beyond Services']}
              className="text-sm font-bold text-sky-600 dark:text-sky-400"
            />
          </motion.div>
          <motion.h1
            id="products-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight leading-[0.95] mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Software we build and use{' '}
            <span className="bg-gradient-to-br from-sky-500 to-sky-700 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
              ourselves
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg opacity-70 max-w-2xl leading-relaxed"
          >
            Alongside design and talent services, Collabrix builds its own products.
            The first is MemoryOS — organizational memory for teams whose decisions
            outlive the people who made them.
          </motion.p>
        </div>
      </section>

      {/* ── MEMORYOS SPOTLIGHT ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="memoryos-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl border p-8 sm:p-12 lg:p-16 ${
              isDark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7" style={{ minWidth: 0 }}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl font-bold tracking-tight">
                    Memory<span className="text-sky-600 dark:text-sky-400">OS</span>
                  </span>
                  <span className="rounded-full border border-sky-600/30 dark:border-sky-400/30 px-3 py-0.5 text-xs font-medium text-sky-700 dark:text-sky-400">
                    Beta
                  </span>
                </div>
                <h2 id="memoryos-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                  Your company&apos;s memory.
                </h2>
                <p className="opacity-70 leading-relaxed mb-6 max-w-xl">
                  Decisions, rationale, and research shouldn&apos;t walk out the door
                  when people leave. MemoryOS turns your team&apos;s documents and
                  threads into searchable knowledge — with the sensitive parts
                  redacted before any AI ever sees them. Free for the first 1,000
                  teams.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://memoryos.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-sky-700 text-white hover:bg-sky-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400"
                  >
                    Visit memoryos.in
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="https://memoryos.in/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400"
                  >
                    Join the beta
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isDark ? 'bg-sky-400/10 text-sky-400' : 'bg-sky-600/10 text-sky-700'
                      }`}
                    >
                      {feature.icon}
                    </span>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm opacity-65 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MORE PRODUCTS ───────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="more-products-heading">
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-2xl border border-dashed p-8 sm:p-12 text-center ${
              isDark ? 'border-white/15' : 'border-gray-300'
            }`}
          >
            <h2 id="more-products-heading" className="text-xl font-semibold mb-2">
              More products in the works
            </h2>
            <p className="opacity-65 max-w-lg mx-auto flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              We build software alongside our design and talent work — check back for what&apos;s next.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
