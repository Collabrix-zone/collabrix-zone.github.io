import { useState, useEffect } from 'react';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Loader } from './components/Loader';
import { MainWebsite } from './components/MainWebsite';

type Page = 'home' | 'privacy' | 'terms' | '404';

// All valid pages in the multi-page website
const WEBSITE_PAGES = ['about', 'design', 'talent', 'products', 'work', 'contact'];

function resolveAppPage(path: string): Page {
  const clean = path.replace(/^\//, '').split('?')[0].split('#')[0];
  if (clean === '' || clean === 'home' || WEBSITE_PAGES.includes(clean)) return 'home';
  if (clean.startsWith('work/')) return 'home';
  if (clean === 'privacy' || clean.includes('privacy')) return 'privacy';
  if (clean === 'terms' || clean.includes('terms')) return 'terms';
  return '404';
}

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }

      const path = window.location.pathname;
      setCurrentPage(resolveAppPage(path));

      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    initializeApp();

    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(resolveAppPage(path));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
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
      <MainWebsite isDark={isDark} toggleTheme={toggleTheme} onNavigate={navigateTo} />
    </div>
  );
}