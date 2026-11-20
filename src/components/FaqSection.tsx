import { useState } from 'react';
import { ArrowRight, MessageCircle, Minus, Plus } from 'lucide-react';
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
    <section className="bg-[#F5F3EE] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Kolom Kiri: Editorial Sticky Intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-xs font-semibold text-[#9E4725] mb-2">
              Pertanyaan
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#10231E] tracking-tight leading-tight [text-wrap:balance]">
              Pertanyaan Seputar Layanan Kajian
            </h1>
            <p className="mt-4 text-sm text-[#57534E] leading-relaxed">
              Panduan ringkas mengenai cakupan nasional se-Indonesia, prosedur kajian PBG, dan cara memulai konsultasi bersama tim arsitek kami.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#0F4022] shadow-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Tanya Langsung via WA</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('kontak')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-medium text-[#10231E] border border-[#CFC8BA] bg-white hover:bg-[#EAE5DC] transition-colors whitespace-nowrap"
              >
                <span>Buka Formulir Kontak</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Accordion Modern */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#DED8CC] shadow-xs px-6 sm:px-8 divide-y divide-[#EFECE6]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    className="w-full min-h-[64px] py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E] group"
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span className="text-xs font-semibold text-[#9E4725] tabular-nums shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#10231E] group-hover:text-[#9E4725] transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#9E4725] border-[#9E4725] text-white'
                          : 'bg-[#F5F3EE] border-[#DED8CC] text-[#10231E]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pl-7 sm:pl-8 pr-4 text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
