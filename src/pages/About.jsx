import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Layers, Cpu, Award, ArrowRight, CheckCircle2, Factory, Eye, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import ImageLightbox from '../components/ImageLightbox';
import { companyData } from '../data/companyData';

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const facilityGallery = [
    { url: companyData.media.factory, title: "Faridabad Manufacturing Plant", caption: "Main facility located at Sector 23, Sanjay Colony industrial cluster" },
    { url: companyData.media.mixingMill, title: "Two-Roll Open Mixing Mill", caption: "Compound mixing, polymer mastication and active vulcanizing additive dispersion" },
    { url: companyData.media.mouldingPackaging, title: "Hydraulic Compression Moulding & Finishing", caption: "High pressure thermal vulcanization and precision finishing cell" },
    { url: companyData.media.testingLab1, title: "Material & Rheology Testing Lab", caption: "Tensile, elongation and hardness verification before delivery" },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getIcon = (name) => {
    switch (name) {
      case "Target": return <Target className="w-5 h-5 text-industrial-orange" />;
      case "Layers": return <Layers className="w-5 h-5 text-industrial-orange" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-industrial-orange" />;
      default: return <ShieldCheck className="w-5 h-5 text-industrial-orange" />;
    }
  };

  return (
    <>
      <SEOHead
        title="About Us & Leadership | Upadhyay Rubber Industry — Faridabad"
        description="Learn about Upadhyay Rubber Industry, our founder Mr. Daya Shankar Upadhyay, in-house mixing mill, hydraulic moulding infrastructure, and ISO 9001:2015 quality commitment in Faridabad."
      />

      {/* Hero Header */}
      <section className="py-20 lg:py-24 bg-charcoal border-b border-graphite-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="About Upadhyay Rubber Industry"
            title="ENGINEERING INTEGRITY & INDUSTRIAL HERITAGE"
            subtitle="Founded in Faridabad, Haryana, we specialize in custom rubber compounding, precision hydraulic moulding, and continuous extrusion for heavy industry and automotive engineering."
          />
        </div>
      </section>

      {/* Leadership Profile: Mr. Daya Shankar Upadhyay, Owner */}
      <section className="py-20 lg:py-28 bg-charcoal-dark border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Owner Editorial Portrait Showcase (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-graphite border-2 border-graphite-border shadow-2xl p-6 text-center">
                {/* Architectural portrait placeholder framed with industrial geometry */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-charcoal border-4 border-industrial-orange/30 p-2 relative shadow-inner">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-graphite to-charcoal flex flex-col items-center justify-center text-center p-4">
                    <Award className="w-14 h-14 text-industrial-orange mb-2" />
                    <span className="font-display font-bold text-warm-white text-sm">
                      Mr. Daya Shankar Upadhyay
                    </span>
                    <span className="text-[10px] font-mono text-muted-gray uppercase mt-1">
                      Founder & Proprietor
                    </span>
                  </div>
                </div>

                {/* Name & Credentials */}
                <div className="mt-6 pt-4 border-t border-graphite-border">
                  <h3 className="font-display text-xl font-bold text-warm-white">
                    {companyData.leadership.owner}
                  </h3>
                  <p className="text-xs font-mono text-industrial-orange uppercase tracking-wider mt-1">
                    {companyData.leadership.role} • Upadhyay Rubber Industry
                  </p>
                  <p className="text-xs text-muted-gray mt-2">
                    Faridabad Manufacturing Unit, Haryana
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-muted-gray">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Direct Technical Inquiries Welcomed</span>
                </div>
              </div>
            </motion.div>

            {/* Leadership Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange">
                Executive Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-warm-white tracking-tight leading-tight">
                {companyData.leadership.headline}
              </h2>

              <p className="text-sm sm:text-base text-muted-gray leading-relaxed">
                {companyData.leadership.biography}
              </p>

              {/* Owner Quote Card */}
              <div className="p-6 rounded-2xl bg-graphite border-l-4 border-industrial-orange relative my-6">
                <Quote className="w-8 h-8 text-industrial-orange/20 absolute right-6 top-6" />
                <p className="text-sm sm:text-base italic text-warm-white font-medium leading-relaxed">
                  "{companyData.leadership.personalQuote}"
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-mono text-industrial-orange uppercase font-semibold">
                    — {companyData.leadership.quoteAuthor}
                  </span>
                </div>
              </div>

              {/* Owner's Editable Journey Box */}
              <div className="p-5 rounded-xl bg-charcoal border border-dashed border-graphite-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-industrial-orange font-bold">
                    [Editable Owner's Note]
                  </span>
                  <span className="text-[10px] font-mono text-muted-gray">Source: Management Desk</span>
                </div>
                <p className="text-xs text-muted-gray leading-relaxed">
                  "Our journey in Faridabad has been built on persistent dedication to quality: understanding client drawings, formulating compounds in our own mixing mill, and ensuring that every batch meets the toughest industrial standards."
                </p>
              </div>

              {/* Direct Owner Consultation CTA */}
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-industrial-orange/20"
                >
                  <span>Discuss Requirements with Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Photo Gallery: Mixing Mill & Moulding Infrastructure */}
      <section className="py-20 lg:py-28 bg-charcoal border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure & Setup"
            title="FACTORY CAPACITY & HEAVY MACHINERY SETUP"
            subtitle="Click on any plant asset to inspect mixing mills, vulcanizing presses, and finishing lines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden bg-graphite border border-graphite-border hover:border-industrial-orange/60 cursor-pointer shadow-lg transition-all duration-300"
              >
                <SafeImage
                  src={item.url}
                  alt={item.title}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-graphite border-t border-graphite-border">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-warm-white group-hover:text-industrial-orange transition-colors">
                      {item.title}
                    </h4>
                    <Eye className="w-4 h-4 text-muted-gray group-hover:text-industrial-orange" />
                  </div>
                  <p className="text-xs text-muted-gray mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-28 bg-charcoal-dark border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Tenets"
            title="THE PRINCIPLES THAT DRIVE OUR MANUFACTURING"
            subtitle="Adhering to strict standards across compounding, moulding, and customer partnerships."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {companyData.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-graphite border border-graphite-border hover:border-industrial-orange/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal border border-graphite-border flex items-center justify-center mb-5">
                  {getIcon(val.icon)}
                </div>
                <h3 className="font-display font-bold text-lg text-warm-white">
                  {val.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-gray leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 lg:py-28 bg-charcoal border-b border-graphite-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Track Record"
            title="VERIFIED FACTORY MILESTONES"
            subtitle="A timeline of continuous investment in heavy tooling, in-house testing, and ISO certification."
            align="center"
          />

          <div className="mt-12 relative border-l-2 border-graphite-border ml-4 sm:ml-32 space-y-10">
            {companyData.milestones.map((ms, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-graphite border-2 border-industrial-orange group-hover:bg-industrial-orange transition-colors" />

                {/* Milestone year label on larger screens */}
                <div className="sm:absolute sm:-left-32 sm:top-1 font-mono text-xs font-bold text-industrial-orange uppercase sm:text-right sm:w-24">
                  {ms.year}
                </div>

                <div className="p-5 rounded-xl bg-graphite border border-graphite-border">
                  <h4 className="font-display font-bold text-base text-warm-white">
                    {ms.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-gray mt-1 leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
            Looking for Custom Mould Development or Sample Trials?
          </h2>
          <p className="text-sm text-muted-gray mt-3 max-w-xl mx-auto">
            Contact Mr. Daya Shankar Upadhyay and our Faridabad engineering team to discuss polymer compounds, tooling dies, and production schedules.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Get in Touch with Our Team
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-graphite hover:bg-graphite-light text-warm-white border border-graphite-border text-xs font-bold uppercase tracking-wider transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={facilityGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % facilityGallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length)}
      />
    </>
  );
}
