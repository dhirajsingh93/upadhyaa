import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Layers, CheckCircle2, Factory, ChevronRight, Award, FlaskConical, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ImageLightbox from '../components/ImageLightbox';
import { companyData } from '../data/companyData';
import { products } from '../data/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Featured 4 editorial products for showcase
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const heroGallery = [
    { url: companyData.media.factory, title: "Upadhyay Rubber Industry Factory Plant", caption: "Faridabad, Haryana Manufacturing Facility" },
    { url: companyData.media.mixingMill, title: "Two-Roll Open Mixing Mill", caption: "In-house compounding and elastomeric mastication" },
    { url: companyData.media.mouldingPackaging, title: "Hydraulic Vulcanization & Finishing Setup", caption: "Multi-cavity high pressure compression moulding" },
    { url: companyData.media.testingLab1, title: "Quality Inspection Laboratory", caption: "In-house physical & rheometric testing bench" },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Upadhyay Rubber Industry | Precision Rubber & Plastic Components | Faridabad"
        description="Premium manufacturer of custom rubber bushes, extruded profiles, moulded parts, O-rings, and oil seals in Faridabad, Haryana. ISO 9001:2015 certified."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-charcoal overflow-hidden pt-6 pb-20">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-industrial-orange/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite border border-graphite-border">
                <span className="w-2 h-2 rounded-full bg-industrial-orange animate-ping" />
                <span className="text-xs font-mono tracking-widest text-warm-white uppercase">
                  Faridabad, Haryana • ISO 9001:2015
                </span>
              </div>

              {/* Bold Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-warm-white tracking-tighter leading-[1.05]">
                PRECISION IN <br />
                <span className="text-industrial-orange">EVERY COMPONENT.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-muted-gray max-w-xl leading-relaxed font-normal">
                Custom elastomeric compounding, hydraulic vulcanization moulding, and precision extrusion for tier-1 automotive systems and mission-critical industrial machinery.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/products"
                  className="px-7 py-4 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-industrial-orange/25 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-4 rounded-xl bg-graphite hover:bg-graphite-light text-warm-white border border-graphite-border hover:border-industrial-orange/50 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-8 border-t border-graphite-border/70 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="font-display text-xl sm:text-2xl font-bold text-warm-white block">
                    8+ Years
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block mt-0.5">
                    Compounding Mastery
                  </span>
                </div>
                <div>
                  <span className="font-display text-xl sm:text-2xl font-bold text-industrial-orange block">
                    300+ Moulds
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block mt-0.5">
                    Formulations Developed
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-display text-xl sm:text-2xl font-bold text-warm-white block">
                    ISO 9001:2015
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block mt-0.5">
                    Certified Lab QA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Showcase: Real Factory Visual (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div
                onClick={() => openLightbox(0)}
                className="relative rounded-2xl overflow-hidden border-2 border-graphite-border group cursor-pointer shadow-2xl bg-graphite"
              >
                <SafeImage
                  src={companyData.media.factory}
                  alt="Upadhyay Rubber Industry Faridabad Facility"
                  aspectRatio="aspect-[4/3]"
                  priority={true}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Industrial Overlay Badge */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-industrial-orange block">
                      Main Manufacturing Facility
                    </span>
                    <h3 className="font-display font-bold text-warm-white text-sm sm:text-base">
                      Sector 23, Faridabad, Haryana
                    </h3>
                  </div>
                  <span className="p-2 rounded-lg bg-charcoal/90 border border-graphite-border text-xs text-warm-white group-hover:text-industrial-orange transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Sub-thumb previews of factory capabilities */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div
                  onClick={() => openLightbox(1)}
                  className="p-3 rounded-xl bg-graphite border border-graphite-border hover:border-industrial-orange/50 cursor-pointer transition-all flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-charcoal shrink-0">
                    <img src={companyData.media.mixingMill} alt="Mixing Mill" className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold text-warm-white truncate block">Mixing Mill</span>
                    <span className="text-[10px] text-muted-gray block">In-house Compounding</span>
                  </div>
                </div>

                <div
                  onClick={() => openLightbox(2)}
                  className="p-3 rounded-xl bg-graphite border border-graphite-border hover:border-industrial-orange/50 cursor-pointer transition-all flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-charcoal shrink-0">
                    <img src={companyData.media.mouldingPackaging} alt="Hydraulic Moulding" className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold text-warm-white truncate block">Hydraulic Presses</span>
                    <span className="text-[10px] text-muted-gray block">Multi-Ton Moulding</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Editorial Products Section */}
      <section className="py-20 lg:py-28 bg-charcoal-dark border-t border-graphite-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Product Portfolio"
              title="ENGINEERED COMPONENTS FOR RIGOROUS DEMANDS"
              subtitle="Precision-moulded rubber bushes, continuous extruded profiles, dynamic seals, and custom industrial gaskets."
              className="mb-0"
            />
            <Link
              to="/products"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-industrial-orange hover:text-white transition-colors"
            >
              <span>View All 6 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section: 4 Stages */}
      <section className="py-20 lg:py-28 bg-charcoal relative border-t border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process Workflow"
            title="PRECISION FROM COMPOUNDING TO FINAL DISPATCH"
            subtitle="Adhering to strict DIN ISO 3302-1 dimensional tolerances through verified factory steps."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mt-12">
            {companyData.manufacturingProcess.map((proc, index) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-graphite border border-graphite-border hover:border-industrial-orange/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-industrial-orange">
                      {proc.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-industrial-orange/40" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-warm-white leading-snug">
                    {proc.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-muted-gray leading-relaxed">
                    {proc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-graphite-border">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-gray block">Equipment</span>
                  <span className="text-xs font-semibold text-warm-white mt-0.5 block">{proc.equipment}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Laboratory Preview Banner */}
      <section className="py-16 bg-graphite border-y border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-graphite-border bg-charcoal">
              <SafeImage
                src={companyData.media.testingLab1}
                alt="Testing Laboratory Setup"
                aspectRatio="aspect-[4/3]"
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-charcoal border border-graphite-border text-[11px] font-mono text-industrial-orange uppercase">
                <FlaskConical className="w-3.5 h-3.5" />
                In-House Testing Facility
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
                Zero-Defect Quality Control Bench
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                Every batch of compounded rubber undergoes strict durometer hardness checks (Shore A), tensile elongation measurement, and dimensional inspection before release. Explore our full laboratory setup and ISO 9001:2015 quality policy.
              </p>
              <div className="pt-2">
                <Link
                  to="/quality-lab"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-charcoal hover:bg-charcoal-light border border-graphite-border text-warm-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore Testing Lab & Certification</span>
                  <ArrowRight className="w-3.5 h-3.5 text-industrial-orange" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Application Sectors"
            title="CRITICAL INDUSTRIES POWERED BY OUR COMPONENTS"
            subtitle="Supplying heavy commercial transport, hydraulic systems, power grids, and OEM industrial machinery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.industries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-graphite/70 border border-graphite-border hover:border-industrial-orange/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-charcoal border border-graphite-border flex items-center justify-center text-industrial-orange mb-4">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-warm-white">
                  {ind.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-muted-gray leading-relaxed">
                  {ind.description}
                </p>
                <div className="mt-4 pt-3 border-t border-graphite-border flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-gray">Criteria:</span>
                  <span className="text-industrial-orange font-semibold">{ind.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Leadership Preview */}
      <section className="py-20 bg-charcoal-dark border-t border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-graphite border border-graphite-border rounded-2xl p-6 sm:p-10">
            {/* Owner Portrait Placeholder Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-charcoal border-2 border-industrial-orange/40 flex items-center justify-center p-2 shadow-2xl relative">
                <div className="w-full h-full rounded-full bg-graphite-light flex flex-col items-center justify-center text-muted-gray">
                  <Award className="w-12 h-12 text-industrial-orange mb-1" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-warm-white">
                    Founder & Owner
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-warm-white mt-4">
                {companyData.leadership.owner}
              </h3>
              <span className="text-xs font-mono text-muted-gray uppercase">
                {companyData.leadership.role}
              </span>
            </div>

            {/* Owner Statement */}
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange">
                Founder's Message
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
                "Leadership Built on Trust and Precision."
              </h3>
              <blockquote className="text-sm md:text-base text-muted-gray italic border-l-2 border-industrial-orange pl-4 my-3">
                "{companyData.leadership.personalQuote}"
              </blockquote>
              <p className="text-xs sm:text-sm text-muted-gray leading-relaxed">
                Operating directly from our Faridabad manufacturing unit, we partner closely with industrial clients to deliver custom tooling and prompt turnaround without intermediaries.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-industrial-orange hover:text-white transition-colors"
                >
                  <span>Read Full Leadership Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-charcoal to-charcoal-dark border-t border-graphite-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full bg-graphite border border-graphite-border font-mono text-xs text-industrial-orange uppercase tracking-widest mb-4">
            Direct Plant RFQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-white tracking-tight">
            HAVE A COMPONENT REQUIREMENT? <br />
            <span className="text-industrial-orange">LET'S DISCUSS YOUR PROJECT.</span>
          </h2>
          <p className="mt-4 text-base text-muted-gray max-w-xl mx-auto">
            Send us your drawing or sample. Our technical engineering desk will prepare a comprehensive quote and mould estimate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-industrial-orange/20"
            >
              Request a Quote
            </Link>
            <a
              href={companyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#25D366]/20"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Facility Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={heroGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % heroGallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + heroGallery.length) % heroGallery.length)}
      />
    </>
  );
}
