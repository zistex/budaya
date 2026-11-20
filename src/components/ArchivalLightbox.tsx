import { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { HeritageItem, buildWhatsAppUrl } from '../data/heritageData';
import { ArchivalImage } from './ArchivalImage';

interface ArchivalLightboxProps {
  item: HeritageItem | null;
  onClose: () => void;
}

export function ArchivalLightbox({ item, onClose }: ArchivalLightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const waUrl = buildWhatsAppUrl(
    `Halo Tim cagar budaya.com, saya tertarik berkonsultasi mengenai layanan ${item.service} seperti pada dokumentasi "${item.title}" (${item.location}).`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail dokumentasi ${item.title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAFAFA] border border-[#262626] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#E5E5E5] bg-white">
          <div className="min-w-0">
            <p className="text-xs text-[#737373] truncate">
              {item.service} · {item.location} · {item.year}
            </p>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#0A0A0A] truncate">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup tampilan foto"
            className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] border border-[#D4D4D4] bg-white text-[#0A0A0A] hover:bg-[#EFEFEF] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="aspect-[4/3] w-full bg-[#121212]">
          <ArchivalImage src={item.image} alt={item.alt} caption={item.title} />
        </div>

        <div className="px-5 py-4 bg-white border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#525252]">
            Dokumentasi Arsip Kajian Arsitektur Cagar Budaya Nasional
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 text-xs font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Konsultasi Serupa via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
