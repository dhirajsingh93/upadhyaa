import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import { companyData } from '../data/companyData';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  const prefilledCategory = searchParams.get('category') || '';

  return (
    <>
      <SEOHead
        title="Contact & Request a Quote | Upadhyay Rubber Industry — Faridabad"
        description="Get in touch with Mr. Daya Shankar Upadhyay and our Faridabad engineering team for quotations on custom rubber bushes, extruded profiles, O-rings, and seals."
      />

      {/* Header */}
      <section className="py-16 md:py-20 bg-charcoal border-b border-graphite-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Direct Factory Engagement"
            title="REQUEST A QUOTE & DISCUSS YOUR PROJECT"
            subtitle="Connect directly with our engineering desk at Sanjay Colony, Sector 23, Faridabad. Fast turnaround on custom moulds, drawings, and production volumes."
          />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column: Verified Contact Information & Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Quick Info Card */}
              <div className="bg-graphite border border-graphite-border rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-industrial-orange">
                    Verified Factory Coordinates
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-warm-white mt-1">
                    Upadhyay Rubber Industry
                  </h3>
                  <p className="text-xs text-muted-gray mt-1">
                    Proprietor: <strong className="text-warm-white">{companyData.contact.ownerName}</strong>
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-muted-gray pt-2 border-t border-graphite-border">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-charcoal border border-graphite-border flex items-center justify-center text-industrial-orange shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-warm-white block font-sans">Manufacturing Plant</strong>
                      <span className="leading-relaxed mt-0.5 block">{companyData.contact.address.full}</span>
                      <a
                        href={companyData.contact.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-industrial-orange hover:underline font-mono mt-1"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-charcoal border border-graphite-border flex items-center justify-center text-industrial-orange shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-warm-white block font-sans">Direct Telephone</strong>
                      <a
                        href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                        className="font-mono text-warm-white hover:text-industrial-orange transition-colors text-sm mt-0.5 block"
                      >
                        {companyData.contact.phone}
                      </a>
                      <span className="text-[11px] text-muted-gray">Direct owner / technical line</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-charcoal border border-graphite-border flex items-center justify-center text-industrial-orange shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-warm-white block font-sans">Commercial Email</strong>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="text-warm-white hover:text-industrial-orange transition-colors mt-0.5 block"
                      >
                        {companyData.contact.email}
                      </a>
                      <span className="text-[11px] text-muted-gray">For purchase orders & technical drawings</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-charcoal border border-graphite-border flex items-center justify-center text-industrial-orange shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-warm-white block font-sans">Operating Hours</strong>
                      <span className="mt-0.5 block">{companyData.contact.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="pt-2">
                  <a
                    href={companyData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/25"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
                    </svg>
                    <span>Instant Inquiry via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-graphite-border shadow-2xl bg-graphite">
                <div className="px-5 py-3 bg-charcoal border-b border-graphite-border flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-gray">Faridabad Location Map</span>
                  <span className="text-industrial-orange">Sector 23</span>
                </div>
                <div className="w-full h-64 sm:h-72">
                  <iframe
                    title="Upadhyay Rubber Industry Location Map"
                    src={companyData.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Industrial RFQ Form (7 Cols) */}
            <div className="lg:col-span-7">
              <InquiryForm
                prefilledProduct={prefilledProduct}
                prefilledCategory={prefilledCategory}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
