export type PageId = 'beranda' | 'siapa-kami' | 'portofolio' | 'pertanyaan' | 'kontak';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#DED8CC] bg-[#EFECE4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="font-serif font-semibold text-base text-[#10231E] hover:text-[#9E4725] transition-colors"
          >
            cagar budaya.com
          </button>
          <span aria-hidden="true" className="text-[#A8A29E]">·</span>
          <span>Jasa Kajian dan Penelitian Arsitektur Cagar Budaya Nasional</span>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap items-center gap-5">
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="hover:text-[#9E4725] whitespace-nowrap transition-colors"
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => onNavigate('siapa-kami')}
            className="hover:text-[#9E4725] whitespace-nowrap transition-colors"
          >
            Siapa Kami
          </button>
          <button
            type="button"
            onClick={() => onNavigate('portofolio')}
            className="hover:text-[#9E4725] whitespace-nowrap transition-colors"
          >
            Portofolio
          </button>
          <button
            type="button"
            onClick={() => onNavigate('pertanyaan')}
            className="hover:text-[#9E4725] whitespace-nowrap transition-colors"
          >
            Pertanyaan
          </button>
          <button
            type="button"
            onClick={() => onNavigate('kontak')}
            className="hover:text-[#9E4725] whitespace-nowrap transition-colors"
          >
            Kontak
          </button>
        </nav>
      </div>
    </footer>
  );
}
