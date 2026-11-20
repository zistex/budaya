import { ArrowRight, Maximize2, MessageCircle } from 'lucide-react';
import {
  CORE_SERVICES,
  HERITAGE_PORTFOLIO,
  HeritageItem,
  buildWhatsAppUrl,
} from '../data/heritageData';
import { ArchivalImage } from './ArchivalImage';
import { PageId } from './Footer';

interface HeroSectionProps {
  onSelectService: (serviceName: string) => void;
  onPreviewImage: (item: HeritageItem) => void;
  onNavigate: (page: PageId) => void;
}

export function HeroSection({
  onSelectService,
  onPreviewImage,
  onNavigate,
}: HeroSectionProps) {
  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya ingin konsultasi gratis terkait jasa kajian arsitektur bangunan cagar budaya.'
  );

  // Gambar sorotan arsitektur nasional pada hero split (tetap foto jadul hitam-putih)
  const heroHighlightPlate = HERITAGE_PORTFOLIO[2];

  // Duplikasi berurutan untuk kelancaran gerak berkesinambungan dari kanan atas ke kiri atas
  const marqueeItems = [...HERITAGE_PORTFOLIO, ...HERITAGE_PORTFOLIO];

  return (
    <section className="bg-[#F5F3EE]">
      {/* Baris Atas: Pita Galeri Foto Jadul Hitam-Putih Bergerak dari Kanan Atas ke Kiri Atas */}
      <div
        className="marquee-container relative overflow-hidden border-b border-[#1D3B33] bg-[#10231E] py-3.5 sm:py-4"
        aria-label="Galeri foto jadul bangunan cagar budaya bergerak dari kanan atas ke kiri atas"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 z-10 bg-gradient-to-r from-[#10231E] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 z-10 bg-gradient-to-l from-[#10231E] to-transparent" />

        <div className="animate-marquee-rtl flex items-center gap-3.5 sm:gap-4 px-2">
          {marqueeItems.map((item, idx) => (
            <button
              key={`${item.id}-${idx}`}
              type="button"
              onClick={() => onPreviewImage(item)}
              className="group relative shrink-0 w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-lg overflow-hidden border border-white/20 hover:border-[#D49B6A] bg-[#0B1714] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Lihat arsip ${item.title}`}
            >
              <ArchivalImage
                src={item.image}
                alt={item.alt}
                caption={item.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 py-2 text-left">
                <p className="text-[11px] font-medium text-white/95 truncate">
                  {item.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Split Arsitektural Modern */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Kolom Kiri: Identitas Nasional & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#9E4725] tracking-wide mb-3">
                Penawaran Nasional · Seluruh Indonesia
              </p>

              <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-[#10231E] leading-[1.02] [text-wrap:balance]">
                cagar budaya.com
              </h1>

              <p className="mt-4 sm:mt-5 font-serif text-xl sm:text-2xl lg:text-[1.75rem] text-[#292524] leading-snug max-w-xl [text-wrap:balance]">
                Jasa Kajian dan Penelitian Arsitektur Cagar Budaya Nasional
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
                Pendampingan arsitek profesional bersertifikat untuk pelestarian, penelitian, dan perijinan bangunan cagar budaya di seluruh wilayah Indonesia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DED8CC] flex flex-wrap items-center gap-3.5">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#0F4022] shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Konsultasi Gratis via WA Langsung</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('portofolio')}
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-lg text-sm font-medium text-[#10231E] border border-[#CFC8BA] bg-white hover:bg-[#EAE5DC] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Pelat Foto Jadul Hitam-Putih */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={() => onPreviewImage(heroHighlightPlate)}
              className="group relative flex-1 min-h-[250px] lg:min-h-[340px] rounded-2xl border border-[#DED8CC] bg-[#10231E] overflow-hidden text-left shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
              aria-label={`Perbesar foto ${heroHighlightPlate.title}`}
            >
              <ArchivalImage
                src={heroHighlightPlate.image}
                alt={heroHighlightPlate.alt}
                caption={heroHighlightPlate.title}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute top-3.5 right-3.5 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#10231E]/85 text-white border border-white/20 opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
                <p className="text-[11px] font-medium text-[#E5B88E]">
                  {heroHighlightPlate.service} · {heroHighlightPlate.location}
                </p>
                <p className="font-serif text-lg font-medium text-white mt-0.5">
                  {heroHighlightPlate.title}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* 6 Penawaran Jasa di Halaman Depan — Hanya Teks Saja */}
        <div className="mt-12 sm:mt-14">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <p className="text-xs font-semibold text-[#9E4725]">
              Bidang Layanan Kajian Bangunan Cagar Budaya
            </p>
            <p className="text-xs text-[#57534E] hidden sm:block">
              Pilih layanan untuk konsultasi langsung
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CORE_SERVICES.map((service, index) => (
              <li key={service}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(service);
                    onNavigate('kontak');
                  }}
                  className="w-full h-full text-left px-5 py-5 sm:px-6 sm:py-5 rounded-xl border border-[#DED8CC] bg-white hover:bg-[#10231E] hover:border-[#10231E] text-[#10231E] hover:text-white shadow-xs transition-all duration-200 flex items-baseline gap-3.5 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
                >
                  <span className="text-xs font-semibold text-[#9E4725] group-hover:text-[#E5B88E] tabular-nums shrink-0 transition-colors">
                    0{index + 1}.
                  </span>
                  <span className="font-serif text-xl font-semibold tracking-tight leading-snug">
                    {service}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* Navigasi Halaman Utama: 01. Siapa Kami · 02. Portofolio · 03. Kontak */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <button
            type="button"
            onClick={() => onNavigate('siapa-kami')}
            className="text-left p-5 rounded-xl bg-white border border-[#DED8CC] hover:border-[#9E4725] shadow-xs transition-colors group"
          >
            <p className="text-xs font-semibold text-[#9E4725] tabular-nums mb-1.5">01. Siapa Kami</p>
            <p className="font-serif text-xl font-semibold text-[#10231E] flex items-center justify-between gap-2">
              <span>Arsitek Bersertifikat Nasional</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#57534E] group-hover:text-[#9E4725] group-hover:translate-x-1 transition-all" />
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('portofolio')}
            className="text-left p-5 rounded-xl bg-white border border-[#DED8CC] hover:border-[#9E4725] shadow-xs transition-colors group"
          >
            <p className="text-xs font-semibold text-[#9E4725] tabular-nums mb-1.5">02. Portofolio</p>
            <p className="font-serif text-xl font-semibold text-[#10231E] flex items-center justify-between gap-2">
              <span>Arsip Kajian Se-Indonesia</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#57534E] group-hover:text-[#9E4725] group-hover:translate-x-1 transition-all" />
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('kontak')}
            className="text-left p-5 rounded-xl bg-[#10231E] text-white border border-[#10231E] hover:bg-[#17332C] shadow-sm transition-colors group"
          >
            <p className="text-xs font-medium text-[#E5B88E] tabular-nums mb-1.5">03. Kontak & Pertanyaan</p>
            <p className="font-serif text-xl font-semibold text-white flex items-center justify-between gap-2">
              <span>Konsultasi Gratis via WA</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-white/80 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
