import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Eye, CheckCircle2, FlaskConical, Gauge, Thermometer, ArrowRight, FileCheck, Layers } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import ImageLightbox from '../components/ImageLightbox';
import { companyData } from '../data/companyData';

export default function QualityLab() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const labGallery = [
    { url: companyData.media.testingLab1, title: "In-House Testing Equipment", caption: "Physical evaluation bench for tensile, elongation, and durometer hardness" },
    { url: companyData.media.testingLab2, title: "Advanced Laboratory Setup", caption: "Rheometric cure testing and polymer dispersion verification" },
    { url: companyData.media.certification, title: "ISO 9001:2015 Certificate", caption: "Certified Quality Management System for rubber & plastic components" },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Quality inspection stages
  const inspectionStages = [
    {
      stage: "Stage 01",
      title: "Raw Polymer & Chemical Audit",
      items: [
        "Mooney viscosity and batch identification of raw elastomer bales (NBR, EPDM, Silicone)",
        "Verification of carbon black particle size and active cure accelerators",
        "Moisture and contamination screening before mixing",
      ],
    },
    {
      stage: "Stage 02",
      title: "Compound Rheology & Cure Curve",
      items: [
        "In-house testing of cure characteristics (Scorch time Ts2, Optimum cure Tc90)",
        "Durometer Shore A hardness verification on test buttons",
        "Specific gravity and compound density measurement",
      ],
    },
    {
      stage: "Stage 03",
      title: "In-Process Hydraulic Moulding Control",
      items: [
        "Digital platen temperature monitoring (150°C - 190°C ±2°C)",
        "Hydraulic clamping pressure calibration for zero porosity",
        "Cavity flash control and degas venting sequence",
      ],
    },
    {
      stage: "Stage 04",
      title: "Finished Component Metrology & QA Audit",
      items: [
        "Critical dimension inspection using digital verniers, micrometers, and optical profile gauges",
        "Compression set evaluation after thermal cycling",
        "Tensile break strength and elongation percentage audit",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="In-House Testing Laboratory & ISO 9001:2015 Quality | Upadhyay Rubber Industry"
        description="Discover our certified in-house rubber testing laboratory in Faridabad. ISO 9001:2015 certified quality inspection, tensile and Shore A hardness verification."
      />

      {/* Lab Hero */}
      <section className="py-20 lg:py-24 bg-charcoal border-b border-graphite-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="In-House Metrology & QA"
            title="RIGID TESTING STANDARDS. ZERO COMPROMISE."
            subtitle="Our Faridabad facility features a dedicated testing laboratory ensuring every batch of rubber compounds and finished parts satisfies international standards."
          />
        </div>
      </section>

      {/* Lab Overview with Real Assets */}
      <section className="py-20 lg:py-28 bg-charcoal-dark border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Grid (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => openLightbox(0)}
                className="group relative rounded-xl overflow-hidden bg-graphite border border-graphite-border hover:border-industrial-orange/60 cursor-pointer shadow-xl transition-all"
              >
                <SafeImage
                  src={companyData.media.testingLab1}
                  alt="Testing Equipment"
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-graphite flex items-center justify-between text-xs">
                  <span className="font-semibold text-warm-white">Testing Equipment</span>
                  <Eye className="w-3.5 h-3.5 text-industrial-orange" />
                </div>
              </div>

              <div
                onClick={() => openLightbox(1)}
                className="group relative rounded-xl overflow-hidden bg-graphite border border-graphite-border hover:border-industrial-orange/60 cursor-pointer shadow-xl transition-all"
              >
                <SafeImage
                  src={companyData.media.testingLab2}
                  alt="Laboratory Setup"
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-graphite flex items-center justify-between text-xs">
                  <span className="font-semibold text-warm-white">Advanced QA Setup</span>
                  <Eye className="w-3.5 h-3.5 text-industrial-orange" />
                </div>
              </div>
            </div>

            {/* Description (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange">
                Analytical Equipment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-white leading-tight">
                In-House Precision Material Analysis
              </h2>
              <p className="text-sm sm:text-base text-muted-gray leading-relaxed">
                Rather than relying solely on external test houses, Upadhyay Rubber Industry maintains on-site inspection instruments. This enables immediate feedback to our two-roll mixing mill operators and hydraulic press technicians, eliminating batch deviations before mass production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-graphite border border-graphite-border">
                  <Gauge className="w-6 h-6 text-industrial-orange mb-2" />
                  <h4 className="font-display font-bold text-sm text-warm-white">Shore A Hardness</h4>
                  <p className="text-xs text-muted-gray mt-1">Calibrated analog and digital durometers for rubber resilience.</p>
                </div>

                <div className="p-4 rounded-xl bg-graphite border border-graphite-border">
                  <Thermometer className="w-6 h-6 text-industrial-orange mb-2" />
                  <h4 className="font-display font-bold text-sm text-warm-white">Thermal & Aging</h4>
                  <p className="text-xs text-muted-gray mt-1">Simulated accelerated heat ageing in convection ovens.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001:2015 Certification Section */}
      <section className="py-20 lg:py-28 bg-charcoal border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-graphite border border-graphite-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Certificate Image (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => openLightbox(2)}
                  className="group relative rounded-xl overflow-hidden border-2 border-industrial-orange/40 bg-charcoal cursor-pointer shadow-2xl max-w-sm w-full"
                >
                  <SafeImage
                    src={companyData.media.certification}
                    alt="ISO 9001:2015 Certificate"
                    aspectRatio="aspect-[3/4]"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-charcoal/90 border border-graphite-border text-xs font-mono font-bold text-warm-white flex items-center gap-2 group-hover:text-industrial-orange">
                      <Eye className="w-4 h-4" />
                      Click to Inspect Certificate
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-muted-gray mt-3">
                  Verified Original ISO Certification Document
                </span>
              </div>

              {/* Certificate Details & Scope (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal border border-industrial-orange/30 text-industrial-orange font-mono text-xs uppercase">
                  <Award className="w-3.5 h-3.5" />
                  Verified Quality Certification
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-warm-white">
                  ISO 9001:2015 Certified
                </h2>

                <p className="text-sm sm:text-base text-muted-gray leading-relaxed">
                  Upadhyay Rubber Industry operates under a documented Quality Management System compliant with ISO 9001:2015. Our certification confirms rigorous standardization from raw material sourcing through production to dispatch.
                </p>

                <div className="p-4 rounded-xl bg-charcoal border border-graphite-border space-y-2 text-xs font-mono">
                  <div className="text-muted-gray">
                    Standard: <span className="text-warm-white font-bold">{companyData.certification.standard}</span>
                  </div>
                  <div className="text-muted-gray">
                    Scope: <span className="text-warm-white">{companyData.certification.scope}</span>
                  </div>
                  <div className="text-muted-gray">
                    Verification Status: <span className="text-emerald-400 font-bold">Active & Verified Claim</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openLightbox(2)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-industrial-orange/20"
                  >
                    <span>View High-Resolution Certificate</span>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Inspection Workflow */}
      <section className="py-20 lg:py-28 bg-charcoal-dark border-b border-graphite-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Inspection Protocol"
            title="THE 4-STAGE QUALITY AUDIT TRAIL"
            subtitle="Every component manufactured in our facility passes through systematic quality gates."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {inspectionStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-graphite border border-graphite-border hover:border-industrial-orange/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange px-2.5 py-1 rounded bg-charcoal border border-graphite-border">
                    {stage.stage}
                  </span>
                  <FileCheck className="w-5 h-5 text-muted-gray" />
                </div>
                <h3 className="font-display font-bold text-xl text-warm-white mb-4">
                  {stage.title}
                </h3>
                <ul className="space-y-3">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-gray">
                      <CheckCircle2 className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments Grid */}
      <section className="py-20 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-white">
            Need Batch Test Certificates or Inspection Reports?
          </h2>
          <p className="text-sm text-muted-gray mt-3 max-w-xl mx-auto">
            We provide Certificate of Analysis (COA) and material test reports alongside commercial consignments upon request.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Request Sample with Test Certificate
            </Link>
            <a
              href="https://wa.me/918810422099?text=Hello%20Upadhyay%20Rubber%2C%20I%20would%20like%20to%20enquire%20about%20your%20testing%20capabilities%20and%20batch%20test%20reports."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/20"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
              </svg>
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Lab and Cert Images */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={labGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % labGallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + labGallery.length) % labGallery.length)}
      />
    </>
  );
}
