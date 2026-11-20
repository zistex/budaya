import { useEffect, useState } from 'react';
import { Check, Copy, Mail, MapPin, MessageCircle } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CORE_SERVICES,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/heritageData';

interface ContactSectionProps {
  selectedService: string;
  onChangeService: (service: string) => void;
}

export function ContactSection({
  selectedService,
  onChangeService,
}: ContactSectionProps) {
  const [nama, setNama] = useState('');
  const [kota, setKota] = useState('');
  const [layanan, setLayanan] = useState(selectedService || CORE_SERVICES[0]);
  const [pertanyaan, setPertanyaan] = useState('');
  const [submittedNote, setSubmittedNote] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setLayanan(selectedService);
    }
  }, [selectedService]);

  const composedMessage = [
    'Halo Tim cagar budaya.com,',
    nama ? `Nama: ${nama}` : null,
    kota ? `Lokasi / Provinsi: ${kota}` : null,
    `Kebutuhan Layanan: ${layanan}`,
    pertanyaan
      ? `Pertanyaan / Catatan: ${pertanyaan}`
      : 'Saya ingin konsultasi gratis mengenai kajian bangunan cagar budaya.',
  ]
    .filter(Boolean)
    .join('\n');

  const composedWaUrl = buildWhatsAppUrl(composedMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const directWaUrl = buildWhatsAppUrl(
    'Halo Tim cagar budaya.com, saya ingin konsultasi gratis via WhatsApp mengenai kajian bangunan cagar budaya.'
  );

  return (
    <section className="bg-white min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Kolom Kiri: Info Kontak Nasional */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#737373] tabular-nums mb-2">
              03. Kontak
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A0A0A] tracking-tight [text-wrap:balance]">
              Hubungi & Konsultasi Gratis via WA
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#525252] leading-relaxed">
              Melayani penawaran jasa kajian, penelitian, perijinan bangunan (PBG), rehabilitasi, pembongkaran, revitalisasi, serta perawatan dan pelestarian bangunan cagar budaya di seluruh Indonesia.
            </p>

            <div className="mt-8 pt-6 border-t border-[#E5E5E5] space-y-4 text-sm text-[#525252]">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0A0A0A] hover:underline underline-offset-4 tabular-nums"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#0A0A0A] hover:underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
                <span>Wilayah Layanan: Nasional (Seluruh Indonesia)</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Konsultasi Gratis via WA Langsung */}
          <div className="lg:col-span-7">
            <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-6 sm:p-8">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A0A0A] tracking-tight">
                Konsultasi Gratis via WA Langsung
              </h2>
              <p className="mt-1.5 text-sm text-[#525252]">
                Lengkapi keterangan singkat di bawah ini untuk langsung terhubung ke WhatsApp tim arsitek kami.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nama-pengirim"
                      className="block text-xs font-medium text-[#171717] mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="nama-pengirim"
                      type="text"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama Anda atau Instansi"
                      className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D4D4D4] text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0A0A0A]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lokasi-bangunan"
                      className="block text-xs font-medium text-[#171717] mb-1.5"
                    >
                      Kota / Provinsi
                    </label>
                    <input
                      id="lokasi-bangunan"
                      type="text"
                      value={kota}
                      onChange={(e) => setKota(e.target.value)}
                      placeholder="Contoh: Surabaya, Jawa Timur"
                      className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D4D4D4] text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0A0A0A]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jenis-layanan"
                    className="block text-xs font-medium text-[#171717] mb-1.5"
                  >
                    Kebutuhan Kajian
                  </label>
                  <select
                    id="jenis-layanan"
                    value={layanan}
                    onChange={(e) => {
                      setLayanan(e.target.value);
                      onChangeService(e.target.value);
                    }}
                    className="w-full min-h-[42px] px-3 py-2 text-sm bg-white border border-[#D4D4D4] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    {CORE_SERVICES.map((service, index) => (
                      <option key={service} value={service}>
                        {index + 1}. {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pertanyaan-pesan"
                    className="block text-xs font-medium text-[#171717] mb-1.5"
                  >
                    Pertanyaan atau Keterangan Singkat
                  </label>
                  <textarea
                    id="pertanyaan-pesan"
                    rows={3}
                    value={pertanyaan}
                    onChange={(e) => setPertanyaan(e.target.value)}
                    placeholder="Jelaskan secara singkat kondisi atau kebutuhan bangunan cagar budaya Anda..."
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D4D4D4] text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#0A0A0A]"
                  />
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <a
                    href={composedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSubmittedNote(true)}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Kirim & Konsultasi via WA</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 text-xs font-medium text-[#171717] bg-white border border-[#D4D4D4] hover:bg-[#F4F4F4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Pesan Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Pesan</span>
                      </>
                    )}
                  </button>
                </div>

                {submittedNote && (
                  <p className="text-xs text-[#404040] pt-1">
                    Pesan konsultasi telah disiapkan untuk WhatsApp ({WHATSAPP_DISPLAY}).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
