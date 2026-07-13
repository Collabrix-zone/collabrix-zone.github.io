import { useState, useEffect } from 'react';
import { WebsiteLayout } from './website/WebsiteLayout';
import { HomePage } from './website/HomePage';
import { AboutPage } from './website/AboutPage';
import { DesignPage } from './website/DesignPage';
import { TalentPage } from './website/TalentPage';
import { WorkPage } from './website/WorkPage';
import { ContactPage } from './website/ContactPage';
import { CaseStudyPage } from './website/CaseStudyPage';
import { ProductsPage } from './website/ProductsPage';

interface MainWebsiteProps {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate?: (page: 'privacy' | 'terms') => void;
}

const VALID_PAGES = ['home', 'about', 'design', 'talent', 'products', 'work', 'contact'];

export function MainWebsite({ isDark, toggleTheme, onNavigate }: MainWebsiteProps) {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const path = window.location.pathname.slice(1);
    if (VALID_PAGES.includes(path)) return path;
    if (path.startsWith('work/')) return path;
    return 'home';
  });

  const handlePageNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    if (currentPage.startsWith('work/')) {
      const slug = currentPage.slice(5);
      return <CaseStudyPage slug={slug} isDark={isDark} onNavigate={handlePageNavigate} />;
    }
    switch (currentPage) {
      case 'home':
        return <HomePage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'about':
        return <AboutPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'design':
        return <DesignPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'talent':
        return <TalentPage isDark={isDark} onNavigate={handlePageNavigate} />;
      case 'products':
        return <ProductsPage isDark={isDark} />;
      // case 'work':
      //   return <WorkPage isDark={isDark} onNavigate={handlePageNavigate} />;
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