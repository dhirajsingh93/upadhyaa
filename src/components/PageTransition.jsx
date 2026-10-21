import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * PageTransition component wraps page content with a smooth fade & slight rise,
 * honoring reduced motion preferences for accessibility.
 */
export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}
