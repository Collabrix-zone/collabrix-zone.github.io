import { motion } from 'motion/react';
import { ArrowLeft, Home, Search, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';

interface NotFoundPageProps {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigateHome: () => void;
}

export function NotFoundPage({ isDark, toggleTheme, onNavigateHome }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background elements */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#faf8f4' : '#2a2a2a'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-br from-sky-400/15 to-orange-400/10' 
              : 'bg-gradient-to-br from-sky-600/8 to-orange-500/5'
          }`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeOut" }}
          className={`absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-tr from-orange-400/15 to-sky-400/10' 
              : 'bg-gradient-to-tr from-orange-500/8 to-sky-600/5'
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
          <Header isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        
        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto space-y-8"
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Large 404 */}
              <motion.div
                className="text-8xl sm:text-9xl lg:text-[12rem] font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #0c4a6e 0%, #c2410c 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                404
              </motion.div>
              
              {/* Floating sparkles */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute"
                  style={{
                    left: `${10 + (index * 15)}%`,
                    top: `${20 + (index % 3) * 20}%`
                  }}
                >
                  <Sparkles 
                    size={16 + (index % 3) * 4} 
                    className="text-sky-600 dark:text-sky-400 opacity-60" 
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Error message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Page Not Found
              </h1>
              <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-lg mx-auto">
                Oops! The page you're looking for seems to have wandered off into the digital void. 
                Let's get you back to our premium design experience.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                onClick={onNavigateHome}
                size="lg"
                className="group bg-gradient-to-r from-sky-600 to-orange-500 hover:from-sky-700 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-sky-500/25"
              >
                <Home size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Back to Home
              </Button>


            </motion.div>

            {/* Additional help */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-8 border-t border-border/30"
            >
              <div className="flex items-center justify-center gap-2 text-sm opacity-60 mb-4">
                <Search size={16} />
                <span>Looking for something specific?</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <button
                  onClick={onNavigateHome}
                  className="px-4 py-2 rounded-lg bg-sky-600/10 dark:bg-sky-400/10 hover:bg-sky-600/20 dark:hover:bg-sky-400/20 transition-colors border border-sky-600/20 dark:border-sky-400/20 hover:border-sky-600/40 dark:hover:border-sky-400/40"
                >
                  Our Services
                </button>
                <button
                  onClick={onNavigateHome}
                  className="px-4 py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 transition-colors border border-orange-500/20 hover:border-orange-500/40"
                >
                  Get Started
                </button>
                <button
                  onClick={onNavigateHome}
                  className="px-4 py-2 rounded-lg bg-sky-600/10 dark:bg-sky-400/10 hover:bg-sky-600/20 dark:hover:bg-sky-400/20 transition-colors border border-sky-600/20 dark:border-sky-400/20 hover:border-sky-600/40 dark:hover:border-sky-400/40"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Brand message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-6"
            >
              <div className="flex items-center justify-center gap-2 text-lg font-medium opacity-70">
                <span>Collabrix</span>
                <span className="text-sky-600 dark:text-sky-400">•</span>
                <span>Design. Develop. Deliver.</span>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}