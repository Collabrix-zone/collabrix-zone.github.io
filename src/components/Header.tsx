import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { CollabrixLogo } from './CollabrixLogo';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full px-4 sm:px-6 py-2 flex items-center justify-between z-20"
        role="banner"
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">
            <a 
              href="#" 
              className="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2 -mx-3 -my-2 transition-colors hover:opacity-80"
            >
              <CollabrixLogo isDark={isDark} className="h-6 sm:h-8 w-auto" />
            </a>
          </h1>
        </motion.div>
        
        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] min-w-[44px] flex items-center justify-center ${
            isDark 
              ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
              : 'bg-gray-900/5 hover:bg-gray-900/10 border border-gray-200/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={isDark}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1.1 : 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {isDark ? (
              <Sun size={20} className="text-orange-400" />
            ) : (
              <Moon size={20} className="text-sky-600" />
            )}
          </motion.div>
        </motion.button>
      </motion.header>
    </>
  );
}