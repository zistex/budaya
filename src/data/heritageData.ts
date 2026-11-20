export interface HeritageItem {
  id: string;
  title: string;
  location: string;
  service: string;
  filterGroup: 'penelitian' | 'pbg-rehabilitasi' | 'revitalisasi-pelestarian';
  year: string;
  image: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = '6281234567890';
export const WHATSAPP_DISPLAY = '+62 812-3456-7890';
export const CONTACT_EMAIL = 'konsultasi@cagarbudaya.com';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// 6 Penawaran Jasa Utama di Halaman Depan — Teks Saja
export const CORE_SERVICES: string[] = [
  'Penelitian',
  'Perijinan Bangunan (PBG)',
  'Rehabilitasi',
  'Pembongkaran',
  'Revitalisasi',
  'Perawatan dan Pelestarian',
];

export const HERITAGE_PORTFOLIO: HeritageItem[] = [
  {
    id: 'kajian-stasiun-kolonial',
    title: 'Kajian Struktur & Arsitektur Galeri Lengkung',
    location: 'Semarang, Jawa Tengah',
    service: 'Penelitian',
    filterGroup: 'penelitian',
    year: '2024',
    image: '/src/assets/images/heritage_lawang_sewu_1795140993085.jpg',
    alt: 'Foto hitam putih klasik bangunan cagar budaya bergaya kolonial dengan deretan galeri lengkung dan menara kembar',
  },
  {
    id: 'pbg-gedung-neoklasik',
    title: 'Kajian Teknis PBG & Pelestarian Fasad Neoklasik',
    location: 'Jakarta Barat, DKI Jakarta',
    service: 'Perijinan Bangunan (PBG)',
    filterGroup: 'pbg-rehabilitasi',
    year: '2024',
    image: '/src/assets/images/heritage_kota_tua_1795140993679.jpg',
    alt: 'Foto jadul hitam putih bangunan bersejarah neoklasik di kawasan kota tua dengan halaman batu',
  },
  {
    id: 'rehabilitasi-gedung-indis',
    title: 'Rehabilitasi & Dokumentasi Arsitektur Indo-Eropa',
    location: 'Bandung, Jawa Barat',
    service: 'Rehabilitasi',
    filterGroup: 'pbg-rehabilitasi',
    year: '2025',
    image: '/src/assets/images/heritage_gedung_sate_1795140992868.jpg',
    alt: 'Foto monokrom bangunan bersejarah monumental Indo-Eropa dengan menara bertingkat di tengah',
  },
  {
    id: 'pelestarian-pendopo-joglo',
    title: 'Perawatan & Pelestarian Struktur Kayu Pendopo',
    location: 'Surakarta, Jawa Tengah',
    service: 'Perawatan dan Pelestarian',
    filterGroup: 'revitalisasi-pelestarian',
    year: '2025',
    image: '/src/assets/images/heritage_pendopo_jawa_1795140993577.jpg',
    alt: 'Foto hitam putih arsitektur tradisional pendopo joglo Jawa dengan tiang kayu berukir',
  },
  {
    id: 'revitalisasi-benteng-batu',
    title: 'Revitalisasi Kawasan Gerbang & Dinding Benteng',
    location: 'Yogyakarta, DIY',
    service: 'Revitalisasi',
    filterGroup: 'revitalisasi-pelestarian',
    year: '2025',
    image: '/src/assets/images/heritage_benteng_kolonial_1795140993647.jpg',
    alt: 'Foto arsip hitam putih gerbang batu benteng bersejarah dan pelengkung halaman klasik',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'cakupan-nasional',
    question: 'Apakah layanan kajian cagar budaya melayani seluruh wilayah Indonesia?',
    answer:
      'Ya. Layanan kami bersifat nasional dan melayani survei lapangan, kajian arsitektur, hingga pendampingan teknis bangunan cagar budaya di seluruh provinsi di Indonesia.',
  },
  {
    id: 'layanan-pbg',
    question: 'Bagaimana proses pengurusan kajian untuk Perijinan Bangunan (PBG) cagar budaya?',
    answer:
      'Kami menyusun dokumen kajian arsitektur, gambar terukur (as-built drawing), analisis kondisi fisik, serta rekomendasi teknis sesuai kaidah pelestarian cagar budaya sebagai syarat pengajuan PBG dan sidang tim ahli.',
  },
  {
    id: 'lingkup-pekerjaan',
    question: 'Apa saja lingkup pekerjaan yang ditangani tim arsitek?',
    answer:
      'Kami menangani 6 bidang utama: Penelitian, Perijinan Bangunan (PBG), Rehabilitasi, Pembongkaran terkendali, Revitalisasi fungsi bangunan, serta Perawatan dan Pelestarian berkala.',
  },
  {
    id: 'konsultasi-wa',
    question: 'Bagaimana cara memulai konsultasi gratis?',
    answer:
      'Anda dapat langsung menekan tombol Konsultasi Gratis via WA Langsung atau mengisi formulir pertanyaan di samping untuk terhubung langsung dengan tim arsitek kami tanpa biaya awal.',
  },
];
