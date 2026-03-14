import { useState, useEffect } from 'react';
import { WebsiteLayout } from './website/WebsiteLayout';
import { HomePage } from './website/HomePage';
import { AboutPage } from './website/AboutPage';
import { DesignPage } from './website/DesignPage';
import { TalentPage } from './website/TalentPage';
import { WorkPage } from './website/WorkPage';
import { ContactPage } from './website/ContactPage';

interface MainWebsiteProps {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate?: (page: 'privacy' | 'terms') => void;
}

type WebsitePage = 'home' | 'about' | 'design' | 'talent' | 'work' | 'contact';

export function MainWebsite({ isDark, toggleTheme, onNavigate }: MainWebsiteProps) {
  const [currentPage, setCurrentPage] = useState<WebsitePage>(() => {
    // Initialize from URL on first load
    const path = window.location.pathname.slice(1);
    const validPages = ['home', 'about', 'design', 'talent', 'work', 'contact'];
    return validPages.includes(path) ? (path as WebsitePage) : 'home';
  });

  const handlePageNavigate = (page: string) => {
    setCurrentPage(page as WebsitePage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL for better UX (without page reload)
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';
      setCurrentPage(path as WebsitePage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'about':
        return <AboutPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'design':
        return <DesignPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'talent':
        return <TalentPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'work':
        return <WorkPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'contact':
        return <ContactPage isDark={isDark} />;
      default:
        return <HomePage isDark={isDark} onNavigate={handlePageNavigate} />;
    }
  };

  return (
    <WebsiteLayout
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentPage={currentPage}
      onNavigate={handlePageNavigate}
      onLegalNavigate={onNavigate}
    >
      {renderPage()}
    </WebsiteLayout>
  );
}