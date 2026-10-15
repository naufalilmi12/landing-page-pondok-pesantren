import React, { useState } from 'react';
import { FACILITY_LIST } from '../config/pesantrenConfig';
import { PageId } from '../types';
import { Eye, Check, Info, ArrowRight } from 'lucide-react';

interface FacilitiesPageProps {
  setActivePage: (page: PageId) => void;
  onOpenLightboxWithItem: (title: string, image: string, caption: string) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  setActivePage,
  onOpenLightboxWithItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Ibadah', 'Akademik', 'Hunian Asrama', 'Kesehatan & Olahraga', 'Penunjang'];

  const filteredFacilities = activeCategory === 'Semua'
    ? FACILITY_LIST
    : FACILITY_LIST.filter((f) => f.category === activeCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Sarana & Prasarana</span>
            <span aria-hidden="true">·</span>
            <span>Lingkungan Asri</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Fasilitas Kampus Pesantren
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Didukung sarana modern, higienis, dan ramah santri guna menunjang kelancaran ibadah, pembelajaran kelas, serta kesehatan jasmani.
          </p>
        </div>
      </section>

      {/* 2. Notice Informasi Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Informasi Kurasi:</strong> Daftar fasilitas di bawah ini mencerminkan standar fasilitas pondok pesantren semi modern terpadu. Foto dan spesifikasi dapat disesuaikan dengan kondisi fisik kampus pesantren Anda di berkas <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-300">src/config/pesantrenConfig.ts</code>.
          </p>
        </div>
      </div>

      {/* 3. Category Filter & Facility Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Controls */}
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

        {/* Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  className="aspect-[16/10] relative overflow-hidden bg-stone-100 cursor-pointer group"
                  onClick={() => onOpenLightboxWithItem(fac.name, fac.image, fac.description)}
                >
                  <img
                    src={fac.image}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-semibold">
                    <Eye className="w-4 h-4" />
                    <span>Perbesar Foto</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#063D32]/90 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-editorial font-bold text-lg text-[#063D32]">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-1.5">
                    {fac.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#075B46] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenLightboxWithItem(fac.name, fac.image, fac.description)}
                  className="w-full py-2 bg-stone-50 hover:bg-stone-100 text-[#075B46] rounded-lg text-xs font-semibold transition-colors border border-stone-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Tampilan Penuh</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Pendaftaran */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold font-editorial text-[#063D32]">
          Kunjungan Langsung (Survey Kampus)
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          Calon wali santri dipersilakan melakukan survey lingkungan pesantren dan fasilitas kamar asrama dengan konfirmasi terlebih dahulu ke kantor sekretariat.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setActivePage('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#075B46] hover:bg-[#063D32] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Jadwalkan Kunjungan Survey</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>
      </section>
    </div>
  );
};
