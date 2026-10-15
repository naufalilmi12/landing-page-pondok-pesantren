import React from 'react';
import { PageId, NewsItem } from '../types';
import { PESANTREN_INFO, PROGRAM_LIST, NEWS_LIST, GALLERY_LIST, IMAGES } from '../config/pesantrenConfig';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Award,
  Globe,
  CheckCircle2,
  Calendar,
  Building,
  UserCheck
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onOpenLightbox,
  onSelectNews,
}) => {
  const latestNews = NEWS_LIST.slice(0, 3);
  const featuredGallery = GALLERY_LIST.slice(0, 4);

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Campus Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroCampus}
            alt="Kampus Pesantren Modern"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063D32] via-[#063D32]/75 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
          {/* Unboxed Metadata Label (Zero-Pill Discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Pendidikan Islam</span>
            <span aria-hidden="true">·</span>
            <span>Ilmu</span>
            <span aria-hidden="true">·</span>
            <span>Akhlak</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial text-white tracking-tight leading-[1.18] max-w-4xl mx-auto">
            {PESANTREN_INFO.tagline}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Menghadirkan pendidikan pesantren yang memadukan pendalaman ilmu agama, pendidikan formal terakreditasi, pembinaan karakter 24 jam, dan pengembangan keterampilan untuk membentuk generasi muslim yang unggul.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setActivePage('profil');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#063D32] hover:bg-stone-100 font-semibold text-sm rounded-lg transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Kenali Pesantren</span>
              <ArrowRight className="w-4 h-4 text-[#075B46] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                setActivePage('pendaftaran');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C6A15B] hover:bg-[#b8944f] text-[#063D32] font-semibold text-sm rounded-lg transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Informasi Pendaftaran</span>
              <ChevronRight className="w-4 h-4 text-[#063D32]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL PILLARS & STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-xl shadow-xl border border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          <div className="p-6 text-center sm:text-left flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#202923]">100% Berasrama</h4>
              <p className="text-xs text-[#68736D] mt-1">Lingkungan aman, kondusif, dan terpantau dengan pendampingan musyrif 24 jam.</p>
            </div>
          </div>

          <div className="p-6 text-center sm:text-left flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#202923]">Kurikulum Terpadu</h4>
              <p className="text-xs text-[#68736D] mt-1">Integrasi kurikulum Kementerian Agama, Kemendikbud, dan kepesantrenan.</p>
            </div>
          </div>

          <div className="p-6 text-center sm:text-left flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#202923]">Tahfidz & Kitab Turats</h4>
              <p className="text-xs text-[#68736D] mt-1">Metode hafalan mutqin bersanad serta penguasaan literatur klasik bermakna.</p>
            </div>
          </div>

          <div className="p-6 text-center sm:text-left flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-[#075B46] rounded-lg shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#202923]">Bahasa & Teknologi</h4>
              <p className="text-xs text-[#68736D] mt-1">Komunikasi aktif dwibahasa (Arab-Inggris) dan penguasaan literasi digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RINGKASAN PROFIL & SAMBUTAN PIMPINAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Ringkasan Pendekatan Pendidikan Semi Modern */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
                Tentang Pesantren Kami
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#063D32] leading-snug">
                Pendidikan Islam Berkelanjutan dengan Pendekatan Semi Modern
              </h2>
            </div>

            <p className="text-base text-stone-700 leading-relaxed">
              {PESANTREN_INFO.namaResmi} didirikan dengan tekad mulia menghadirkan model pendidikan Islam yang komprehensif. Kami menjembatani kemurnian tradisi pesantren salafiyah—seperti kajian kitab kuning, ketawadhu'an, dan sanad keilmuan—dengan tuntutan era kontemporer melalui keunggulan sains, kemampuan berbahasa dunia, dan kematangan kepemimpinan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#075B46] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Penanaman akidah ahlussunnah wal jama'ah yang kokoh</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#075B46] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Ijazah formal diakui negara (MTs/SMP & MA/SMA)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#075B46] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Pembiasaan bahasa Arab & Inggris harian</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#075B46] shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Pembentukan karakter mandiri dan berakhlak mulia</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('profil');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer group"
              >
                <span>Baca Selengkapnya Visi, Misi & Sejarah</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Sambutan Pimpinan Editorial Card */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={PESANTREN_INFO.pimpinan.foto}
                alt={PESANTREN_INFO.pimpinan.nama}
                referrerPolicy="no-referrer"
                className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-lg border border-stone-200 shadow-sm shrink-0"
              />
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold block">
                  Sambutan Pengasuh
                </span>
                <h3 className="text-base sm:text-lg font-bold font-editorial text-[#063D32]">
                  {PESANTREN_INFO.pimpinan.nama}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {PESANTREN_INFO.pimpinan.jabatan}
                </p>
              </div>
            </div>

            <blockquote className="text-stone-700 text-sm leading-relaxed italic border-t border-b border-stone-100 py-4 font-editorial">
              "{PESANTREN_INFO.pimpinan.sambutanSingkat}"
            </blockquote>

            <div className="text-right">
              <button
                onClick={() => {
                  setActivePage('profil');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#075B46] hover:underline cursor-pointer"
              >
                Lihat Sambutan Lengkap &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM UNGGULAN KEPESANTRENAN */}
      <section className="bg-stone-100/60 py-20 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              Pendidikan Terpadu
            </div>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Program Unggulan Pesantren
            </h2>
            <p className="text-sm text-stone-600">
              Disusun secara seimbang untuk mengembangkan potensi spiritual, intelektual, dan keterampilan hidup santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_LIST.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#075B46] tracking-wide">
                      {program.category}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {program.id === 'tahfidz-quran' ? '01' : program.id === 'kitab-kuning' ? '02' : '03+'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-editorial text-[#063D32]">
                    {program.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    {program.objectives.slice(0, 2).map((obj, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-[#C6A15B] font-bold">·</span>
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setActivePage('program');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span>Rincian Kurikulum</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActivePage('program');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#075B46] hover:bg-[#063D32] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <span>Lihat Seluruh Kurikulum & Jadwal Santri 24 Jam</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. KEUNGGULAN PESANTREN (NILAI-NILAI SEMI MODERN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Karakteristik & Budaya
          </div>
          <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
            Perpaduan Nilai Salaf & Wawasan Masa Depan
          </h2>
          <p className="text-sm text-stone-600">
            Mengapa sistem pendidikan semi modern menjadi pilihan tepat bagi pembinaan generasi muslim saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Pendidikan Agama Mendalam
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Memelihara kajian fiqih, tafsir, hadits, dan tasawuf dari sumber kitab orisinal para ulama terdahulu untuk membentengi aqidah santri.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Pengembangan Akademik Formal
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Memenuhi standar kurikulum nasional secara optimal agar santri memiliki kecakapan matematika, sains, dan literasi yang siap diuji secara terbuka.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Pembentukan Karakter & Adab
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Adab diletakkan di atas ilmu. Santri dibiasakan menghormati guru, berempati kepada sesama, dan bersikap santun di setiap keadaan.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Kehidupan Berasrama Disiplin
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pola hidup teratur mulai dari qiyamul lail hingga istirahat malam. Menumbuhkan kesadaran waktu dan tanggung jawab atas diri sendiri.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              5
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Kemandirian & Tanggung Jawab
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Santri belajar mencuci, merapikan lemari, mengatur keuangan saku, dan menyelesaikan masalah tanpa kepanikan emosional.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold">
              6
            </div>
            <h3 className="font-bold font-editorial text-base text-[#063D32]">
              Keterampilan Masa Depan
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Santri tidak gagap teknologi. Laboratorium komputer dan pembelajaran bahasa asing menyiapkan mereka menjadi dai dan profesional yang relevan.
            </p>
          </div>
        </div>
      </section>

      {/* 6. GALERI PILIHAN DOKUMENTASI KEGIATAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              Dokumentasi Lingkungan
            </div>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Galeri Kegiatan Santri
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('galeri');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Buka Seluruh Galeri Foto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[11px] text-[#C6A15B] font-medium block">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold font-editorial leading-snug line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BERITA DAN AGENDA TERBARU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              Kabar Pesantren
            </div>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Warta & Agenda Terbaru
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('berita');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata with typographic separators (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="text-[#075B46] font-semibold">{news.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-base font-bold font-editorial text-[#063D32] leading-snug line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-stone-100">
                <button
                  onClick={() => onSelectNews(news)}
                  className="text-xs font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. CTA PENDAFTARAN RESMI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063D32] text-white rounded-2xl p-8 sm:p-14 relative overflow-hidden border border-[#075B46]">
          {/* Subtle Decorative Star Watermark */}
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
            <svg className="w-80 h-80 text-[#C6A15B]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
              Penerimaan Santri Baru (PSB)
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-white leading-tight">
              Mulai Perjalanan Pendidikan Bersama Kami
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              Kenali lingkungan, program pendidikan, dan proses penerimaan santri baru di pondok pesantren kami. Kuota pendaftaran dibuka terbatas demi menjaga kualitas pembinaan dan asrama santri.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('pendaftaran');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#C6A15B] hover:bg-[#b8944f] text-[#063D32] font-semibold text-xs rounded-lg transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Informasi Pendaftaran</span>
                <ArrowRight className="w-4 h-4 text-[#063D32]" />
              </button>

              <a
                href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Panitia%20PSB%2C%20saya%20ingin%20berkonsultasi%20pendaftaran%20santri%20baru`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-colors border border-white/20 cursor-pointer flex items-center gap-2"
              >
                <span>Konsultasi Panitia via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
