import { useState } from 'react';
import { Maximize2, MessageCircle } from 'lucide-react';
import { HERITAGE_PORTFOLIO, HeritageItem, buildWhatsAppUrl } from '../data/heritageData';
import { ArchivalImage } from './ArchivalImage';

interface PortfolioSectionProps {
  onSelectProject: (item: HeritageItem) => void;
}

type FilterKey = 'semua' | 'penelitian' | 'pbg-rehabilitasi' | 'revitalisasi-pelestarian';

const FILTER_OPTIONS: { key: FilterKey; label: string }[] = [
  { key: 'semua', label: 'Semua' },
  { key: 'penelitian', label: 'Penelitian' },
  { key: 'pbg-rehabilitasi', label: 'PBG & Rehabilitasi' },
  { key: 'revitalisasi-pelestarian', label: 'Revitalisasi & Pelestarian' },
];

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('semua');

  const visibleItems =
    activeFilter === 'semua'
      ? HERITAGE_PORTFOLIO
      : HERITAGE_PORTFOLIO.filter((item) => item.filterGroup === activeFilter);

  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya ingin berkonsultasi mengenai portofolio dan kebutuhan kajian cagar budaya.'
  );

  return (
    <section className="bg-[#FAFAFA] min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium text-[#737373] tabular-nums mb-2">
              02. Portofolio
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A0A0A] tracking-tight">
              Dokumentasi Kajian & Pelestarian Nasional
            </h1>
          </div>

          <div
            role="tablist"
            aria-label="Filter portofolio kajian cagar budaya"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#EFEFEF] border border-[#E5E5E5] self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((opt) => {
              const isActive = activeFilter === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(opt.key)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white'
                      : 'text-[#525252] hover:text-[#0A0A0A]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Galeri Foto Jadul Hitam-Putih */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white border border-[#E5E5E5] flex flex-col"
            >
              <button
                type="button"
                onClick={() => onSelectProject(item)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEFEF] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                aria-label={`Perbesar dokumentasi ${item.title}`}
              >
                <ArchivalImage
                  src={item.image}
                  alt={item.alt}
                  caption={item.title}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </button>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#737373] mb-1.5">
                    <span>{item.service}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{item.year}</span>
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-[#0A0A0A] leading-snug">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-3 pt-3 border-t border-[#F0F0F0] text-xs text-[#525252]">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#525252]">
            Membutuhkan kajian serupa untuk bangunan cagar budaya di daerah Anda?
          </p>
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Konsultasi Gratis via WA Langsung</span>
          </a>
        </div>
      </div>
    </section>
  );
}
