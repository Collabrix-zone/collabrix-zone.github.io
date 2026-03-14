import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Loader } from './components/Loader';

type Page = 'home' | 'privacy' | 'terms' | '404';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize app and handle URL routing
    const initializeApp = async () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }

      // Handle initial URL routing
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else if (path === '/privacy' || path.includes('privacy')) {
        setCurrentPage('privacy');
      } else if (path === '/terms' || path.includes('terms')) {
        setCurrentPage('terms');
      } else {
        setCurrentPage('404');
      }

      // Simulate loading time for smooth user experience
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    initializeApp();

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else if (path === '/privacy' || path.includes('privacy')) {
        setCurrentPage('privacy');
      } else if (path === '/terms' || path.includes('terms')) {
        setCurrentPage('terms');
      } else {
        setCurrentPage('404');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Show loader while initializing
  if (isLoading) {
    return <Loader />;
  }

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navigateTo = (page: Exclude<Page, '404'>) => {
    setCurrentPage(page);
    
    // Update URL without page reload
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
    
    window.scrollTo(0, 0);
  };

  const navigateHome = () => navigateTo('home');

  // Render different pages based on current page state
  if (currentPage === 'privacy') {
    return <PrivacyPage isDark={isDark} onBack={navigateHome} toggleTheme={toggleTheme} onNavigate={navigateTo} />;
  }

  if (currentPage === 'terms') {
    return <TermsPage isDark={isDark} onBack={navigateHome} toggleTheme={toggleTheme} onNavigate={navigateTo} />;
  }

  if (currentPage === '404') {
    return <NotFoundPage isDark={isDark} toggleTheme={toggleTheme} onNavigateHome={navigateHome} />;
  }

  // Home page
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700" lang="en">
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
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <Footer isDark={isDark} onNavigate={navigateTo} />
      </div>
    </div>
  );
}