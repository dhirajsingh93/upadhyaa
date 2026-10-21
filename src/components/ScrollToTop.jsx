import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // 1. Reset scroll to top on every route change (with timeout to handle Framer Motion exit animation)
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 60);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // 2. Track scroll position with reliable window scroll listener
  useEffect(() => {
    const checkScroll = () => {
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

      // Show button as soon as user scrolls past 120px
      if (currentScroll > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // Immediate check on mount

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // 3. Robust smooth scroll to top function
  const handleScrollToTop = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll back to top"
          title="Scroll back to top"
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-graphite/95 hover:bg-industrial-orange border border-graphite-border hover:border-industrial-orange text-warm-white hover:text-white shadow-2xl hover:shadow-industrial-orange/40 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-industrial-orange/30 group backdrop-blur-md"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
