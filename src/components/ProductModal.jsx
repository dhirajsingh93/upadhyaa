import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Layers, Gauge, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function ProductModal({
  product,
  isOpen,
  onClose,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleQuoteClick = () => {
    onClose();
    navigate(`/contact?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`);
  };

  const whatsappInquiryUrl = `https://wa.me/918810422099?text=Hello%20Upadhyay%20Rubber%20Industry%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(product.name)}%20for%20our%20industrial%20requirement.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-dark/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-graphite border border-graphite-border rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-graphite-border bg-charcoal">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-industrial-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-gray">
                Component Specification Sheet
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close specifications modal"
              className="p-1.5 rounded-lg text-muted-gray hover:text-warm-white hover:bg-graphite transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            {/* Top Showcase: Image + Core Data */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Product Visual */}
              <div className="md:col-span-5 rounded-xl overflow-hidden border border-graphite-border bg-charcoal">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  aspectRatio="aspect-[4/3]"
                />
                <div className="p-3 bg-charcoal/95 border-t border-graphite-border text-center">
                  <span className="font-mono text-[11px] text-muted-gray">
                    Verified Manufacturing Asset • Faridabad Plant
                  </span>
                </div>
              </div>

              {/* Title & Core Overview */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-industrial-orange/15 border border-industrial-orange/30 text-industrial-orange text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    {product.categoryName}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-white leading-tight">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm text-muted-gray leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 rounded-lg bg-charcoal border border-graphite-border">
                    <span className="text-[11px] font-mono text-muted-gray uppercase block">Durometer Hardness</span>
                    <span className="text-sm font-semibold text-warm-white mt-0.5 block">{product.hardnessShoreA}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-charcoal border border-graphite-border">
                    <span className="text-[11px] font-mono text-muted-gray uppercase block">Operating Range</span>
                    <span className="text-sm font-semibold text-warm-white mt-0.5 block">{product.temperatureRange}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Parameters Table */}
            <div className="border border-graphite-border rounded-xl overflow-hidden bg-charcoal">
              <div className="px-5 py-3 bg-graphite/80 border-b border-graphite-border flex items-center justify-between">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-warm-white">
                  Technical Specifications & Compliance
                </h4>
                <span className="text-xs font-mono text-industrial-orange">ISO 9001:2015 Standards</span>
              </div>
              <div className="divide-y divide-graphite-border text-xs md:text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 p-3.5 hover:bg-graphite/40 transition-colors">
                  <span className="font-mono text-muted-gray">Compatible Polymers</span>
                  <span className="md:col-span-2 text-warm-white font-medium mt-1 md:mt-0">
                    {product.polymerOptions.join(" • ")}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-3.5 hover:bg-graphite/40 transition-colors">
                  <span className="font-mono text-muted-gray">Dimensional Tolerances</span>
                  <span className="md:col-span-2 text-warm-white font-medium mt-1 md:mt-0">
                    {product.toleranceStandard}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-3.5 hover:bg-graphite/40 transition-colors">
                  <span className="font-mono text-muted-gray">Bespoke Tooling & Dies</span>
                  <span className="md:col-span-2 text-warm-white font-medium mt-1 md:mt-0">
                    {product.customTooling}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Engineering Features & Industrial Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features */}
              <div className="p-5 rounded-xl bg-charcoal border border-graphite-border">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-warm-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-industrial-orange" />
                  Key Performance Attributes
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-muted-gray">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="p-5 rounded-xl bg-charcoal border border-graphite-border">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-warm-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-industrial-orange" />
                  Recommended Applications
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-muted-gray">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-gray shrink-0 mt-2" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-charcoal border-t border-graphite-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-muted-gray text-center sm:text-left">
              Need custom dimensions or drawing validation? Talk to our Faridabad engineering team.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/20"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
                </svg>
                WhatsApp
              </a>
              <button
                type="button"
                onClick={handleQuoteClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-industrial-orange/20"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
