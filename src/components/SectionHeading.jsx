import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite-border mb-4 text-xs font-mono font-medium uppercase tracking-widest text-industrial-orange ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange animate-pulse" />
          {badge}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-warm-white leading-[1.12]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted-gray leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
