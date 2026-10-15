import React, { useState, useMemo } from 'react';
import { NEWS_LIST } from '../config/pesantrenConfig';
import { NewsItem, PageId } from '../types';
import { Search, Calendar, Clock, ArrowRight, User, X, Share2, Check } from 'lucide-react';

interface NewsPageProps {
  selectedNews: NewsItem | null;
  onSelectNews: (news: NewsItem | null) => void;
  setActivePage: (page: PageId) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  selectedNews,
  onSelectNews,
  setActivePage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [copied, setCopied] = useState(false);

  const categories = ['Semua', 'Kegiatan Santri', 'Pendidikan', 'Keagamaan', 'Pengumuman', 'Prestasi'];

  const filteredNews = useMemo(() => {
    return NEWS_LIST.filter((item) => {
      const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredNews = NEWS_LIST.find((item) => item.featured) || NEWS_LIST[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedNews?.title,
        text: selectedNews?.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // If a news article is selected, display the Editorial Detail View
  if (selectedNews) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-in fade-in duration-200">
        {/* Back Link */}
        <button
          onClick={() => onSelectNews(null)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#075B46] hover:text-[#063D32] transition-colors cursor-pointer group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span>Kembali ke Daftar Berita & Kegiatan</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="text-[#075B46] font-semibold">{selectedNews.category}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedNews.date}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedNews.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-editorial text-[#063D32] leading-tight">
            {selectedNews.title}
          </h1>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#075B46]" />
              <span>Oleh: {selectedNews.author}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 hover:text-[#075B46] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tautan Tersalin' : 'Bagikan Berita'}</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200">
          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-5">
          <p className="font-semibold text-stone-900 border-b border-stone-100 pb-4">
            {selectedNews.summary}
          </p>
          {selectedNews.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => onSelectNews(null)}
            className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-[#202923] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            &larr; Lihat Berita Lainnya
          </button>
          <button
            onClick={() => {
              setActivePage('pendaftaran');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Informasi Pendaftaran (PSB)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-[#063D32] text-white py-16 sm:py-20 border-b border-[#075B46]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
            <span>Kabar Pesantren</span>
            <span aria-hidden="true">·</span>
            <span>Dokumentasi Aktual</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-white tracking-tight">
            Berita & Agenda Kegiatan
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Menyajikan informasi prestasi santri, agenda pengajian akbar, warta kependidikan, serta pengumuman resmi kelembagaan.
          </p>
        </div>
      </section>

      {/* 2. Main Content & Search/Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Search Bar & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari berita atau kegiatan santri..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075B46] focus:bg-white text-stone-800"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#075B46] text-white'
                    : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Featured Lead Story (Only if no specific search query) */}
        {!searchTerm && selectedCategory === 'Semua' && (
          <div
            onClick={() => onSelectNews(featuredNews)}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 group"
          >
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="text-[#C6A15B] font-semibold uppercase tracking-wider">Berita Utama</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#075B46] font-semibold">{featuredNews.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredNews.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#063D32] leading-snug group-hover:text-[#075B46] transition-colors">
                  {featuredNews.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {featuredNews.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">{featuredNews.readTime}</span>
                <span className="text-xs font-semibold text-[#075B46] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Filtered News Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>Menampilkan {filteredNews.length} warta & kegiatan</span>
            {(searchTerm || selectedCategory !== 'Semua') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                }}
                className="text-[#075B46] font-semibold hover:underline cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredNews.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-xl border border-stone-200 space-y-3">
              <p className="text-stone-500 text-sm">
                Tidak ada berita yang sesuai dengan pencarian "<strong>{searchTerm}</strong>".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                }}
                className="text-xs font-semibold text-[#075B46] hover:underline"
              >
                Tampilkan semua warta berita
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <article
                  key={news.id}
                  onClick={() => onSelectNews(news)}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="text-[#075B46] font-semibold">{news.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{news.date}</span>
                      </div>

                      <h3 className="text-base font-bold font-editorial text-[#063D32] leading-snug group-hover:text-[#075B46] transition-colors line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-mono">{news.readTime}</span>
                    <span className="text-[#075B46] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Selengkapnya</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
