import { useState, useEffect } from 'react';
import { AgencyLayout } from './agency/AgencyLayout';
import { HomePage } from './agency/HomePage';
import { ServicesPage } from './agency/ServicesPage';
import { AboutPage } from './agency/AboutPage';
import { WorkPage } from './agency/WorkPage';
import { ContactPage } from './agency/ContactPage';

interface AgencySiteProps {
  isDark: boolean;
  toggleTheme: () => void;
}

type AgencyPage = 'home' | 'services' | 'about' | 'work' | 'contact';

export function AgencySite({ isDark, toggleTheme }: AgencySiteProps) {
  const [currentPage, setCurrentPage] = useState<AgencyPage>('home');

  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (['home', 'services', 'about', 'work', 'contact'].includes(hash)) {
        setCurrentPage(hash as AgencyPage);
      }
    };

    // Set initial page from URL hash
    const initialHash = window.location.hash.replace('#', '') || 'home';
    if (['home', 'services', 'about', 'work', 'contact'].includes(initialHash)) {
      setCurrentPage(initialHash as AgencyPage);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as AgencyPage);
    // Update URL hash without page reload
    window.history.pushState({}, '', `#${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage isDark={isDark} onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage isDark={isDark} />;
      case 'about':
        return <AboutPage isDark={isDark} />;
      case 'work':
        return <WorkPage isDark={isDark} />;
      case 'contact':
        return <ContactPage isDark={isDark} />;
      default:
        return <HomePage isDark={isDark} onNavigate={handleNavigate} />;
    }
  };

  return (
    <AgencyLayout 
      isDark={isDark} 
      toggleTheme={toggleTheme}
      currentPage={currentPage}
      onNavigate={handleNavigate}
    >
      {renderPage()}
    </AgencyLayout>
  );
}
