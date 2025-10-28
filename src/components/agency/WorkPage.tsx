import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

interface WorkPageProps {
  isDark: boolean;
}

export function WorkPage({ isDark }: WorkPageProps) {
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      year: '2024',
      description: 'Comprehensive financial management platform with real-time analytics',
      image: 'https://images.unsplash.com/photo-1759297044036-19a0256fade2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE1MDQ0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web & Mobile',
      year: '2024',
      description: 'Modern shopping experience with seamless checkout flow',
      image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTUwNDQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Application',
      year: '2025',
      description: 'AI-powered personal training and nutrition tracking',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNDMzNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Brand Identity System',
      category: 'Branding',
      year: '2024',
      description: 'Complete brand redesign with comprehensive guidelines',
      image: 'https://images.unsplash.com/photo-1636247498840-693054bb4bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjE0NjIyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    }
  ];

  return (
    <>
      {/* Minimal Hero */}
      <section className="px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 opacity-50">Selected Work</div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-none">
              Projects
            </h1>
            <p className="text-xl sm:text-2xl opacity-60 max-w-2xl">
              A collection of work that showcases our approach to creating meaningful digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clean Projects List */}
      <section className="px-4 sm:px-6 md:px-8 pb-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden mb-8 cursor-pointer">
                <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Subtle Hover Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                  isDark 
                    ? 'bg-gradient-to-t from-black/40 via-black/10 to-transparent' 
                    : 'bg-gradient-to-t from-white/40 via-white/10 to-transparent'
                }`} />
                
                {/* View Arrow */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <div className={`p-3 sm:p-4 rounded-full backdrop-blur-xl ${
                    isDark ? 'bg-white/10' : 'bg-black/10'
                  }`}>
                    <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

              {/* Project Info - Minimal Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
                {/* Left: Number & Category */}
                <div className="sm:col-span-3">
                  <div className="flex sm:flex-col gap-4 sm:gap-2 items-baseline sm:items-start">
                    <div className="opacity-30 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="opacity-40 uppercase tracking-wider text-xs">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="sm:col-span-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="opacity-60 text-lg sm:text-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right: Year */}
                <div className="sm:col-span-3 sm:text-right">
                  <div className="opacity-40 tabular-nums">
                    {project.year}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Minimal Footer Note */}
      <section className="px-4 sm:px-6 md:px-8 pb-32">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-full bg-current opacity-10 mb-12" />
          <div className="text-center opacity-40">
            More projects coming soon
          </div>
        </motion.div>
      </section>
    </>
  );
}
