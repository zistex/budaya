import { useState } from 'react';
import { Maximize2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
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
    <section className="bg-[#F5F3EE] min-h-[calc(100vh-8.5rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header & Animated Segmented Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED8CC] mb-8">
          <div>
            <p className="text-xs font-semibold text-[#9E4725] tabular-nums mb-2">
              02. Portofolio
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#10231E] tracking-tight leading-tight">
              Dokumentasi Kajian & Pelestarian Nasional
            </h1>
          </div>

          <div
            role="tablist"
            aria-label="Filter portofolio kajian cagar budaya"
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#E8E3D9] border border-[#D4CEC2] self-start lg:self-auto"
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
                  className={`relative min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E] ${
                    isActive ? 'text-white' : 'text-[#57534E] hover:text-[#10231E]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter-bg"
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-[#10231E]"
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Galeri Asimetris Modern (Foto Tetap Hitam-Putih Jadul) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {visibleItems.map((item, idx) => {
            const isLeadPlate = activeFilter === 'semua' && idx === 0;
            const colSpanClass =
              activeFilter === 'semua'
                ? idx === 0
                  ? 'lg:col-span-7'
                  : idx === 1
                  ? 'lg:col-span-5'
                  : 'lg:col-span-4'
                : visibleItems.length === 1
                ? 'lg:col-span-8'
                : 'lg:col-span-6';

            return (
              <article
                key={item.id}
                className={`${colSpanClass} group bg-white rounded-2xl border border-[#DED8CC] hover:border-[#9E4725] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className={`relative w-full overflow-hidden bg-[#10231E] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E] ${
                    isLeadPlate ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                  aria-label={`Perbesar dokumentasi ${item.title}`}
                >
                  <ArchivalImage
                    src={item.image}
                    alt={item.alt}
                    caption={item.title}
                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3.5 right-3.5 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#10231E]/85 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#9E4725] mb-2">
                      <span>{item.service}</span>
                      <span aria-hidden="true" className="text-[#A8A29E]">·</span>
                      <span className="tabular-nums text-[#57534E]">{item.year}</span>
                    </div>
                    <h2
                      className={`font-serif font-semibold text-[#10231E] leading-snug ${
                        isLeadPlate ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                      }`}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <p className="mt-4 pt-3 border-t border-[#EFECE6] text-xs text-[#57534E]">
                    {item.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action Bawah Portofolio */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#10231E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
          <div>
            <p className="font-serif text-xl sm:text-2xl font-medium">
              Membutuhkan kajian untuk bangunan cagar budaya di kota Anda?
            </p>
            <p className="text-xs sm:text-sm text-white/75 mt-1">
              Tim arsitek kami siap melayani seluruh provinsi di Indonesia.
            </p>
          </div>
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#166534] border border-white/15 transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Konsultasi Gratis via WA Langsung</span>
          </a>
        </div>
      </div>
    </section>
  );
}
