import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface HomePageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

export function HomePage({ isDark, onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 py-20 sm:py-32 min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8">
              <span>Design that </span>
              <motion.span
                className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-sky-300 dark:to-orange-400"
              >
                transforms
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl opacity-80 max-w-3xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft premium digital experiences that captivate users and drive business growth
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => onNavigate('contact')}
              className="px-8 py-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-orange-500 hover:to-orange-600 text-white hover:scale-105 transition-all duration-500 flex items-center gap-2 justify-center"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Button>
            
            <Button
              onClick={() => onNavigate('work')}
              className="px-8 py-6 rounded-2xl bg-transparent border-2 border-current hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-gray-200/50 bg-white/30'
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className={`text-3xl sm:text-4xl mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                  {stat.number}
                </div>
                <div className="opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
