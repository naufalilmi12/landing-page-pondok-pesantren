import React, { useState } from 'react';
import {
  PESANTREN_INFO,
  PSB_TIMELINE,
  PSB_REQUIREMENTS,
  PSB_DOCUMENTS,
  PSB_FAQS
} from '../config/pesantrenConfig';
import {
  Calendar,
  CheckCircle2,
  FileText,
  HelpCircle,
  Phone,
  ArrowRight,
  MessageCircle,
  Info,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Send
} from 'lucide-react';

export const AdmissionPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [documentChecks, setDocumentChecks] = useState<Record<number, boolean>>({});

  // WhatsApp Registration Consultation Assistant Form
  const [candidateName, setCandidateName] = useState('');
  const [candidateCity, setCandidateCity] = useState('');
  const [targetLevel, setTargetLevel] = useState('SMP / MTs Islam Terpadu');
  const [parentPhone, setParentPhone] = useState('');
  const [notes, setNotes] = useState('');

  const toggleDocument = (index: number) => {
    setDocumentChecks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleConsultWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n` +
      `Panitia PSB ${PESANTREN_INFO.namaResmi},\n\n` +
      `Saya ingin berkonsultasi mengenai pendaftaran santri baru:\n` +
      `• Nama Calon Santri: ${candidateName || '-'}\n` +
      `• Asal Kota/Kabupaten: ${candidateCity || '-'}\n` +
      `• Jenjang Pilihan: ${targetLevel}\n` +
      `• No. Kontak Orang Tua: ${parentPhone || '-'}\n` +
      `• Pertanyaan/Catatan: ${notes || 'Mohon informasi kuota dan brosur rincian pendaftaran.'}\n\n` +
      `Terima kasih.`
    );
    window.open(`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=${message}`, '_blank');
  };

  const checkedCount = Object.values(documentChecks).filter(Boolean).length;

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Penerimaan Santri Baru (PSB)</span>
            <span aria-hidden="true">·</span>
            <span>Tahun Ajaran Baru</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Informasi Pendaftaran Santri Baru
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Selamat datang calon santri dan wali santri. Temukan informasi lengkap mengenai alur, persyaratan, jadwal, dan konsultasi pendaftaran.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Panitia%20PSB%2C%20saya%20ingin%20konsultasi%20pendaftaran`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] hover:bg-[#b8944f] text-[#063D32] text-xs font-bold rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Panitia via WhatsApp Resmi</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Notice Placeholder Resmi */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Catatan Keterbukaan Informasi:</strong> Jadwal gelombang, estimasi biaya, dan kuota penerimaan di bawah ini menggunakan data placeholder resmi. Seluruh tanggal dan besaran biaya dapat disesuaikan pada berkas <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-300">src/config/pesantrenConfig.ts</code>. Calon wali santri diarahkan untuk mengonfirmasi rincian terkini kepada panitia melalui tautan WhatsApp resmi yang disediakan.
          </p>
        </div>
      </div>

      {/* 3. Jenjang Pendidikan yang Dibuka */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Jenjang Pendidikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#063D32]">
            Program Kelas yang Tersedia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jenjang 1: Menengah Pertama */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-[#075B46] rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#C6A15B] font-bold uppercase tracking-wider">
                  Tingkat Menengah Pertama
                </span>
                <h3 className="font-editorial font-bold text-xl text-[#063D32]">
                  SMP / MTs Islam Terpadu (3 Tahun)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Diperuntukkan bagi lulusan SD/MI. Fokus pada penanaman adab, tahsin & tahfidz Al-Qur'an (target minimal 5–10 Juz), dasar bahasa Arab-Inggris, serta kurikulum sains nasional.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Asrama santri putra dan putri terpisah</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Ijazah formal Kementerian Pendidikan / Kemenag</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Bimbingan intensif shalat 5 waktu & kepribadian santri</span>
              </li>
            </ul>
          </div>

          {/* Jenjang 2: Menengah Atas */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-[#075B46] rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#C6A15B] font-bold uppercase tracking-wider">
                  Tingkat Menengah Atas
                </span>
                <h3 className="font-editorial font-bold text-xl text-[#063D32]">
                  SMA / MA Islam Unggulan (3 Tahun)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Diperuntukkan bagi lulusan SMP/MTs. Fokus pada pemantapan tahfidz (hingga 30 Juz bagi kelas khusus), kajian kitab kuning lanjutan, bimbingan UTBK/PTN, dan persiapan studi Timur Tengah.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Program peminatan IPA / Keagamaan / Bahasa</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Persiapan ujian masuk Al-Azhar Kairo, Madinah, dan PTN</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075B46]" />
                <span>Pengembangan kepemimpinan organisasi santri</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Alur 5 Tahapan Pendaftaran */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              Panduan Langkah
            </span>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Alur Penerimaan Santri Baru
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Proses seleksi dirancang transparan, ramah anak, dan mengedepankan kesiapan minat belajar santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Pendaftaran', desc: 'Pengisian data identitas calon santri dan konfirmasi via panitia WhatsApp.' },
              { step: '02', title: 'Verifikasi Berkas', desc: 'Penyerahan dokumen administrasi (KK, Akta, Pas Foto, Surat Sehat).' },
              { step: '03', title: 'Tes & Wawancara', desc: 'Ujian baca Al-Qur\'an, tes kemampuan dasar, serta wawancara santri & wali.' },
              { step: '04', title: 'Pengumuman', desc: 'Pemberitahuan kelulusan hasil seleksi melalui website resmi dan WhatsApp.' },
              { step: '05', title: 'Daftar Ulang', desc: 'Penyelesaian administrasi, pengukuran seragam, dan persiapan masuk asrama.' },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-2 relative">
                <div className="w-8 h-8 rounded-lg bg-[#075B46] text-[#C6A15B] font-mono font-bold text-xs flex items-center justify-center">
                  {s.step}
                </div>
                <h4 className="font-editorial font-bold text-sm text-[#063D32]">
                  {s.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Jadwal & Gelombang Seleksi */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Kalender Kegiatan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#063D32]">
            Jadwal Gelombang Pendaftaran
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PSB_TIMELINE.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#075B46]">
                    {item.badge}
                  </span>
                  <Calendar className="w-4 h-4 text-stone-400" />
                </div>
                <h3 className="font-editorial font-bold text-base text-[#063D32]">
                  {item.stage}
                </h3>
                <p className="font-mono text-xs font-semibold text-[#C6A15B]">
                  {item.date}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Persyaratan & Dokumen Checklist Interaktif */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Persyaratan Umum */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-editorial font-bold text-xl text-[#063D32] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#075B46]" />
              <span>Syarat Umum Pendaftaran</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              {PSB_REQUIREMENTS.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#075B46] font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist Dokumen Interaktif */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-editorial font-bold text-xl text-[#063D32] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#075B46]" />
                <span>Checklist Dokumen Berkas</span>
              </h3>
              <span className="text-xs text-stone-500 font-mono">
                {checkedCount}/{PSB_DOCUMENTS.length} Siap
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Centang dokumen yang telah Anda siapkan di rumah untuk mempermudah pengecekan:
            </p>

            <div className="space-y-2.5 pt-2">
              {PSB_DOCUMENTS.map((doc, idx) => {
                const isChecked = !!documentChecks[idx];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-[#063D32]'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleDocument(idx)}
                      className="mt-0.5 rounded text-[#075B46] focus:ring-[#075B46]"
                    />
                    <span className="leading-relaxed">{doc}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Informasi Biaya Pendidikan (Transparan & Sesuai Spesifikasi) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063D32] text-white rounded-2xl p-8 sm:p-10 border border-[#075B46] space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
              Keterbukaan Pembiayaan
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-white">
              Informasi Biaya Pendidikan Santri
            </h3>
          </div>

          <p className="text-sm text-stone-200 leading-relaxed max-w-3xl">
            Sebagai wujud komitmen amanah, seluruh pembiayaan santri dialokasikan untuk pemenuhan sarana kamar asrama, makan bergizi 3x sehari, honorarium dewan asatidz pembina, fasilitas laboratorium, serta layanan kesehatan santri.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
              <span className="text-xs text-[#C6A15B] font-medium block">1. Biaya Pendaftaran & Seleksi</span>
              <p className="text-sm font-semibold mt-1">[Placeholder Sesuai Edaran Resmi]</p>
              <p className="text-[11px] text-white/70 mt-1">Mencakup modul materi ujian & tes psikotes/wawancara</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
              <span className="text-xs text-[#C6A15B] font-medium block">2. Uang Sarana & Perlengkapan</span>
              <p className="text-sm font-semibold mt-1">[Placeholder Sesuai Edaran Resmi]</p>
              <p className="text-[11px] text-white/70 mt-1">Lemari, dipan kasur asrama, dan seragam pesantren</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
              <span className="text-xs text-[#C6A15B] font-medium block">3. Iuran Bulanan (SPP & Asrama)</span>
              <p className="text-sm font-semibold mt-1">[Placeholder Sesuai Edaran Resmi]</p>
              <p className="text-[11px] text-white/70 mt-1">Makan 3x sehari, listrik, air, asrama, dan sekolah</p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#075B46]">
            <span className="text-xs text-stone-300">
              Surat rincian biaya resmi dan format beasiswa dhuafa/yatim dapat diminta kepada panitia.
            </span>
            <a
              href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Panitia%20PSB%2C%20mohon%20kirimkan%20dokumen%20rincian%20biaya%20pendidikan%20resmi`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6A15B] hover:bg-[#b8944f] text-[#063D32] rounded-lg text-xs font-bold transition-colors shrink-0"
            >
              <span>Minta Rincian Biaya Resmi via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Formulir Asisten Konsultasi WhatsApp (Bebas Klaim Palsu Backend) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#075B46]">
              <MessageCircle className="w-4 h-4" />
              <span>Bantuan Pendaftaran Cepat</span>
            </div>
            <h3 className="text-2xl font-bold font-editorial text-[#063D32]">
              Format Konsultasi Calon Santri via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Isi data awal di bawah ini untuk langsung menyusun pesan otomatis yang terhubung ke nomor WhatsApp Panitia PSB resmi:
            </p>
          </div>

          <form onSubmit={handleConsultWhatsApp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nama Calon Santri *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Fauzan"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Kota / Kabupaten Asal *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Surabaya / Bandung / Jakarta"
                  value={candidateCity}
                  onChange={(e) => setCandidateCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Jenjang Pendidikan yang Dituju *
                </label>
                <select
                  value={targetLevel}
                  onChange={(e) => setTargetLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                >
                  <option value="SMP / MTs Islam Terpadu">SMP / MTs Islam Terpadu (Lulusan SD/MI)</option>
                  <option value="SMA / MA Islam Unggulan">SMA / MA Islam Unggulan (Lulusan SMP/MTs)</option>
                  <option value="Program Khusus Tahfidz 30 Juz">Program Khusus Tahfidz 30 Juz</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  No. Telepon / WhatsApp Orang Tua *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08123456789"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Catatan / Pertanyaan Khusus (Opsional)
              </label>
              <textarea
                rows={3}
                placeholder="Tuliskan pertanyaan seputar kuota asrama, jadwal survey, atau beasiswa..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-[#C6A15B]" />
                <span>Kirim Format Pesan ke WhatsApp Panitia PSB</span>
              </button>
              <p className="text-[11px] text-stone-500 text-center mt-2">
                * Tombol ini akan langsung membuka aplikasi WhatsApp Anda dengan teks yang telah terstruktur secara rapi. Tidak ada data yang tersimpan di server perantara.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 9. FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#063D32]">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {PSB_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#063D32] cursor-pointer hover:bg-stone-50"
                >
                  <span className="font-editorial">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#075B46]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
