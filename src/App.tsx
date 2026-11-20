import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ArchivalLightbox } from './components/ArchivalLightbox';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer, PageId } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { CORE_SERVICES, HeritageItem } from './data/heritageData';

function getPageFromHash(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (
    raw === 'siapa-kami' ||
    raw === 'portofolio' ||
    raw === 'pertanyaan' ||
    raw === 'kontak'
  ) {
    return raw;
  }
  return 'beranda';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => getPageFromHash());
  const [selectedService, setSelectedService] = useState<string>(CORE_SERVICES[0]);
  const [activeLightboxItem, setActiveLightboxItem] = useState<HeritageItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((page: PageId) => {
    const targetHash = page === 'beranda' ? '#/' : `#/${page}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setActivePage(page);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0A0A0A]">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activePage === 'beranda' && (
          <HeroSection
            onSelectService={setSelectedService}
            onPreviewImage={setActiveLightboxItem}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'siapa-kami' && (
          <AboutSection onNavigate={handleNavigate} />
        )}

        {activePage === 'portofolio' && (
          <PortfolioSection onSelectProject={setActiveLightboxItem} />
        )}

        {activePage === 'pertanyaan' && (
          <FaqSection onNavigate={handleNavigate} />
        )}

        {activePage === 'kontak' && (
          <ContactSection
            selectedService={selectedService}
            onChangeService={setSelectedService}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <ArchivalLightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}
