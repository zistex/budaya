import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import { HERITAGE_PORTFOLIO, HeritageItem, buildWhatsAppUrl } from '../data/heritageData';
import { ArchivalImage } from './ArchivalImage';

interface ArchivalLightboxProps {
  item: HeritageItem | null;
  onClose: () => void;
  onSelect: (item: HeritageItem) => void;
}

export function ArchivalLightbox({ item, onClose, onSelect }: ArchivalLightboxProps) {
  const currentIndex = item
    ? HERITAGE_PORTFOLIO.findIndex((p) => p.id === item.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex < 0) return;
    const prevIdx = (currentIndex - 1 + HERITAGE_PORTFOLIO.length) % HERITAGE_PORTFOLIO.length;
    onSelect(HERITAGE_PORTFOLIO[prevIdx]);
  };

  const handleNext = () => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex + 1) % HERITAGE_PORTFOLIO.length;
    onSelect(HERITAGE_PORTFOLIO[nextIdx]);
  };

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!item) return null;

  const waUrl = buildWhatsAppUrl(
    `Halo Tim cagar budaya.com, saya tertarik berkonsultasi mengenai layanan ${item.service} seperti pada dokumentasi "${item.title}" (${item.location}).`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B1714]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail dokumentasi ${item.title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-[#DED8CC] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#DED8CC] bg-[#F5F3EE]">
          <div className="min-w-0">
            <p className="text-xs font-medium text-[#9E4725] truncate">
              {item.service} · {item.location} · {item.year}
            </p>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#10231E] truncate">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto sebelumnya"
              className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg border border-[#D4CEC2] bg-white text-[#10231E] hover:bg-[#EAE5DC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto berikutnya"
              className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg border border-[#D4CEC2] bg-white text-[#10231E] hover:bg-[#EAE5DC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup tampilan foto"
              className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg bg-[#10231E] text-white hover:bg-[#1C3831] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="aspect-[4/3] max-h-[65vh] w-full bg-[#10231E]">
          <ArchivalImage src={item.image} alt={item.alt} caption={item.title} />
        </div>

        <div className="px-5 py-4 bg-white border-t border-[#DED8CC] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#57534E] tabular-nums">
            Arsip {currentIndex + 1} dari {HERITAGE_PORTFOLIO.length} · Foto Arsip Hitam-Putih
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-lg text-xs font-medium bg-[#14532D] text-white hover:bg-[#0F4022] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Konsultasi Serupa via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
