import React, { useState } from 'react';
import { GALLERY_LIST } from '../config/pesantrenConfig';
import { Eye, Info, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Ibadah & Al-Qur\'an',
    'Akademik & Kelas',
    'Ekstrakurikuler',
    'Lingkungan Asrama'
  ];

  const filteredItems = activeCategory === 'Semua'
    ? GALLERY_LIST
    : GALLERY_LIST.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Dokumentasi Visual</span>
            <span aria-hidden="true">·</span>
            <span>Keseharian Santri</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Galeri Kehidupan Pesantren
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Potret kebersamaan santri dalam menuntut ilmu syar'i, belajar di ruang kelas modern, berolahraga sunnah, dan berkehidupan di asrama.
          </p>
        </div>
      </section>

      {/* 2. Notice Informasi Gambar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Etika Visual & Penggantian:</strong> Dokumentasi visual di bawah ini adalah potret suasana santri dan kampus modern berstandar tinggi. Pengelola pesantren dapat menyematkan foto-foto asli kegiatan santri resmi melalui direktori <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-300">src/assets/images/</code> dan berkas konfigurasi <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-300">src/config/pesantrenConfig.ts</code>.
          </p>
        </div>
      </div>

      {/* 3. Filter Controls & Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Tabs */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Find global index in GALLERY_LIST for consistent lightbox navigation
            const globalIndex = GALLERY_LIST.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex !== -1 ? globalIndex : index)}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-semibold">
                      <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-sm">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold text-[#075B46] tracking-wide block">
                      {item.category}
                    </span>
                    <h3 className="font-editorial font-bold text-base text-[#063D32] leading-snug group-hover:text-[#075B46] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="italic font-editorial truncate max-w-[200px]">{item.caption}</span>
                  <span className="text-[#075B46] font-medium shrink-0">Klik preview</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
