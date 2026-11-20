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
    <section className="bg-[#F5F3EE] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Kolom Kiri: Pernyataan Resmi Siapa Kami */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-[#9E4725] tabular-nums mb-3">
                01. Siapa Kami
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#10231E] leading-[1.14] [text-wrap:balance]">
                Kami adalah arsitek profesional yang membidangi arsitektur bangunan cagar budaya yang telah memiliki sertifikat dan pengalaman.
              </h1>

              <p className="mt-6 text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
                Melayani jasa kajian, penelitian, perijinan bangunan (PBG), rehabilitasi, pembongkaran terkendali, revitalisasi, serta perawatan dan pelestarian bangunan cagar budaya secara nasional di seluruh wilayah Indonesia.
              </p>

              {/* Pilar Kredensial Arsitektur */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 rounded-xl border border-[#DED8CC] divide-y sm:divide-y-0 sm:divide-x divide-[#DED8CC] bg-white shadow-xs overflow-hidden">
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold text-[#9E4725] mb-1">Kompetensi</p>
                  <p className="font-serif text-lg font-semibold text-[#10231E]">
                    Arsitek Bersertifikat
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold text-[#9E4725] mb-1">Spesialisasi</p>
                  <p className="font-serif text-lg font-semibold text-[#10231E]">
                    Bangunan Cagar Budaya
                  </p>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold text-[#9E4725] mb-1">Wilayah Layanan</p>
                  <p className="font-serif text-lg font-semibold text-[#10231E]">
                    Nasional Se-Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[46px] px-6 py-3 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#0F4022] shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
              >
                <span>Konsultasi Gratis via WA</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('portofolio')}
                className="inline-flex items-center justify-center gap-1.5 min-h-[46px] px-5 py-3 rounded-lg text-sm font-medium text-[#10231E] border border-[#CFC8BA] bg-white hover:bg-[#EAE5DC] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Foto Arsip Hitam Putih Bangunan Cagar Budaya */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] lg:min-h-[380px] rounded-2xl border border-[#DED8CC] bg-[#10231E] overflow-hidden shadow-md">
              <ArchivalImage
                src="/src/assets/images/heritage_pendopo_jawa_1795140993577.jpg"
                alt="Arsip foto hitam putih bangunan cagar budaya pendopo tradisional Jawa"
                caption="Arsip Dokumentasi Arsitektur Cagar Budaya"
              />
            </div>
            <p className="mt-3 text-xs font-serif italic text-[#57534E]">
              Foto arsip hitam-putih kajian dan pelestarian arsitektur cagar budaya nasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
