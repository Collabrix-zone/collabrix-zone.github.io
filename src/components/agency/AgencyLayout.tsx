import { motion } from 'motion/react';
import { useState, ReactNode } from 'react';
import { CollabrixLogo } from '../CollabrixLogo';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

interface AgencyLayoutProps {
  isDark: boolean;
  toggleTheme: () => void;
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function AgencyLayout({ isDark, toggleTheme, children, currentPage, onNavigate }: AgencyLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'About', path: 'about' },
    { name: 'Work', path: 'work' },
    { name: 'Contact', path: 'contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#faf8f4' : '#2a2a2a'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-br from-sky-400/15 to-orange-400/10' 
              : 'bg-gradient-to-br from-sky-600/8 to-orange-600/5'
          }`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeOut" }}
          className={`absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-tr from-orange-400/15 to-sky-400/10' 
              : 'bg-gradient-to-tr from-orange-600/8 to-sky-600/5'
          }`}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="px-4 sm:px-6 md:px-8 py-6 sticky top-0 backdrop-blur-md bg-background/80 border-b border-current/10 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <button onClick={() => handleNavClick('home')} className="cursor-pointer">
              <CollabrixLogo isDark={isDark} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`hover:opacity-70 transition-opacity relative ${
                    currentPage === item.path ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  {item.name}
                  {currentPage === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isDark ? 'bg-sky-400' : 'bg-sky-600'
                      }`}
                    />
                  )}
                </button>
              ))}
              
              <Button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-transparent border-2 border-current hover:bg-white/5 transition-colors"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-xl border-2 border-current"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 p-6 rounded-2xl border-2 border-current/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`hover:opacity-70 transition-opacity text-left ${
                      currentPage === item.path ? 'opacity-100' : 'opacity-80'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                <Button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-transparent border-2 border-current hover:bg-white/5 transition-colors w-full flex items-center justify-center gap-2"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.header>

        {/* Page Content */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>

        {/* Footer */}
        <footer className="px-4 sm:px-6 md:px-8 py-12 mt-20 border-t-2 border-current/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <CollabrixLogo isDark={isDark} />
                <p className="mt-4 opacity-60">Premium UI/UX Design Agency</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 text-center md:text-left">
                <div>
                  <h4 className="mb-2">Contact</h4>
                  <a 
                    href="mailto:hello@thecollabrix.com" 
                    className="opacity-70 hover:opacity-100 transition-opacity block"
                  >
                    hello@thecollabrix.com
                  </a>
                </div>

                <div>
                  <h4 className="mb-2">Follow Us</h4>
                  <a 
                    href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity block"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-current/10 text-center opacity-60">
              <p>&copy; 2025 Collabrix. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
