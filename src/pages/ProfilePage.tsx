import React from 'react';
import { PESANTREN_INFO, IMAGES } from '../config/pesantrenConfig';
import { PageId } from '../types';
import {
  CheckCircle2,
  Calendar,
  Compass,
  Heart,
  Shield,
  BookOpen,
  ArrowRight,
  Info
} from 'lucide-react';

interface ProfilePageProps {
  setActivePage: (page: PageId) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ setActivePage }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Page Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-lg border-2 border-[#C6A15B]/60 flex items-center justify-center">
              <img
                src={PESANTREN_INFO.logo}
                alt={PESANTREN_INFO.namaResmi}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Identitas Lembaga</span>
            <span aria-hidden="true">·</span>
            <span>Profil Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Profil & Sejarah Pesantren
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dekat visi, misi, rekam jejak, dan filosofi pendidikan Islam semi modern di {PESANTREN_INFO.namaResmi}.
          </p>
        </div>
      </section>

      {/* 2. Sambutan Lengkap Pimpinan */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200/80 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-3">
              <img
                src={PESANTREN_INFO.pimpinan.foto}
                alt={PESANTREN_INFO.pimpinan.nama}
                referrerPolicy="no-referrer"
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-sm border border-stone-200"
              />
              <div className="text-center md:text-left pt-1">
                <h3 className="font-editorial font-bold text-lg text-[#063D32]">
                  {PESANTREN_INFO.pimpinan.nama}
                </h3>
                <p className="text-xs text-[#075B46] font-medium">
                  {PESANTREN_INFO.pimpinan.jabatan}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                  Khutbah Iftitah
                </span>
                <h2 className="text-2xl font-bold font-editorial text-[#063D32]">
                  Sambutan Pengasuh Pondok Pesantren
                </h2>
              </div>

              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                {PESANTREN_INFO.pimpinan.sambutanLengkap.map((paragraf, idx) => (
                  <p key={idx}>{paragraf}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="italic font-editorial">Keluarga Besar {PESANTREN_INFO.namaResmi}</span>
                <span className="font-mono">{PESANTREN_INFO.tahunBerdiri}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Arah & Komitmen
          </span>
          <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
            Visi dan Misi Lembaga
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card Visi */}
          <div className="md:col-span-5 bg-[#063D32] text-white rounded-2xl p-8 border border-[#075B46] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Visi Utama</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-editorial leading-snug text-white">
                "{PESANTREN_INFO.visi}"
              </h3>
            </div>
            <p className="text-xs text-white/60 pt-6 border-t border-[#075B46]">
              Panduan jangka panjang dalam seluruh program pendidikan dan pembinaan asrama.
            </p>
          </div>

          {/* Card Misi */}
          <div className="md:col-span-7 bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-[#075B46] text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Misi Pesantren</span>
            </div>

            <ol className="space-y-3.5">
              {PESANTREN_INFO.misi.map((m, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-[#075B46] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. Nilai dan Budaya Pesantren */}
      <section className="bg-stone-100/60 py-16 border-y border-stone-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
              Karakter & Etika
            </span>
            <h2 className="text-3xl font-bold font-editorial text-[#063D32]">
              Nilai & Budaya Kehidupan Santri
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Prinsip utama yang diinternalisasikan dalam keseharian asrama dan ruang belajar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PESANTREN_INFO.nilaiBudaya.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#075B46] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-editorial font-bold text-base text-[#063D32]">
                    {item.judul}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sejarah & Rekam Jejak (Dengan Penanda Placeholder Jelas) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#075B46]">
            Rekam Jejak Historis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#063D32]">
            Sejarah Pendirian Pesantren
          </h2>
        </div>

        {/* Notice Penanda Data Placeholder */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Catatan Pengeditan:</strong> Narasi sejarah di bawah ini merupakan draf percontohan kelembagaan semi modern. Anda dapat menyesuaikan kronologi tahun berdirinya pesantren, nama muassis (pendiri), serta legalitas izin operasional Kemenag sesuai dokumen resmi pesantren Anda di berkas <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-300">src/config/pesantrenConfig.ts</code>.
          </p>
        </div>

        <div className="prose prose-stone text-sm leading-relaxed text-stone-700 space-y-4">
          <p>
            Cikal bakal <strong>{PESANTREN_INFO.namaResmi}</strong> berawal dari kepedulian para alim ulama dan tokoh masyarakat muslim terhadap pentingnya mencetak kader penerus yang tidak hanya menguasai ilmu agama secara mendalam, melainkan juga memiliki ketangguhan akademik formal dan wawasan teknologi di era global.
          </p>
          <p>
            Berangkat dari sebuah halaqah pengajian Al-Qur'an dan kitab kuning sederhana di atas tanah wakaf, pesantren ini berkembang secara berkesinambungan. Dalam perjalanannya, amanah kelembagaan diperkuat dengan pembentukan badan hukum yayasan pembina serta perolehan izin operasional resmi dari Kementerian Agama Republik Indonesia dengan Nomor Statistik Pesantren (NSPP) resmi.
          </p>
          <p>
            Gagasan <em>Semi Modern</em> yang diusung merupakan jalan tengah yang harmonis (wasathiyah): mempertahankan kearifan tradisi pesantren salaf—seperti ketundukan hati kepada kebenaran, hubungan batin antara santri dan kyai, serta penguasaan kitab klasik—sembari melengkapi sarana asrama dengan fasilitas ruang kelas ber-AC, laboratorium komputer terhubung, pembiasaan bahasa Arab dan Inggris, serta kurikulum sains yang kompetitif.
          </p>
        </div>

        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-stone-500">
            Ingin berkonsultasi mengenai sistem pendidikan atau berkunjung langsung?
          </div>
          <button
            onClick={() => {
              setActivePage('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#075B46] hover:bg-[#063D32] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <span>Hubungi Sekretariat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
