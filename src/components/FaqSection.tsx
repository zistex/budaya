import { useState } from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, buildWhatsAppUrl } from '../data/heritageData';
import { PageId } from './Footer';

interface FaqSectionProps {
  onNavigate: (page: PageId) => void;
}

export function FaqSection({ onNavigate }: FaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya memiliki pertanyaan mengenai kajian bangunan cagar budaya.'
  );

  return (
    <section className="bg-white min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-xs font-medium text-[#737373] mb-2">
          Pertanyaan
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A0A0A] tracking-tight mb-3 [text-wrap:balance]">
          Pertanyaan Seputar Jasa Kajian Cagar Budaya
        </h1>
        <p className="text-sm sm:text-base text-[#525252] mb-8 max-w-2xl">
          Informasi ringkas mengenai cakupan layanan nasional se-Indonesia, perijinan PBG, serta alur konsultasi gratis bersama tim arsitek kami.
        </p>

        <div className="border-t border-[#E5E5E5]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id} className="border-b border-[#E5E5E5]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                  className="w-full min-h-[52px] py-4 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-medium text-[#0A0A0A] hover:text-[#404040] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#525252] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 pr-6 text-sm text-[#525252] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#525252]">
            Masih ada pertanyaan khusus terkait bangunan cagar budaya Anda?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Konsultasi Gratis via WA Langsung</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('kontak')}
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#0A0A0A] border border-[#D4D4D4] bg-white hover:bg-[#F4F4F4] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Buka Halaman Kontak</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
