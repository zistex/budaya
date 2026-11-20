import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/heritageData';
import { PageId } from './Footer';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'siapa-kami', label: 'Siapa Kami' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'pertanyaan', label: 'Pertanyaan' },
  { id: 'kontak', label: 'Kontak' },
];

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya ingin konsultasi gratis mengenai kajian bangunan cagar budaya.'
  );

  const handleLinkClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('beranda');
          }}
          className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#0A0A0A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
        >
          cagar budaya.com
        </a>

        {/* Zone 2: Clean single-line multi-page navigation links */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-6 text-sm font-medium text-[#525252]">
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.id;
            return (
              <a
                key={link.id}
                href={link.id === 'beranda' ? '#/' : `#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A] ${
                  isActive
                    ? 'text-[#0A0A0A] underline underline-offset-4'
                    : 'hover:text-[#0A0A0A] hover:underline underline-offset-4'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-xs font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            Konsultasi WA
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[#0A0A0A] border border-[#E5E5E5] bg-white hover:bg-[#F4F4F4] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi mobile"
          className="md:hidden border-t border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.id;
            return (
              <a
                key={link.id}
                href={link.id === 'beranda' ? '#/' : `#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-[44px] flex items-center px-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0A0A0A] text-white'
                    : 'text-[#171717] hover:bg-[#EFEFEF]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 min-h-[44px] flex items-center justify-center px-4 py-2 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors"
          >
            Konsultasi Gratis via WA
          </a>
        </nav>
      )}
    </header>
  );
}
