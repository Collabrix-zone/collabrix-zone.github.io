import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WorkPageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

type Filter = 'all' | 'design' | 'talent';

const projects = [
  {
    id: 1,
    category: 'design',
    label: 'Design',
    title: 'FinTech Mobile App',
    description: 'Complete UX/UI redesign of a financial services mobile application, improving user engagement by 65% and reducing drop-off by 40%.',
    tags: ['Mobile', 'UX/UI', 'FinTech'],
    result: '+65% engagement',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGFyayUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM0NzM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1 lg:col-span-2',
  },
  {
    id: 2,
    category: 'design',
    label: 'Design',
    title: 'E-Commerce Platform',
    description: 'End-to-end design system and interface design for a next-generation e-commerce platform serving 2M+ monthly users.',
    tags: ['Web', 'Design System', 'E-Commerce'],
    result: '2M+ users',
    image: 'https://images.unsplash.com/photo-1548524238-a971a4a3b523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzQ2NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
  {
    id: 3,
    category: 'talent',
    label: 'Talent',
    title: 'Tech Startup Team Build',
    description: 'Recruited and placed 15+ engineers, designers, and product managers for a Series A startup in under 60 days.',
    tags: ['Recruitment', 'Tech', 'Startup'],
    result: '15 hires in 60 days',
    image: 'https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
  {
    id: 4,
    category: 'design',
    label: 'Design',
    title: 'Healthcare Dashboard',
    description: 'Data visualization and dashboard design for healthcare providers to monitor patient outcomes and operational efficiency.',
    tags: ['Web App', 'Data Viz', 'Healthcare'],
    result: '3 hospitals launched',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBVSXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
  {
    id: 5,
    category: 'talent',
    label: 'Talent',
    title: 'Executive Leadership Search',
    description: 'Placed C-suite executives for multiple Fortune 500 companies across various industries with a 100% retention rate at 18 months.',
    tags: ['Executive Search', 'Leadership', 'Corporate'],
    result: '100% retention',
    image: 'https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3MzU0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1 lg:col-span-2',
  },
  {
    id: 6,
    category: 'design',
    label: 'Design',
    title: 'Brand Identity System',
    description: 'Created a complete brand identity and visual guidelines for a modern sustainable fashion brand entering global markets.',
    tags: ['Branding', 'Identity', 'Fashion'],
    result: 'Global launch',
    image: 'https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nbyUyMHZpc3VhbCUyMHN5c3RlbXxlbnwxfHx8fDE3NzM0NzM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
  {
    id: 7,
    category: 'talent',
    label: 'Talent',
    title: 'Design Team Expansion',
    description: 'Built a complete design team of 12 members for a rapidly scaling digital agency, including a Head of Design and 4 senior UX leads.',
    tags: ['Team Building', 'Design', 'Agency'],
    result: '12 designers placed',
    image: 'https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
  {
    id: 8,
    category: 'design',
    label: 'Design',
    title: 'SaaS Product Redesign',
    description: 'Comprehensive product redesign that increased user retention by 40%, reduced support tickets by 60%, and improved NPS by 35 points.',
    tags: ['SaaS', 'Product Design', 'B2B'],
    result: '+40% retention',
    image: 'https://images.unsplash.com/photo-1548524238-a971a4a3b523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzQ2NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
  },
];

const stats = [
  { number: '150+', label: 'Projects Delivered', color: 'sky' },
  { number: '500+', label: 'Successful Placements', color: 'orange' },
  { number: '98%', label: 'Client Satisfaction', color: 'sky' },
  { number: '50+', label: 'Happy Clients', color: 'orange' },
];

const filters: { label: string; value: Filter }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Talent', value: 'talent' },
];

export function WorkPage({ isDark, onNavigate }: WorkPageProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = projects.filter((p) => activeFilter === 'all' || p.category === activeFilter);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            id="work-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight leading-[0.92] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            Work that{' '}
            <span className="italic bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
              speaks
            </span>{' '}
            for itself
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl opacity-65 leading-relaxed max-w-2xl"
          >
            A curated showcase of our design projects and successful talent placements
            that have driven measurable, real-world business results.
          </motion.p>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-12 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-label="Impact statistics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="text-center"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 ${stat.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm opacity-60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between flex-wrap gap-4 mb-12 sm:mb-16"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-1">Portfolio</p>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Featured projects</h2>
            </div>
            <div
              className={`flex items-center gap-1 p-1 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/4 border-gray-200'}`}
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[40px] ${
                    activeFilter === f.value
                      ? isDark
                        ? 'bg-white/15 text-white shadow-sm'
                        : 'bg-white text-gray-900 shadow-sm'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-pressed={activeFilter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isDark
                      ? 'bg-white/4 border-white/8 hover:border-white/20'
                      : 'bg-white/70 border-gray-100 hover:border-gray-200 hover:shadow-xl'
                  } ${project.id === 1 || project.id === 5 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.category === 'design'
                        ? 'bg-sky-600/80 text-white'
                        : 'bg-orange-600/80 text-white'
                    }`}>
                      {project.label}
                    </div>
                    {/* Result badge */}
                    <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${isDark ? 'bg-white/15 text-white' : 'bg-white/90 text-gray-900'}`}>
                      {project.result}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm opacity-65 leading-relaxed mb-5">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                              isDark ? 'bg-white/8 text-white/60' : 'bg-black/5 text-gray-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5 ${
                          project.category === 'design'
                            ? 'text-sky-600 dark:text-sky-400'
                            : 'text-orange-600 dark:text-orange-400'
                        }`}
                        aria-label={`View ${project.title} case study`}
                      >
                        <span>Case Study</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="work-cta-heading">
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
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-3">Next project</p>
                <h2 id="work-cta-heading" className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                  Let's create something great
                </h2>
                <p className="text-lg opacity-70 max-w-lg leading-relaxed">
                  Ready to start your next project or find exceptional talent? Let's talk.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
