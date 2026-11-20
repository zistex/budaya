import { ArrowRight, MessageCircle } from 'lucide-react';
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

  // Duplikasi berurutan untuk kelancaran gerak berkesinambungan dari kanan atas ke kiri atas
  const marqueeItems = [...HERITAGE_PORTFOLIO, ...HERITAGE_PORTFOLIO];

  return (
    <section className="bg-[#FAFAFA]">
      {/* Baris Atas: Gambar Bangunan Cagar Budaya Hitam-Putih Bergerak dari Kanan Atas ke Kiri Atas */}
      <div
        className="marquee-container overflow-hidden border-b border-[#E5E5E5] bg-[#121212] py-3 sm:py-4"
        aria-label="Galeri foto jadul bangunan cagar budaya bergerak dari kanan ke kiri"
      >
        <div className="animate-marquee-rtl flex items-center gap-3 sm:gap-4 px-2">
          {marqueeItems.map((item, idx) => (
            <button
              key={`${item.id}-${idx}`}
              type="button"
              onClick={() => onPreviewImage(item)}
              className="group relative shrink-0 w-44 sm:w-56 md:w-64 aspect-[4/3] overflow-hidden border border-white/20 bg-[#1C1C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Lihat arsip ${item.title}`}
            >
              <ArchivalImage
                src={item.image}
                alt={item.alt}
                caption={item.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 py-2 text-left opacity-95">
                <p className="text-[11px] font-medium text-white truncate">
                  {item.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Konten Utama Halaman Depan */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium text-[#525252] tracking-wide mb-3">
            Penawaran Nasional · Seluruh Indonesia
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[#0A0A0A] leading-[1.08] [text-wrap:balance]">
            cagar budaya.com
          </h1>

          <p className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl text-[#262626] leading-snug [text-wrap:balance]">
            Jasa Kajian dan Penelitian Arsitektur Cagar Budaya Nasional
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Konsultasi Gratis via WA Langsung</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('portofolio')}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#0A0A0A] border border-[#D4D4D4] bg-white hover:bg-[#F4F4F4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
            >
              Lihat Portofolio
            </button>
          </div>
        </div>

        {/* 6 Penawaran Jasa di Halaman Depan — Teks Saja */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#E5E5E5]">
          <p className="text-xs font-medium text-[#525252] mb-5">
            Bidang Layanan Kajian Bangunan Cagar Budaya
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {CORE_SERVICES.map((service, index) => (
              <li key={service} className="border-b border-[#E5E5E5] pb-3">
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(service);
                    onNavigate('kontak');
                  }}
                  className="w-full text-left group flex items-baseline gap-3 text-[#0A0A0A] hover:text-[#404040] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span className="text-xs font-medium text-[#737373] tabular-nums shrink-0">
                    0{index + 1}.
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-medium tracking-tight group-hover:underline underline-offset-4">
                    {service}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* Navigasi Ringkas ke Halaman Utama (Slot 1, 2, 3) */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#E5E5E5] grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => onNavigate('siapa-kami')}
            className="text-left p-5 bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors group"
          >
            <p className="text-xs text-[#737373] tabular-nums mb-1">01. Siapa Kami</p>
            <p className="font-serif text-lg font-semibold text-[#0A0A0A] flex items-center justify-between gap-2">
              <span>Arsitek Profesional Bersertifikat</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#525252] group-hover:translate-x-0.5 transition-transform" />
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('portofolio')}
            className="text-left p-5 bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors group"
          >
            <p className="text-xs text-[#737373] tabular-nums mb-1">02. Portofolio</p>
            <p className="font-serif text-lg font-semibold text-[#0A0A0A] flex items-center justify-between gap-2">
              <span>Dokumentasi Kajian Nasional</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#525252] group-hover:translate-x-0.5 transition-transform" />
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('kontak')}
            className="text-left p-5 bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors group"
          >
            <p className="text-xs text-[#737373] tabular-nums mb-1">03. Kontak & Pertanyaan</p>
            <p className="font-serif text-lg font-semibold text-[#0A0A0A] flex items-center justify-between gap-2">
              <span>Konsultasi Gratis via WA</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#525252] group-hover:translate-x-0.5 transition-transform" />
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
