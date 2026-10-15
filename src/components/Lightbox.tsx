import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxData {
  title: string;
  image: string;
  category?: string;
  caption?: string;
}

interface LightboxProps {
  items: LightboxData[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Title & Close */}
      <div
        className="flex items-center justify-between max-w-6xl w-full mx-auto pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {currentItem.category && (
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-medium block">
              {currentItem.category}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-semibold text-white/95">
            {currentItem.title}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-white/60 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none"
            aria-label="Tutup preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Area with Nav Controls */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {items.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white transition-all backdrop-blur-sm"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-200"
        />

        {items.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white transition-all backdrop-blur-sm"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption */}
      <div
        className="max-w-3xl w-full mx-auto text-center pt-3 pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-white/80 font-editorial italic">
          {currentItem.caption || currentItem.title}
        </p>
      </div>
    </div>
  );
};
