import { motion } from 'motion/react';
import { Users, Search, Briefcase, UserPlus, Target, TrendingUp, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface TalentPageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

const services = [
  {
    num: '01',
    icon: <UserPlus size={26} />,
    title: 'Talent Acquisition',
    description: 'Find the perfect candidates for your team. We specialize in identifying, attracting, and placing top-tier talent across all industries and functions.',
    features: ['Full-Cycle Recruitment', 'Candidate Sourcing', 'Interview Coordination', 'Offer Negotiation'],
    accent: 'orange',
  },
  {
    num: '02',
    icon: <Search size={26} />,
    title: 'Executive Search',
    description: 'Leadership hiring for critical roles. Our executive search practice helps you find C-suite and senior leadership talent with discretion and speed.',
    features: ['Leadership Assessment', 'Market Mapping', 'Confidential Search', 'Onboarding Support'],
    accent: 'sky',
  },
  {
    num: '03',
    icon: <Briefcase size={26} />,
    title: 'HR Consulting',
    description: 'Strategic HR solutions and best practices. We help optimize your HR processes, compensation structures, and organizational design for scale.',
    features: ['HR Strategy', 'Process Design', 'Compensation Planning', 'Performance Management'],
    accent: 'orange',
  },
  {
    num: '04',
    icon: <Users size={26} />,
    title: 'Team Building',
    description: 'Build cohesive, high-performing teams from the ground up. We help you assemble the right mix of talent, skills, and culture for your vision.',
    features: ['Team Assessment', 'Culture Alignment', 'Skills Mapping', 'Team Development'],
    accent: 'sky',
  },
  {
    num: '05',
    icon: <Target size={26} />,
    title: 'Talent Strategy',
    description: 'Long-term workforce planning and talent development strategies perfectly aligned with your business goals and growth trajectory.',
    features: ['Workforce Planning', 'Succession Planning', 'Talent Development', 'Retention Strategies'],
    accent: 'orange',
  },
  {
    num: '06',
    icon: <TrendingUp size={26} />,
    title: 'Talent Analytics',
    description: 'Data-driven insights to optimize your hiring and retention strategies. We bring intelligence to your people operations for better business outcomes.',
    features: ['Hiring Metrics', 'Market Analysis', 'Competitive Intelligence', 'ROI Measurement'],
    accent: 'sky',
  },
];

const process = [
  { step: '01', title: 'Needs Analysis', description: 'We start by understanding your company culture, team dynamics, and specific role requirements to ensure we find candidates who are the right fit.' },
  { step: '02', title: 'Candidate Sourcing', description: 'Using our extensive network and advanced sourcing techniques, we identify qualified candidates who match your criteria and career aspirations.' },
  { step: '03', title: 'Screening & Assessment', description: 'We conduct thorough interviews and assessments to evaluate skills, experience, and cultural fit before presenting candidates to you.' },
  { step: '04', title: 'Placement & Onboarding', description: 'We facilitate the entire hiring process and provide onboarding support to ensure a smooth, successful transition for both parties.' },
];

const metrics = [
  { number: '500+', label: 'Successful Placements', color: 'orange' },
  { number: '92%', label: 'Retention at 12 Months', color: 'sky' },
  { number: '21 Days', label: 'Average Time-to-Hire', color: 'orange' },
  { number: '15+', label: 'Industries Served', color: 'sky' },
];

export function TalentPage({ isDark, onNavigate }: TalentPageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 overflow-hidden" aria-labelledby="talent-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4"
              >
                Talent Services
              </motion.p>
              <motion.h1
                id="talent-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
              >
                We find the{' '}
                <span className="italic bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
                  right people
                </span>
                <br />
                for your{' '}
                <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
                  vision
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-lg sm:text-xl opacity-65 leading-relaxed mb-10 max-w-2xl"
              >
                Building exceptional teams that drive business success. We connect you with 
                world-class talent and provide strategic HR solutions that scale with your ambition.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-orange-600 text-white rounded-2xl hover:bg-sky-800 dark:hover:bg-sky-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold focus:outline-none focus:ring-4 focus:ring-orange-600 dark:focus:ring-orange-400 min-h-[52px]"
                >
                  <span>Find Your Talent</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-current/20 rounded-2xl hover:border-orange-600 dark:hover:border-orange-400 hover:text-orange-700 dark:hover:text-orange-400 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-orange-600 dark:focus:ring-orange-400 min-h-[52px]"
                >
                  <span className="opacity-70 group-hover:opacity-100">View Placements</span>
                  <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            {/* Metrics panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 grid grid-cols-2 gap-4"
              aria-label="Talent metrics"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`p-5 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/70 border-gray-100'}`}
                >
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 ${metric.color === 'orange' ? 'text-orange-600 dark:text-orange-400' : 'text-sky-600 dark:text-sky-400'}`}>
                    {metric.number}
                  </div>
                  <div className="text-xs opacity-60 font-medium leading-tight">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-t border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-labelledby="talent-services-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">What we offer</p>
            <h2 id="talent-services-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Our talent services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
                className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-orange-400/30'
                    : 'bg-white/70 border-gray-100 hover:bg-white hover:border-orange-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    service.accent === 'orange'
                      ? 'bg-orange-600/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400'
                      : 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400'
                  }`} aria-hidden="true">
                    {service.icon}
                  </div>
                  <span className="text-5xl font-bold opacity-5 select-none">{service.num}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base opacity-65 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2" role="list">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm opacity-75">
                      <CheckCircle2 size={15} className="text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="recruitment-process-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">How we work</p>
            <h2 id="recruitment-process-heading" className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl">
              Our systematic recruitment process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {process.map((phase, index) => (
              <motion.article
                key={phase.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden p-7 sm:p-9 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-white/4 border-white/8 hover:bg-white/7'
                    : 'bg-white/70 border-gray-100 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="absolute top-6 right-6 text-7xl font-bold opacity-[0.04] select-none leading-none">
                  {phase.step}
                </div>
                <div className="relative">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4 opacity-60">{phase.step}</div>
                  <h3 className="font-bold text-xl mb-3">{phase.title}</h3>
                  <p className="text-base opacity-65 leading-relaxed">{phase.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-label="Industries we serve">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <span className="text-sm font-semibold tracking-widest uppercase opacity-50 mr-4 flex-shrink-0">Industries</span>
            {['Technology', 'Design & Creative', 'FinTech', 'Healthcare', 'E-commerce', 'SaaS', 'Startups', 'Enterprise', 'Media', 'Consulting'].map((industry) => (
              <span
                key={industry}
                className={`px-4 py-2 rounded-xl text-sm font-medium border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white/70'
                    : 'bg-white/60 border-gray-200 text-gray-700'
                }`}
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="talent-cta-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-20 ${
              isDark
                ? 'bg-gradient-to-br from-orange-950 via-orange-900/80 to-sky-950/50 border border-orange-800/50'
                : 'bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700'
            }`}
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative text-white max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-4">Ready to hire?</p>
              <h2 id="talent-cta-heading" className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">
                Let's build your dream team
              </h2>
              <p className="text-lg opacity-70 mb-10 leading-relaxed">
                Tell us about your talent needs and we'll craft a recruitment strategy that works.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-700 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
              >
                <span>Start Hiring Today</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
