import React, { useState } from 'react';
import { PESANTREN_INFO } from '../config/pesantrenConfig';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  Info,
  Building,
  HelpCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n` +
      `Kepada Sekretariat ${PESANTREN_INFO.namaResmi},\n\n` +
      `• Pengirim: ${senderName}\n` +
      `• Email: ${senderEmail}\n` +
      `• Keperluan/Subjek: ${senderSubject}\n` +
      `• Pesan: ${senderMessage}\n\n` +
      `Terima kasih.`
    );
    window.open(`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=${formatted}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Sekretariat & Hubungan Masyarakat</span>
            <span aria-hidden="true">·</span>
            <span>Layanan Publik</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Hubungi Pihak Pesantren
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Silaturahmi dan pintu komunikasi kami senantiasa terbuka bagi masyarakat, wali santri, dan para pemerhati pendidikan Islam.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Informasi Kontak & Layanan */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-editorial font-bold text-xl text-[#063D32]">
                Kantor Sekretariat Utama
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 mb-0.5">Alamat Kampus:</strong>
                    <span className="leading-relaxed">{PESANTREN_INFO.kontak.alamat}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 mb-0.5">WhatsApp Resmi:</strong>
                    <a
                      href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Admin%20Sekretariat`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#075B46] font-semibold hover:underline"
                    >
                      {PESANTREN_INFO.kontak.whatsappDisplay} (Respon Cepat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 mb-0.5">Telepon Kantor:</strong>
                    <span>{PESANTREN_INFO.kontak.telepon}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 mb-0.5">Surat Elektronik (Email):</strong>
                    <a
                      href={`mailto:${PESANTREN_INFO.kontak.email}`}
                      className="text-[#075B46] font-semibold hover:underline"
                    >
                      {PESANTREN_INFO.kontak.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 mb-0.5">Jam Pelayanan Tamu & Kantor:</strong>
                    <span className="leading-relaxed">{PESANTREN_INFO.kontak.jamPelayanan}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="pt-4 border-t border-stone-100">
                <a
                  href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Admin%2C%20saya%20ingin%20menghubungi%20pihak%20pesantren`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
                  <span>Buka Chat WhatsApp Resmi Sekarang</span>
                </a>
              </div>
            </div>

            {/* Petunjuk Kunjungan & Etika Bertamu */}
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3 text-xs text-stone-700">
              <h4 className="font-semibold text-stone-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#075B46]" />
                <span>Tata Tertib Berkunjung:</span>
              </h4>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Berpakaian muslim/muslimah yang sopan dan menutup aurat.</li>
                <li>Lapor ke pos keamanan santri dan mengisi buku tamu di sekretariat.</li>
                <li>Bagi yang membawa kendaraan dipersilakan parkir di area yang telah disediakan.</li>
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Pesan & Peta */}
          <div className="lg:col-span-7 space-y-8">
            {/* Form Hubungi Kami */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                  Kirim Pesan
                </span>
                <h3 className="font-editorial font-bold text-xl text-[#063D32]">
                  Formulir Komunikasi Cepat
                </h3>
                <p className="text-xs text-stone-600">
                  Pesan yang Anda ketikkan di bawah ini akan langsung dialihkan ke obrolan WhatsApp resmi petugas kami.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Topik / Subjek Pesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pertanyaan Syarat Beasiswa / Jadwal Silaturahmi"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pesan atau pertanyaan Anda dengan jelas..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#C6A15B]" />
                    <span>Teruskan Pesan ke WhatsApp Resmi Pesantren</span>
                  </button>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-stone-500">
                    <Info className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                    <span>Sistem menghubungkan pesan langsung ke aplikasi WhatsApp petugas tanpa perantara database eksternal.</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Peta Lokasi Pesantren */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial font-bold text-lg text-[#063D32]">
                  Peta Lokasi Pesantren
                </h4>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(PESANTREN_INFO.kontak.alamat)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#075B46] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
                <iframe
                  title="Peta Lokasi Pesantren"
                  src={PESANTREN_INFO.kontak.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-[11px] text-stone-500">
                * Koordinat dan tautan sematan peta dapat diperbarui pada properti <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">PESANTREN_INFO.kontak.googleMapsEmbedUrl</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
