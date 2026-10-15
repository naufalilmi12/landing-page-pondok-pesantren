import React, { useState } from 'react';
import { PROGRAM_LIST, PESANTREN_INFO } from '../config/pesantrenConfig';
import { PageId } from '../types';
import {
  BookOpen,
  Scroll,
  GraduationCap,
  Globe,
  HeartHandshake,
  Laptop,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ProgramsPageProps {
  setActivePage: (page: PageId) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ setActivePage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kepesantrenan', 'Akademik Formal', 'Keterampilan', 'Pengembangan Karakter'];

  const filteredPrograms = activeCategory === 'Semua'
    ? PROGRAM_LIST
    : PROGRAM_LIST.filter((p) => p.category === activeCategory);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#075B46]" />;
      case 'Scroll': return <Scroll className="w-5 h-5 text-[#075B46]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#075B46]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#075B46]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#075B46]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#075B46]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#075B46]" />;
    }
  };

  const dailySchedule = [
    { time: '03.30 – 04.30', activity: 'Qiyamul Lail (Tahajjud), Doa & Persiapan Shalat Subuh', icon: '🌙' },
    { time: '04.30 – 05.30', activity: 'Shalat Subuh Berjamaah & Halaqah Al-Qur\'an (Ziyadah/Setoran)', icon: '📖' },
    { time: '05.30 – 06.30', activity: 'Pemberian Kosakata Bahasa (Arab/Inggris) & Kebersihan Asrama', icon: '🗣️' },
    { time: '06.30 – 07.15', activity: 'Sarapan Pagi Bergizi & Persiapan Masuk Kelas Formal', icon: '🥣' },
    { time: '07.15 – 11.45', activity: 'Kegiatan Belajar Mengajar (KBM) Kurikulum Nasional Sesi Pagi', icon: '🏫' },
    { time: '11.45 – 13.00', activity: 'Shalat Zhuhur Berjamaah, Makan Siang & Istirahat Qailulah', icon: '☀️' },
    { time: '13.00 – 15.00', activity: 'KBM Kurikulum Formal Sesi Siang / Praktikum Laboratorium', icon: '🔬' },
    { time: '15.00 – 16.00', activity: 'Shalat Ashar Berjamaah & Pengajian Kitab Fiqih/Tafsir', icon: '📜' },
    { time: '16.00 – 17.15', activity: 'Olahraga, Panahan, Bela Diri, dan Aktivitas Ekstrakurikuler', icon: '🏹' },
    { time: '17.15 – 18.00', activity: 'Mandi Bersih, Membaca Al-Ma\'tsurat & Menuju Masjid', icon: '✨' },
    { time: '18.00 – 19.30', activity: 'Shalat Maghrib Berjamaah & Halaqah Muraja\'ah Al-Qur\'an', icon: '🕌' },
    { time: '19.30 – 20.30', activity: 'Shalat Isya Berjamaah & Makan Malam Bersama', icon: '🍲' },
    { time: '20.30 – 21.45', activity: 'Belajar Mandiri Terbimbing (Mu\'wajjahah) & Muhadharah', icon: '✍️' },
    { time: '21.45 – 22.00', activity: 'Evaluasi Kamar, Doa Tidur & Istirahat Malam Tertib', icon: '🛌' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Kurikulum Terintegrasi</span>
            <span aria-hidden="true">·</span>
            <span>Pembinaan 24 Jam</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Program Pendidikan & Kurikulum
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Menyelaraskan pendalaman ilmu agama salaf, kurikulum pendidikan nasional berstandar tinggi, penguasaan dwibahasa, dan kecakapan era digital.
          </p>
        </div>
      </section>

      {/* 2. Filosofi Keseimbangan Pendidikan */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-emerald-50 text-[#075B46]">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#063D32]">
              Prinsip Integrasi Kurikulum Semi Modern
            </h2>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            Model kurikulum kami dirancang agar santri tidak mengalami dikotomi antara ilmu agama dan ilmu umum. Pelajaran fisika, matematika, dan biologi dipelajari sebagai sarana mengagumi kebesaran ciptaan Allah (ayat kauniyah), sementara hafalan Al-Qur'an dan pemahaman kitab kuning menjadi fondasi moral dan pegangan hidup (ayat qauliyah).
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/70 p-3 rounded-lg border border-amber-200">
            <Info className="w-4 h-4 shrink-0 text-amber-700" />
            <span>Rincian silabus mata pelajaran formal mengacu pada Kurikulum Nasional Kementerian Pendidikan serta Kementerian Agama RI.</span>
          </div>
        </div>
      </section>

      {/* 3. Program List with Interactive Category Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#075B46] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Program Cards */}
        <div className="space-y-6">
          {filteredPrograms.map((prog, index) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    {getProgramIcon(prog.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#075B46] uppercase tracking-wide block">
                      {prog.category}
                    </span>
                    <h3 className="text-xl font-bold font-editorial text-[#063D32] leading-tight">
                      {prog.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-medium text-[#C6A15B]">
                  {prog.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-stone-50/70 p-6 rounded-xl border border-stone-100">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#063D32] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#075B46]" />
                    <span>Target & Capaian</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {prog.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#075B46] font-bold">✓</span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#063D32] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                    <span>Aktivitas Pendukung</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {prog.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C6A15B] font-bold">●</span>
                        <span className="leading-relaxed">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Rutinitas Keseharian Santri (24 Jam) */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              <Clock className="w-4 h-4" />
              <span>Jadwal Teratur</span>
            </div>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Rutinitas Keseharian Santri 24 Jam
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Kedisiplinan dibangun melalui ritme harian yang teratur, menyeimbangkan waktu ibadah, belajar, bersosialisasi, dan istirahat.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm divide-y divide-stone-100">
            {dailySchedule.map((item, idx) => (
              <div key={idx} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-mono font-semibold text-[#075B46] shrink-0 w-32">
                    {item.time}
                  </span>
                </div>
                <span className="text-stone-700 font-medium sm:text-right flex-1">
                  {item.activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Pendaftaran */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold font-editorial text-[#063D32]">
          Siap Bergabung dengan Keluarga Besar Santri?
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          Daftarkan putra/putri Anda melalui jalur pendaftaran resmi atau hubungi panitia untuk informasi kuota jenjang kelas.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setActivePage('pendaftaran');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#075B46] hover:bg-[#063D32] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Informasi & Syarat Pendaftaran (PSB)</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>
      </section>
    </div>
  );
};
