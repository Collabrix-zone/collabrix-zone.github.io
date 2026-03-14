import { motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';
import { Mail, Linkedin, Heart, Menu, X, Sun, Moon } from 'lucide-react';
import { CollabrixLogo } from '../CollabrixLogo';

interface WebsiteLayoutProps {
  children: ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLegalNavigate?: (page: 'privacy' | 'terms') => void;
}

export function WebsiteLayout({ 
  children, 
  isDark, 
  toggleTheme, 
  currentPage, 
  onNavigate,
  onLegalNavigate 
}: WebsiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Design', path: 'design' },
    { name: 'Talent', path: 'talent' },
    { name: 'Work', path: 'work' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700">
      {/* Skip to main content - WCAG AAA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-4 focus:bg-sky-800 focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-600 dark:focus:bg-sky-600 dark:focus:ring-sky-400"
      >
        Skip to main content
      </a>

      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#faf8f4' : '#2a2a2a'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
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
        {/* Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky top-0 z-40 backdrop-blur-xl border-b border-current/10"
          style={{
            backgroundColor: isDark ? 'rgba(42, 42, 42, 0.8)' : 'rgba(250, 248, 244, 0.8)'
          }}
          role="banner"
        >
          <nav 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
            aria-label="Main navigation"
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => onNavigate('home')}
                className="focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded-lg"
                aria-label="Collabrix - Go to home page"
              >
                <CollabrixLogo isDark={isDark} className="h-8 sm:h-10 w-auto" />
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => onNavigate(link.path)}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 ${
                      currentPage === link.path
                        ? 'text-sky-800 dark:text-sky-400 bg-sky-600/10 dark:bg-sky-400/10'
                        : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    aria-current={currentPage === link.path ? 'page' : undefined}
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Theme toggle + Mobile menu */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  aria-pressed={isDark}
                >
                  <span className="text-xl" aria-hidden="true">
                    {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
                  </span>
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {mobileMenuOpen ? (
                    <X size={24} aria-hidden="true" />
                  ) : (
                    <Menu size={24} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-current/10 pt-4"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => onNavigate(link.path)}
                      className={`px-4 py-3 rounded-lg text-base font-medium text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[44px] ${
                        currentPage === link.path
                          ? 'text-sky-800 dark:text-sky-400 bg-sky-600/10 dark:bg-sky-400/10'
                          : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                      aria-current={currentPage === link.path ? 'page' : undefined}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </nav>
        </motion.header>

        {/* Main Content */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-current/10"
          role="contentinfo"
          aria-label="Site footer"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <CollabrixLogo isDark={isDark} className="h-10 w-auto mb-4" />
                <p className="text-base opacity-70 mb-4 max-w-md leading-relaxed">
                  Premium Design & Talent Studio. Crafting exceptional digital experiences and connecting businesses with world-class talent.
                </p>
                <div className="flex items-center gap-2 text-sm opacity-60">
                  <span>Made with</span>
                  <Heart size={14} className="text-red-500" aria-label="love" />
                  <span>in India</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <ul className="space-y-3" role="list">
                  {navLinks.slice(0, 4).map((link) => (
                    <li key={link.path}>
                      <button
                        onClick={() => onNavigate(link.path)}
                        className="text-base opacity-70 hover:opacity-100 hover:text-sky-600 dark:hover:text-sky-400 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded px-2 py-1 -ml-2 min-h-[44px] flex items-center"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
                <ul className="space-y-3" role="list">
                  <li>
                    <a
                      href="mailto:hello@thecollabrix.com"
                      className="flex items-center gap-3 text-base opacity-70 hover:opacity-100 hover:text-sky-600 dark:hover:text-sky-400 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded px-2 py-2 -ml-2 min-h-[44px]"
                    >
                      <Mail size={18} aria-hidden="true" />
                      <span>Email Us</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/collabrix-zone-pvt-ltd/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base opacity-70 hover:opacity-100 hover:text-sky-600 dark:hover:text-sky-400 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded px-2 py-2 -ml-2 min-h-[44px]"
                    >
                      <Linkedin size={18} aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm opacity-60">
                © {new Date().getFullYear()} Collabrix Zone Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <button
                  onClick={() => onLegalNavigate?.('privacy')}
                  className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded px-3 py-2 min-h-[44px]"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onLegalNavigate?.('terms')}
                  className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 rounded px-3 py-2 min-h-[44px]"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}