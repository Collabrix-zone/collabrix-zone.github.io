import { motion } from 'motion/react';
import { Palette, Rocket, Target, Smartphone, Monitor, PenTool, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface DesignPageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

const services = [
  {
    num: '01',
    icon: <Palette size={26} />,
    title: 'UX/UI Design',
    description: 'Beautiful, intuitive interfaces that users love. We create experiences that are both visually stunning and effortlessly functional — from early wireframes to pixel-perfect handoff.',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
    accent: 'sky',
  },
  {
    num: '02',
    icon: <Rocket size={26} />,
    title: 'Product Design',
    description: 'End-to-end product design from concept to launch. We help bring your vision to life with strategic thinking, iterative design, and creative execution that moves fast.',
    features: ['Product Strategy', 'Design Systems', 'Interaction Design', 'Launch Support'],
    accent: 'orange',
  },
  {
    num: '03',
    icon: <Target size={26} />,
    title: 'Brand Identity',
    description: 'Cohesive visual identities that stand out in any market. We craft brands that resonate deeply with your audience and authentically reflect your values.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Guidelines', 'Brand Collateral'],
    accent: 'sky',
  },
  {
    num: '04',
    icon: <Smartphone size={26} />,
    title: 'Mobile App Design',
    description: 'Native and cross-platform mobile experiences that engage users on iOS and Android — designed for the platform, built for real people.',
    features: ['iOS Design', 'Android Design', 'App Prototyping', 'App Store Assets'],
    accent: 'orange',
  },
  {
    num: '05',
    icon: <Monitor size={26} />,
    title: 'Web Design',
    description: 'Responsive websites that work beautifully across all devices and screen sizes, from marketing sites to complex web applications.',
    features: ['Responsive Design', 'Landing Pages', 'E-commerce Design', 'Web Applications'],
    accent: 'sky',
  },
  {
    num: '06',
    icon: <PenTool size={26} />,
    title: 'Design Consulting',
    description: 'Expert guidance to elevate your design practice. We help you audit existing work, train teams, and build processes that scale.',
    features: ['Design Audits', 'Team Training', 'Process Optimization', 'Strategic Planning'],
    accent: 'orange',
  },
];

const process = [
  { step: '01', title: 'Discovery & Research', description: 'We start by understanding your business, users, and goals. Through research and analysis, we identify opportunities and define clear success metrics.' },
  { step: '02', title: 'Strategy & Planning', description: 'We develop a design strategy aligned with your objectives — including user flows, information architecture, and project milestones.' },
  { step: '03', title: 'Design & Iteration', description: 'Our team creates wireframes, prototypes, and high-fidelity designs. We iterate based on feedback and testing to ensure the best results.' },
  { step: '04', title: 'Delivery & Support', description: 'We deliver pixel-perfect designs with comprehensive documentation. Post-launch, we provide ongoing support to ensure continued success.' },
];

export function DesignPage({ isDark, onNavigate }: DesignPageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 overflow-hidden" aria-labelledby="design-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4"
              >
                Design Services
              </motion.p>
              <motion.h1
                id="design-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                We design{' '}
                <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
                  digital experiences
                </span>
                <br />
                that captivate and{' '}
                <span className="italic bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
                  convert
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-lg sm:text-xl opacity-65 leading-relaxed mb-10 max-w-2xl"
              >
                From initial concept to final pixel, every design decision we make is
                intentional, research-backed, and crafted for real business impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-sky-800 dark:bg-sky-600 text-white rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-current/20 rounded-2xl hover:border-sky-600 dark:hover:border-sky-400 hover:text-sky-700 dark:hover:text-sky-400 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[52px]"
                >
                  <span className="opacity-70 group-hover:opacity-100">View Design Work</span>
                  <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            {/* Decorative capability pills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 hidden lg:flex flex-col gap-3"
              aria-hidden="true"
            >
              {['UX Research', 'UI Design', 'Prototyping', 'Design Systems', 'Brand Identity', 'Mobile Design', 'Web Apps', 'Usability Testing'].map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-medium ${
                    isDark
                      ? 'bg-white/4 border-white/8 text-white/70'
                      : 'bg-white/60 border-gray-100 text-gray-700'
                  } ${i % 2 === 0 ? 'ml-0' : 'ml-6'}`}
                >
                  {cap}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-t border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">What we offer</p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Our design services</h2>
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
                    ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-sky-400/30'
                    : 'bg-white/70 border-gray-100 hover:bg-white hover:border-sky-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    service.accent === 'sky'
                      ? 'bg-sky-600/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400'
                      : 'bg-orange-600/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400'
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
                      <CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-3">How we work</p>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl">
              A proven process for exceptional design
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
                className={`relative overflow-hidden p-7 sm:p-9 rounded-2xl border ${
                  isDark
                    ? 'bg-white/4 border-white/8 hover:bg-white/7'
                    : 'bg-white/70 border-gray-100 hover:bg-white hover:shadow-md'
                } transition-all duration-300`}
              >
                <div className="absolute top-6 right-6 text-7xl font-bold opacity-[0.04] select-none leading-none">
                  {phase.step}
                </div>
                <div className="relative">
                  <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-4 opacity-60">{phase.step}</div>
                  <h3 className="font-bold text-xl mb-3">{phase.title}</h3>
                  <p className="text-base opacity-65 leading-relaxed">{phase.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="design-cta-heading">
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
            <div className="relative text-white max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-4">Ready to create?</p>
              <h2 id="design-cta-heading" className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">
                Let's transform your digital experience
              </h2>
              <p className="text-lg opacity-70 mb-10 leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours with ideas and next steps.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
