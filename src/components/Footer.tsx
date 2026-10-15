import React from 'react';
import { PageId } from '../types';
import { PESANTREN_INFO } from '../config/pesantrenConfig';
import { Phone, Mail, MapPin, Clock, ArrowRight, BookOpen, Settings } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenGuide }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#063D32] text-white border-t border-[#075B46]">
      {/* Upper Footer: 4 Editorial Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Filosofi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-sm border border-stone-200 overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={PESANTREN_INFO.logo}
                  alt={PESANTREN_INFO.namaResmi}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-editorial font-bold text-lg text-white leading-tight">
                  {PESANTREN_INFO.namaResmi}
                </h3>
                <p className="text-xs text-[#C6A15B] tracking-wide">
                  {PESANTREN_INFO.subJudul}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed pt-1">
              {PESANTREN_INFO.tagline}. Memadukan kedalaman ilmu agama salaf, kurikulum pendidikan nasional, dan kesiapan teknologi.
            </p>

            <div className="pt-2">
              <div className="text-xs text-stone-300 font-mono">
                {PESANTREN_INFO.nomorStatistik}
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                Bernaung di bawah {PESANTREN_INFO.yayasanPengelola}
              </div>
            </div>
          </div>

          {/* Column 2: Tautan Halaman */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#C6A15B] tracking-wider uppercase">
              Navigasi Utama
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('profil')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Profil & Sejarah</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('program')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Program Pendidikan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('fasilitas')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Fasilitas Kampus</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('berita')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Warta & Agenda Kegiatan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('galeri')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>Galeri Dokumentasi</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Program & Penerimaan */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#C6A15B] tracking-wider uppercase">
              Pendidikan & PSB
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Tahfidzul Qur'an Bersanad</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Kajian Kitab Turats / Kuning</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>SMP/MTs & SMA/MA Terpadu</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Lingkungan Bahasa Arab & Inggris</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('pendaftaran')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#075B46] hover:bg-[#054a39] text-[#C6A15B] rounded-lg text-xs font-semibold transition-colors border border-[#C6A15B]/30"
                >
                  <span>Alur & Pendaftaran Santri Baru</span>
                  <ArrowRight className="w-3 h-3 text-white" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak Resmi */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#C6A15B] tracking-wider uppercase">
              Kantor Sekretariat
            </h4>
            <div className="space-y-3 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{PESANTREN_INFO.kontak.alamat}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  WhatsApp: {PESANTREN_INFO.kontak.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href={`mailto:${PESANTREN_INFO.kontak.email}`}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {PESANTREN_INFO.kontak.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{PESANTREN_INFO.kontak.jamPelayanan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Socials, and Customization Guide Link */}
      <div className="border-t border-[#075B46]/70 py-6 px-4 sm:px-6 lg:px-8 bg-[#042821]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-3">
            <p>
              &copy; {currentYear} {PESANTREN_INFO.namaResmi}. Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#075B46]/50 hover:bg-[#075B46] text-[#C6A15B] hover:text-white transition-colors cursor-pointer border border-[#C6A15B]/30"
              title="Buka panduan mengubah nama pesantren, logo, kontak, dan langkah hosting"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Panduan Edit & Deploy</span>
            </button>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/60">Sistem Profil Statis Modern</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
