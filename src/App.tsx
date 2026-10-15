import React, { useState, useEffect } from 'react';
import { PageId, NewsItem } from './types';
import { PESANTREN_INFO, GALLERY_LIST } from './config/pesantrenConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox, LightboxData } from './components/Lightbox';
import { GuideModal } from './components/GuideModal';

import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { NewsPage } from './pages/NewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';

import { ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('beranda');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<LightboxData[]>(
    GALLERY_LIST.map((g) => ({
      title: g.title,
      image: g.image,
      category: g.category,
      caption: g.caption,
    }))
  );
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Guide Modal State
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  // Scroll to Top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // URL Hash Synchronizer for full navigation bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'beranda',
        'profil',
        'program',
        'fasilitas',
        'berita',
        'galeri',
        'pendaftaran',
        'kontak',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage changes
  const handlePageChange = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    if (page !== 'berita') {
      setSelectedNews(null);
    }
  };

  // Scroll watcher for "Back to Top"
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Lightbox from gallery
  const handleOpenLightbox = (index: number) => {
    setLightboxItems(
      GALLERY_LIST.map((g) => ({
        title: g.title,
        image: g.image,
        category: g.category,
        caption: g.caption,
      }))
    );
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Open Lightbox from Facility Item
  const handleOpenLightboxWithItem = (title: string, image: string, caption: string) => {
    setLightboxItems([
      {
        title,
        image,
        category: 'Fasilitas Kampus',
        caption,
      },
    ]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxItems.length - 1));
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev < lightboxItems.length - 1 ? prev + 1 : 0));
  };

  const handleSelectNewsAndNavigate = (news: NewsItem) => {
    setSelectedNews(news);
    handlePageChange('berita');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6EF] text-[#202923] font-sans selection:bg-[#075B46] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenGuide={() => setGuideModalOpen(true)}
      />

      {/* 2. Main Page Content View with Smooth Page Transition */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage + (activePage === 'berita' && selectedNews ? `-${selectedNews.id}` : '')}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activePage === 'beranda' && (
              <HomePage
                setActivePage={handlePageChange}
                onOpenLightbox={handleOpenLightbox}
                onSelectNews={handleSelectNewsAndNavigate}
              />
            )}

            {activePage === 'profil' && (
              <ProfilePage setActivePage={handlePageChange} />
            )}

            {activePage === 'program' && (
              <ProgramsPage setActivePage={handlePageChange} />
            )}

            {activePage === 'fasilitas' && (
              <FacilitiesPage
                setActivePage={handlePageChange}
                onOpenLightboxWithItem={handleOpenLightboxWithItem}
              />
            )}

            {activePage === 'berita' && (
              <NewsPage
                selectedNews={selectedNews}
                onSelectNews={setSelectedNews}
                setActivePage={handlePageChange}
              />
            )}

            {activePage === 'galeri' && (
              <GalleryPage onOpenLightbox={handleOpenLightbox} />
            )}

            {activePage === 'pendaftaran' && <AdmissionPage />}

            {activePage === 'kontak' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenGuide={() => setGuideModalOpen(true)}
      />

      {/* 4. Global Lightbox Modal */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />

      {/* 5. Customization & Deployment Guide Modal */}
      <GuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      {/* 6. Floating Action Buttons (Scroll to Top & WhatsApp Floating Contact) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {/* Floating WhatsApp Quick Contact Button */}
        <a
          href={`https://wa.me/${PESANTREN_INFO.kontak.whatsapp}?text=Assalamu%27alaikum%20Admin%2C%20mohon%20informasi%20Pondok%20Pesantren`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-[#075B46] hover:bg-[#063D32] text-white rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer border border-[#C6A15B]/40 group"
          title="Chat WhatsApp Resmi"
          aria-label="Chat WhatsApp Resmi"
        >
          <MessageCircle className="w-5 h-5 text-[#C6A15B]" />
        </a>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/95 hover:bg-white text-[#063D32] rounded-full shadow-md transition-all hover:scale-105 border border-stone-200 cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 text-[#075B46]" />
          </button>
        )}
      </div>
    </div>
  );
}
