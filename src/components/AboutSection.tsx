import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/heritageData';
import { ArchivalImage } from './ArchivalImage';
import { PageId } from './Footer';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya ingin berdiskusi dengan arsitek bersertifikat mengenai bangunan cagar budaya.'
  );

  return (
    <section className="bg-white min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Kolom Kiri: Pernyataan Resmi Siapa Kami */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#737373] tabular-nums mb-2">
                01. Siapa Kami
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-[#0A0A0A] leading-snug [text-wrap:balance]">
                Kami adalah arsitek profesional yang membidangi arsitektur bangunan cagar budaya yang telah memiliki sertifikat dan pengalaman.
              </h1>

              <p className="mt-5 text-sm sm:text-base text-[#525252] leading-relaxed max-w-2xl">
                Melayani jasa kajian, penelitian, perijinan bangunan (PBG), rehabilitasi, pembongkaran terkendali, revitalisasi, serta perawatan dan pelestarian bangunan cagar budaya secara nasional di seluruh wilayah Indonesia.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#525252]">
                <span className="font-medium text-[#0A0A0A]">Arsitek Bersertifikat</span>
                <span aria-hidden="true">·</span>
                <span>Berpengalaman di Bidang Cagar Budaya</span>
                <span aria-hidden="true">·</span>
                <span>Cakupan Nasional Se-Indonesia</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center gap-4">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <span>Konsultasi Gratis via WA</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('portofolio')}
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#0A0A0A] border border-[#D4D4D4] bg-white hover:bg-[#F4F4F4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Foto Arsip Hitam Putih Bangunan Cagar Budaya */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[260px] lg:min-h-[340px] border border-[#E5E5E5] bg-[#F4F4F4] overflow-hidden">
              <ArchivalImage
                src="/src/assets/images/heritage_pendopo_jawa_1795140993577.jpg"
                alt="Arsip foto hitam putih bangunan cagar budaya pendopo tradisional Jawa"
                caption="Arsip Dokumentasi Arsitektur Cagar Budaya"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-[#737373]">
              Arsip kajian dan pelestarian arsitektur cagar budaya nasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
