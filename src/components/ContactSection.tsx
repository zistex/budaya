import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, MessageCircle } from 'lucide-react';
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
    <section className="bg-[#F5F3EE] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-[#DED8CC] bg-white shadow-sm overflow-hidden">
          {/* Kolom Kiri: Panel Kontak Deep Heritage Forest-Slate */}
          <div className="lg:col-span-5 bg-[#10231E] text-white p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#E5B88E] tabular-nums mb-3">
                03. Kontak
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight [text-wrap:balance]">
                Konsultasi Gratis via WA Langsung
              </h1>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Penawaran jasa kajian dan penelitian arsitektur bangunan cagar budaya se-Indonesia. Terhubung langsung dengan tim arsitek profesional bersertifikat.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/15 space-y-4 text-sm text-white/85">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 shrink-0 text-[#E5B88E]" />
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:underline underline-offset-4 tabular-nums"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-[#E5B88E]" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#E5B88E]" />
                <span>Wilayah Layanan: Nasional (Seluruh Indonesia)</span>
              </div>

              <div className="pt-4">
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-medium bg-[#14532D] text-white hover:bg-[#166534] border border-white/15 transition-colors whitespace-nowrap"
                >
                  <span>Buka Chat WhatsApp Sekarang</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Pertanyaan & Penyiapan Pesan WA */}
          <div className="lg:col-span-7 p-7 sm:p-10 bg-white">
            <h2 className="font-serif text-2xl font-semibold text-[#10231E] tracking-tight">
              Kirim Pertanyaan atau Rencana Kajian
            </h2>
            <p className="mt-1.5 text-sm text-[#57534E]">
              Isi detail singkat berikut untuk langsung membuka WhatsApp dengan format konsultasi yang rapi.
            </p>

            <div className="mt-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nama-pengirim"
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    id="nama-pengirim"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Anda atau Instansi"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg text-sm bg-[#F8F7F3] border border-[#D4CEC2] text-[#10231E] placeholder:text-[#8A857C] focus:outline-none focus:border-[#9E4725] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lokasi-bangunan"
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Kota / Provinsi Bangunan
                  </label>
                  <input
                    id="lokasi-bangunan"
                    type="text"
                    value={kota}
                    onChange={(e) => setKota(e.target.value)}
                    placeholder="Contoh: Semarang, Jawa Tengah"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg text-sm bg-[#F8F7F3] border border-[#D4CEC2] text-[#10231E] placeholder:text-[#8A857C] focus:outline-none focus:border-[#9E4725] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="jenis-layanan"
                  className="block text-xs font-medium text-[#1C1917] mb-1.5"
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
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg text-sm bg-[#F8F7F3] border border-[#D4CEC2] text-[#10231E] focus:outline-none focus:border-[#9E4725] focus:bg-white transition-colors"
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
                  className="block text-xs font-medium text-[#1C1917] mb-1.5"
                >
                  Pertanyaan atau Keterangan Bangunan
                </label>
                <textarea
                  id="pertanyaan-pesan"
                  rows={3}
                  value={pertanyaan}
                  onChange={(e) => setPertanyaan(e.target.value)}
                  placeholder="Jelaskan secara singkat kondisi atau kebutuhan kajian bangunan cagar budaya Anda..."
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F8F7F3] border border-[#D4CEC2] text-[#10231E] placeholder:text-[#8A857C] focus:outline-none focus:border-[#9E4725] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={composedWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSubmittedNote(true)}
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-sm font-medium bg-[#14532D] text-white hover:bg-[#0F4022] shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Kirim & Konsultasi via WA</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[46px] px-4 py-3 rounded-lg text-xs font-medium text-[#10231E] bg-white border border-[#CFC8BA] hover:bg-[#EAE5DC] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231E]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#14532D]" />
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
                <p className="text-xs text-[#14532D] font-medium pt-1">
                  Pesan konsultasi telah disiapkan untuk WhatsApp ({WHATSAPP_DISPLAY}).
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
