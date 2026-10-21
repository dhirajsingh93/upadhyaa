import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function ProductCard({
  product,
  onOpenModal,
}) {
  const navigate = useNavigate();

  const handleInquire = (e) => {
    e.stopPropagation();
    navigate(`/contact?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      onClick={() => onOpenModal(product)}
      className="group relative flex flex-col justify-between bg-graphite/60 hover:bg-graphite border border-graphite-border hover:border-industrial-orange/60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-industrial-orange/10"
    >
      {/* Top Image Showcase */}
      <div className="relative overflow-hidden bg-charcoal">
        <SafeImage
          src={product.image}
          alt={product.name}
          aspectRatio="aspect-[16/11]"
          className="group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Category Pill Over Image */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-2.5 py-1 rounded bg-charcoal/90 border border-graphite-border text-[11px] font-mono uppercase tracking-wider text-warm-white">
            {product.categoryName}
          </span>
        </div>

        {/* Verified Spec Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-warm-white/90 z-10">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border font-mono">
            <Thermometer className="w-3 h-3 text-industrial-orange" />
            {product.temperatureRange}
          </span>
          <span className="px-2 py-0.5 rounded bg-charcoal/80 backdrop-blur-sm border border-graphite-border font-mono text-muted-gray">
            {product.hardnessShoreA.split('(')[0]}
          </span>
        </div>

        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display text-lg md:text-xl font-bold text-warm-white group-hover:text-industrial-orange transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-2.5 text-xs md:text-sm text-muted-gray line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Polymer Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.polymerOptions.slice(0, 3).map((polymer, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal text-muted-gray border border-graphite-border"
              >
                {polymer.split('(')[0].trim()}
              </span>
            ))}
            {product.polymerOptions.length > 3 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal text-industrial-orange border border-graphite-border">
                +{product.polymerOptions.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 pt-4 border-t border-graphite-border flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="text-xs font-semibold uppercase tracking-wider text-warm-white group-hover:text-industrial-orange flex items-center gap-1 transition-colors"
          >
            Full Specs
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleInquire}
            className="px-3.5 py-1.5 rounded-lg bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-industrial-orange/20"
          >
            Get Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
