import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { PESANTREN_INFO } from '../config/pesantrenConfig';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'program', label: 'Program' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'berita', label: 'Berita & Kegiatan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#063D32] text-white/90 text-xs py-2 px-4 sm:px-8 border-b border-[#075B46]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[#C6A15B] font-semibold tracking-wide">PSB BUKA</span>
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="text-white/80">Penerimaan Santri Baru Tahun Ajaran Baru Sedang Berlangsung</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a
              href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Admin%2C%20mohon%20informasi%20Pondok%20Pesantren`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6A15B] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{PESANTREN_INFO.kontak.whatsappDisplay}</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <button
              onClick={onOpenGuide}
              className="text-[#C6A15B] hover:text-white transition-colors cursor-pointer text-xs font-medium underline underline-offset-2"
              title="Petunjuk Penggantian Data & Publikasi Hosting"
            >
              Panduan Edit & Deploy
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-white border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            {/* Logo Resmi Yayasan Pontren Raudlatussalam */}
            <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-sm border border-stone-200 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={PESANTREN_INFO.logo}
                alt={PESANTREN_INFO.namaResmi}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="block text-base sm:text-lg font-bold text-[#063D32] font-editorial tracking-tight">
                {PESANTREN_INFO.namaResmi}
              </span>
              <span className="block text-[11px] uppercase tracking-wider text-[#68736D] font-medium">
                {PESANTREN_INFO.subJudul}
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, unboxed, hover underline) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#202923]">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#075B46] font-semibold'
                      : 'text-[#202923]/80 hover:text-[#075B46]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#075B46] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('pendaftaran')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activePage === 'pendaftaran'
                  ? 'bg-[#063D32] text-white shadow-sm ring-2 ring-[#C6A15B]'
                  : 'bg-[#075B46] text-white hover:bg-[#063D32] shadow-sm'
              }`}
            >
              <span>Info Pendaftaran (PSB)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#202923] hover:bg-stone-100 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#075B46]/10 text-[#075B46] font-semibold'
                      : 'text-[#202923] hover:bg-stone-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-stone-100">
              <button
                onClick={() => handleNavClick('pendaftaran')}
                className="w-full py-3 px-4 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Penerimaan Santri Baru (PSB)</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
