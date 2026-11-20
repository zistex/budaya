export type PageId = 'beranda' | 'siapa-kami' | 'portofolio' | 'pertanyaan' | 'kontak';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#525252]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="font-serif font-semibold text-sm text-[#0A0A0A] hover:underline underline-offset-4"
          >
            cagar budaya.com
          </button>
          <span aria-hidden="true">·</span>
          <span>Jasa Kajian dan Penelitian Arsitektur Cagar Budaya Nasional</span>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('siapa-kami')}
            className="hover:text-[#0A0A0A] hover:underline underline-offset-4 whitespace-nowrap"
          >
            Siapa Kami
          </button>
          <button
            type="button"
            onClick={() => onNavigate('portofolio')}
            className="hover:text-[#0A0A0A] hover:underline underline-offset-4 whitespace-nowrap"
          >
            Portofolio
          </button>
          <button
            type="button"
            onClick={() => onNavigate('pertanyaan')}
            className="hover:text-[#0A0A0A] hover:underline underline-offset-4 whitespace-nowrap"
          >
            Pertanyaan
          </button>
          <button
            type="button"
            onClick={() => onNavigate('kontak')}
            className="hover:text-[#0A0A0A] hover:underline underline-offset-4 whitespace-nowrap"
          >
            Kontak
          </button>
        </nav>
      </div>
    </footer>
  );
}
