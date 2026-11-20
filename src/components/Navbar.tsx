import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
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
    <header className="sticky top-0 z-40 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#DED8CC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('beranda');
          }}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#10231E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10231E]"
        >
          cagar budaya.com
        </a>

        {/* Zone 2: Clean single-line multi-page navigation links */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#57534E]">
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
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10231E] ${
                  isActive ? 'text-[#10231E] font-semibold' : 'hover:text-[#10231E]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#9E4725] rounded-full"
                  />
                )}
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
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-medium tracking-wide bg-[#14532D] text-white rounded-lg hover:bg-[#0F4022] shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
          >
            Konsultasi WA
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-[#10231E] border border-[#D4CEC2] bg-white hover:bg-[#EAE5DC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Navigasi mobile"
          className="md:hidden border-t border-[#DED8CC] bg-[#F5F3EE] px-4 py-3 flex flex-col gap-1"
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
                className={`min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#10231E] text-white'
                    : 'text-[#1C1917] hover:bg-[#EAE5DC]'
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
            className="mt-2 min-h-[44px] flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#0F4022] transition-colors"
          >
            Konsultasi Gratis via WA
          </a>
        </nav>
      )}
    </header>
  );
}
