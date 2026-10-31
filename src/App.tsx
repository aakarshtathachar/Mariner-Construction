import { useEffect } from 'react';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import { useHashRoute } from '@/hooks/useHashRoute';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';

function renderPage(section: string) {
  switch (section) {
    case 'services':
      return <ServicesPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  const { section } = useHashRoute();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [section]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink-700">
      <SiteHeader activeSection={section} />
      <main className="flex-1">{renderPage(section)}</main>
      <SiteFooter />
    </div>
  );
}

export default App;
