import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, Palette, Users, Award, TrendingUp, Zap, Globe } from 'lucide-react';

interface HomePageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

const marqueeItems = [
  'UX/UI Design', 'Talent Acquisition', 'Brand Identity', 'Executive Search',
  'Product Design', 'HR Consulting', 'Design Systems', 'Team Building',
  'Mobile Apps', 'Leadership Hiring', 'Web Design', 'Talent Strategy',
];

const stats = [
  { number: '150+', label: 'Projects Delivered', color: 'text-sky-600 dark:text-sky-400' },
  { number: '500+', label: 'Successful Placements', color: 'text-orange-600 dark:text-orange-400' },
  { number: '98%', label: 'Client Satisfaction', color: 'text-sky-600 dark:text-sky-400' },
  { number: '50+', label: 'Happy Clients', color: 'text-orange-600 dark:text-orange-400' },
];

export function HomePage({ isDark, onNavigate }: HomePageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-0"
        aria-labelledby="hero-heading"
      >
        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-600/50 to-transparent origin-left"
        />

        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16 sm:pb-20 lg:pb-28">
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-600/30 dark:border-sky-400/30 bg-sky-600/5 dark:bg-sky-400/5 text-sky-800 dark:text-sky-300">
                  <Sparkles size={14} aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Premium Design & Talent Studio</span>
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                Where{' '}
                <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
                  Great Design
                </span>
                <br />
                Meets{' '}
                <span className="italic bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
                  Great Talent
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl opacity-65 max-w-xl leading-relaxed mb-10"
              >
                Collabrix is a premium studio delivering world-class UX/UI design
                and strategic talent acquisition—two superpowers, one seamless partner.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-sky-800 dark:bg-sky-600 text-white rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                  aria-label="Get started with Collabrix"
                >
                  <span className="font-semibold">Get Started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-current/20 rounded-2xl hover:border-sky-600 dark:hover:border-sky-400 hover:text-sky-700 dark:hover:text-sky-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                >
                  <span className="font-semibold opacity-70 group-hover:opacity-100">View Our Work</span>
                  <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            {/* Right: Abstract visual composition */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5 relative hidden lg:block"
              aria-hidden="true"
            >
              <div className="relative w-full aspect-square max-w-sm ml-auto">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-sky-600/10 dark:border-sky-400/10" />
                <div className="absolute inset-8 rounded-full border border-orange-600/10 dark:border-orange-400/10" />
                <div className="absolute inset-16 rounded-full border border-sky-600/15 dark:border-sky-400/15" />
                {/* Center orb */}
                <div className="absolute inset-20 rounded-full bg-gradient-to-br from-sky-600/20 via-sky-500/10 to-orange-500/15 dark:from-sky-400/20 dark:to-orange-400/15 blur-sm" />
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute top-4 right-8 px-4 py-3 rounded-2xl shadow-xl text-sm font-semibold ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/15 text-white' : 'bg-white/80 backdrop-blur-xl border border-sky-100 text-sky-900'}`}
                >
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-sky-600 dark:text-sky-400" />
                    <span>Design</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute bottom-10 left-4 px-4 py-3 rounded-2xl shadow-xl text-sm font-semibold ${isDark ? 'bg-white/10 backdrop-blur-xl border border-white/15 text-white' : 'bg-white/80 backdrop-blur-xl border border-orange-100 text-orange-900'}`}
                >
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-orange-600 dark:text-orange-400" />
                    <span>Talent</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className={`absolute top-1/3 -left-2 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold ${isDark ? 'bg-sky-900/60 backdrop-blur-xl border border-sky-400/20 text-sky-300' : 'bg-sky-50 border border-sky-200 text-sky-700'}`}
                >
                  98% Satisfied
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className={`absolute bottom-1/4 right-0 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold ${isDark ? 'bg-orange-900/60 backdrop-blur-xl border border-orange-400/20 text-orange-300' : 'bg-orange-50 border border-orange-200 text-orange-700'}`}
                >
                  500+ Placed
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee strip */}
        <div
          className={`relative overflow-hidden py-5 border-y border-current/8 ${isDark ? 'bg-white/3' : 'bg-black/2'}`}
          aria-hidden="true"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase opacity-40">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">What we do</p>
            <h2 id="services-heading" className="tracking-tight leading-tight max-w-2xl" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
              Two powerful services, one exceptional partner
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Design card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-br from-sky-950/60 to-sky-900/20 border-sky-800/30 hover:border-sky-600/50'
                  : 'bg-gradient-to-br from-sky-50 to-white border-sky-100 hover:border-sky-300'
              }`}
              onClick={() => onNavigate('design')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate('design')}
              aria-label="Explore Design Services"
            >
              {/* Accent orb */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-sky-500/10 dark:bg-sky-400/10 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? 'bg-sky-400/10 border border-sky-400/20' : 'bg-sky-600/10 border border-sky-600/15'}`}>
                    <Palette size={30} className="text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  </div>
                  <span className="text-7xl font-bold opacity-5 select-none">01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Design Excellence</h3>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  From UX/UI to complete brand identities — we craft digital experiences
                  that captivate users and convert visitors into loyal customers.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['UX/UI Design', 'Product Design', 'Branding', 'Mobile Apps'].map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-sky-400/10 text-sky-400 border border-sky-400/20' : 'bg-sky-600/8 text-sky-800 border border-sky-600/15'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Design Services</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
              </div>
            </motion.article>

            {/* Talent card */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-br from-orange-950/60 to-orange-900/20 border-orange-800/30 hover:border-orange-600/50'
                  : 'bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:border-orange-300'
              }`}
              onClick={() => onNavigate('talent')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate('talent')}
              aria-label="Explore Talent Services"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-orange-500/10 dark:bg-orange-400/10 blur-3xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? 'bg-orange-400/10 border border-orange-400/20' : 'bg-orange-600/10 border border-orange-600/15'}`}>
                    <Users size={30} className="text-orange-600 dark:text-orange-400" aria-hidden="true" />
                  </div>
                  <span className="text-7xl font-bold opacity-5 select-none">02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Talent Acquisition</h3>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  Strategic recruitment and HR consulting to build high-performing teams —
                  from individual contributors to C-suite executives.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Full-Cycle Recruiting', 'Executive Search', 'HR Consulting', 'Team Building'].map((tag) => (
                    <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-semibold ${isDark ? 'bg-orange-400/10 text-orange-400 border border-orange-400/20' : 'bg-orange-600/8 text-orange-800 border border-orange-600/15'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Talent Services</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section
        className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`}
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${stat.color}`} aria-label={stat.number}>
                {stat.number}
              </div>
              <div className="text-sm sm:text-base opacity-60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY COLLABRIX ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">Why us</p>
                <h2 id="why-heading" className="tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
                  The perfect blend of creative excellence and talent expertise
                </h2>
                <p className="text-base sm:text-lg opacity-65 leading-relaxed mb-8">
                  We don't just deliver work — we build long-term partnerships grounded
                  in transparency, craft, and a relentless drive for results.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold hover:gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded"
                  aria-label="Learn more about Collabrix"
                >
                  <span>Our Story</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <Award size={24} />, title: 'Premium Quality', description: 'Industry-leading standards on every engagement — no shortcuts, ever.', accent: 'sky' },
                { icon: <TrendingUp size={24} />, title: 'Proven Results', description: 'Consistent track record of outcomes that genuinely move the needle.', accent: 'orange' },
                { icon: <Zap size={24} />, title: 'Agile Delivery', description: 'Fast, iterative, and responsive — we move at the speed of your ambition.', accent: 'sky' },
                { icon: <Globe size={24} />, title: 'Global Network', description: 'Access to world-class design talent and candidates across every market.', accent: 'orange' },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15'
                      : 'bg-white/70 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    item.accent === 'sky'
                      ? 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400'
                      : 'bg-orange-600/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400'
                  }`} aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-65 leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-36" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-20 ${
              isDark
                ? 'bg-gradient-to-br from-sky-950 via-sky-900/80 to-orange-950/50 border border-sky-800/50'
                : 'bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900'
            }`}
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

            <div className="relative text-white">
              <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-4">Ready to begin?</p>
              <h2
                id="cta-heading"
                className="tracking-tight leading-tight mb-6 max-w-2xl"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
              >
                Let's build something remarkable together
              </h2>
              <p className="text-lg opacity-70 mb-10 max-w-xl leading-relaxed">
                Whether you need exceptional design or world-class talent, we're ready to help you get there.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
                >
                  <span>Contact Us Today</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-2xl hover:border-white/60 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[52px]"
                >
                  See Our Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}