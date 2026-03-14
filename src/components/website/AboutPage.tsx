import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  isDark: boolean;
  onNavigate?: (page: string) => void;
}

const milestones = [
  { year: '2022', title: 'Founded', description: 'Collabrix was established with a vision to bridge design and talent.' },
  { year: '2023', title: 'First 50 Clients', description: 'Reached 50+ happy clients across design and talent verticals.' },
  { year: '2024', title: 'Talent Division Launch', description: 'Launched our dedicated HR & executive search practice.' },
  { year: '2025', title: 'Global Reach', description: 'Expanded our network to serve clients and place candidates worldwide.' },
];

const values = [
  { icon: <Target size={28} />, title: 'Excellence', description: 'We never compromise on quality. Every project receives our full commitment to exceptional outcomes.', accent: 'sky' },
  { icon: <Users size={28} />, title: 'Collaboration', description: 'Great work happens together. We build partnerships on trust, transparency, and mutual respect.', accent: 'orange' },
  { icon: <Lightbulb size={28} />, title: 'Innovation', description: 'We embrace new ideas and stay ahead of the curve to deliver cutting-edge, future-ready solutions.', accent: 'sky' },
  { icon: <Heart size={28} />, title: 'Integrity', description: 'Honesty and transparency form the foundation of every client relationship we build and nurture.', accent: 'orange' },
];

export function AboutPage({ isDark, onNavigate }: AboutPageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 overflow-hidden" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4"
              >
                About Collabrix
              </motion.p>
              <motion.h1
                id="about-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                We bridge the gap between{' '}
                <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
                  Design
                </span>{' '}
                and{' '}
                <span className="italic bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
                  Talent
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-lg sm:text-xl opacity-65 leading-relaxed max-w-xl"
              >
                We're a premium studio that brings together exceptional UX/UI design 
                and world-class talent acquisition under one roof—so businesses never 
                have to choose between the two.
              </motion.p>
            </div>

            {/* Stats sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
              aria-label="Company statistics"
            >
              {[
                { number: '150+', label: 'Projects', color: 'sky' },
                { number: '500+', label: 'Placements', color: 'orange' },
                { number: '50+', label: 'Clients', color: 'orange' },
                { number: '98%', label: 'Satisfaction', color: 'sky' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-2xl border ${
                    isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-100'
                  }`}
                >
                  <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-60 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Our Story</p>
                <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Born from a simple observation
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-6 text-base sm:text-lg opacity-70 leading-relaxed"
              >
                <p>
                  Collabrix was born from a simple observation: businesses struggle to find partners who understand <em>both</em> the creative and human sides of growth.
                </p>
                <p>
                  We saw companies hiring design agencies that didn't understand their culture, and recruitment firms that couldn't appreciate their creative vision. This disconnect inspired us to build something different — a studio that brings both worlds together seamlessly.
                </p>
                <p>
                  Today, we serve clients who refuse to compromise on quality. Whether we're crafting their digital experiences or building their teams, we approach every project with the same unwavering commitment to excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Journey</p>
            <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Milestones that define us</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative p-6 sm:p-8 rounded-2xl border ${
                  isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-100'
                }`}
              >
                {/* Connector line */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-current/15 z-10" aria-hidden="true" />
                )}
                <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 opacity-30 mb-4 select-none">{m.year}</div>
                <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-sm opacity-65 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-t border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20 text-center"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">What guides us</p>
            <h2 id="values-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Our core values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`flex gap-6 p-7 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15'
                    : 'bg-white/70 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md'
                }`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  value.accent === 'sky'
                    ? 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400'
                    : 'bg-orange-600/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400'
                }`} aria-hidden="true">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-base opacity-65 leading-relaxed">{value.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ──────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 ${
                isDark
                  ? 'bg-gradient-to-br from-sky-950/80 to-sky-900/30 border border-sky-800/40'
                  : 'bg-gradient-to-br from-sky-50 to-white border border-sky-100'
              }`}
            >
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-widest uppercase text-sky-600 dark:text-sky-400 opacity-80 mb-4">Mission</p>
              <h2 id="mission-heading" className="text-2xl sm:text-3xl font-bold mb-5 tracking-tight">Our Mission</h2>
              <p className="text-base sm:text-lg opacity-70 leading-relaxed relative">
                To empower businesses with exceptional design and the right people. 
                We believe great products and great teams go hand in hand — and we 
                deliver both with uncompromising quality and genuine care.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 ${
                isDark
                  ? 'bg-gradient-to-br from-orange-950/80 to-orange-900/30 border border-orange-800/40'
                  : 'bg-gradient-to-br from-orange-50 to-white border border-orange-100'
              }`}
            >
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-widest uppercase text-orange-600 dark:text-orange-400 opacity-80 mb-4">Vision</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 tracking-tight">Our Vision</h2>
              <p className="text-base sm:text-lg opacity-70 leading-relaxed relative">
                To become the trusted partner for companies who refuse to compromise. 
                A future where businesses get both world-class design and world-class 
                talent — seamlessly integrated, powerfully delivered.
              </p>
            </motion.article>
          </div>

          {/* Commitments list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`mt-6 p-8 sm:p-10 rounded-3xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-100'}`}
          >
            <h3 className="font-bold text-xl mb-6">What we commit to every client</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Transparent communication throughout',
                'Dedicated team for every project',
                'On-time, on-budget delivery',
                'Post-project support & follow-up',
                'Rigorous quality review process',
                'Long-term partnership mindset',
              ].map((commitment) => (
                <div key={commitment} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base opacity-70">{commitment}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      {onNavigate && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="about-cta-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 text-center ${
                isDark
                  ? 'bg-gradient-to-br from-sky-950 via-sky-900/80 to-orange-950/50 border border-sky-800/50'
                  : 'bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900'
              }`}
            >
              <div className="absolute inset-0 opacity-10" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
              />
              <div className="relative text-white">
                <h2 id="about-cta-heading" className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                  Ready to work together?
                </h2>
                <p className="text-lg opacity-70 mb-8 max-w-xl mx-auto">
                  Let's talk about your design or hiring needs and craft a plan that works.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
