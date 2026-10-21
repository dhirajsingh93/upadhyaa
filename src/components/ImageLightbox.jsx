import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev,
}) {
  // Handle keyboard events (Esc, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || {};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-warm-white z-10" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange px-2.5 py-1 rounded bg-graphite border border-graphite-border">
              Inspection View
            </span>
            <span className="text-sm text-muted-gray">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-2.5 rounded-full bg-graphite hover:bg-industrial-orange text-warm-white transition-colors duration-200 border border-graphite-border"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Image Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-graphite/80 hover:bg-industrial-orange text-warm-white border border-graphite-border z-10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Image Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-graphite/80 hover:bg-industrial-orange text-warm-white border border-graphite-border z-10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Central Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        >
          <img
            src={currentImage.url || currentImage.src || currentImage}
            alt={currentImage.caption || currentImage.title || "Facility asset"}
            className="max-w-full max-h-[75vh] object-contain rounded-lg border border-graphite-border shadow-2xl"
          />

          {/* Caption */}
          {(currentImage.title || currentImage.caption) && (
            <div className="mt-4 text-center max-w-xl">
              <h4 className="font-display font-bold text-warm-white text-base md:text-lg">
                {currentImage.title}
              </h4>
              {currentImage.caption && (
                <p className="text-xs md:text-sm text-muted-gray mt-1">
                  {currentImage.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
