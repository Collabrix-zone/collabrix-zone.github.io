import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

interface JumpToTopProps {
  isDark: boolean;
}

export function JumpToTop({ isDark }: JumpToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className={`h-12 w-12 rounded-full shadow-2xl border-2 transition-all duration-300 hover:scale-110 focus:scale-110 ${
              isDark
                ? 'bg-sky-600 hover:bg-sky-700 border-sky-500/30 shadow-sky-500/20'
                : 'bg-sky-600 hover:bg-sky-700 border-sky-600/20 shadow-sky-600/20'
            }`}
            aria-label="Jump to top of page"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <ArrowUp size={20} className="text-white" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}