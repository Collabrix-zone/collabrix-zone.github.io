import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface LaunchTransitionProps {
  isDark: boolean;
  onComplete: () => void;
}

export function LaunchTransition({ isDark, onComplete }: LaunchTransitionProps) {
  const [stage, setStage] = useState<'announcement' | 'transition' | 'complete'>('announcement');
  const [progress, setProgress] = useState(0);

  const handleLaunch = () => {
    setStage('transition');
    
    // Animate progress bar
    const duration = 1500;
    const steps = 60;
    const increment = 100 / steps;
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setStage('complete');
          onComplete();
        }, 200);
      }
    }, duration / steps);
  };

  if (stage === 'complete') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background */}
        <div className={`absolute inset-0 ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#faf8f4]'}`} />

        {/* Announcement Stage */}
        {stage === 'announcement' && (
          <div className="relative z-10 h-full flex flex-col">
            {/* Top section with status */}
            <motion.div
              className="px-8 sm:px-12 py-8 sm:py-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-sky-400' : 'bg-sky-600'}`}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs uppercase tracking-[0.25em] opacity-40">Live</span>
              </div>
            </motion.div>

            {/* Center content */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center max-w-5xl">
                {/* Main message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-16"
                >
                  <h2 className="text-[clamp(4rem,15vw,18rem)] leading-[0.9] tracking-[-0.03em] mb-8">
                    Collabrix
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl opacity-40 tracking-wide">
                    is now live
                  </p>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button
                    onClick={handleLaunch}
                    className="group relative"
                  >
                    <div className={`flex items-center gap-8 px-8 py-4 border transition-all duration-500 ${
                      isDark
                        ? 'border-white/20 hover:border-white/40'
                        : 'border-black/20 hover:border-black/40'
                    }`}>
                      <span className="text-xs uppercase tracking-[0.3em]">Continue</span>
                      <motion.div
                        className="w-8 h-[1px] bg-current origin-left"
                        initial={{ scaleX: 1 }}
                        whileHover={{ scaleX: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Bottom section */}
            <motion.div
              className="px-8 sm:px-12 py-8 sm:py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex justify-between items-center text-xs uppercase tracking-[0.25em] opacity-30">
                <span>2025</span>
                <span>Premium Design Studio</span>
              </div>
            </motion.div>
          </div>
        )}

        {/* Transition Stage */}
        {stage === 'transition' && (
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0.3, scale: 0.98 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="text-5xl sm:text-6xl md:text-7xl tracking-tight">
                <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent dark:from-sky-400 dark:to-orange-400">
                  Collabrix
                </span>
              </h3>
            </motion.div>

            {/* Progress bar */}
            <div className="w-full max-w-md px-6">
              <div className={`h-[1px] w-full relative overflow-hidden ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}>
                <motion.div
                  className={`absolute inset-y-0 left-0 ${
                    isDark ? 'bg-sky-400' : 'bg-sky-600'
                  }`}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>

              {/* Percentage */}
              <motion.div
                className="mt-4 text-center text-xs tracking-[0.3em] opacity-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.2 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
