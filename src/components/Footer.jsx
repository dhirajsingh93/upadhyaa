import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { productCategories } from '../data/products';
import brandLogo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-graphite-border text-warm-white relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-industrial-orange to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-[70px] w-[140px] overflow-hidden rounded-lg bg-black">
              <img
                src={brandLogo}
                alt="Upadhyay Rubber Industry — Premium Manufacturer of Rubber & Plastic Components"
                className="absolute -top-[34px] left-0 h-[140px] w-[140px] max-w-none object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-xs sm:text-sm text-muted-gray leading-relaxed">
              {companyData.subTagline}
            </p>

            {/* ISO 9001:2015 Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-graphite border border-graphite-border text-xs">
              <ShieldCheck className="w-4 h-4 text-industrial-orange shrink-0" />
              <div>
                <strong className="text-warm-white block font-mono text-[11px]">ISO 9001:2015 Certified</strong>
                <span className="text-[10px] text-muted-gray block">Verified Manufacturing Quality</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-warm-white border-l-2 border-industrial-orange pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-gray font-medium">
              <li>
                <Link to="/" className="hover:text-industrial-orange transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-industrial-orange transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-industrial-orange transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/quality-lab" className="hover:text-industrial-orange transition-colors">
                  Testing Lab & QA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-industrial-orange transition-colors">
                  Contact & RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-warm-white border-l-2 border-industrial-orange pl-2.5">
              Rubber Components
            </h4>
            <ul className="space-y-2 text-xs text-muted-gray">
              {productCategories.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="hover:text-industrial-orange transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-industrial-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Faridabad Factory Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-widest font-bold text-warm-white border-l-2 border-industrial-orange pl-2.5">
              Plant & Office
            </h4>

            <div className="space-y-3 text-xs text-muted-gray">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.contact.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-industrial-orange shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-warm-white font-mono"
                >
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-industrial-orange shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-warm-white"
                >
                  {companyData.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                <span className="font-mono text-[11px] leading-tight">
                  {companyData.contact.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-14 pt-8 border-t border-graphite-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-gray">
          <div>
            © {new Date().getFullYear()} <strong>{companyData.name}</strong>. All rights reserved. Faridabad, Haryana, India.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Founder: {companyData.contact.ownerName}</span>
            <span>•</span>
            <span>Precision Custom Moulding</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
