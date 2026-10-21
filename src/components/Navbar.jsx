import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

import brandLogo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About & Leadership", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Testing Lab & Quality", path: "/quality-lab" },
    { name: "Contact & Quote", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-graphite-border shadow-xl shadow-black/30 py-2.5"
            : "bg-charcoal border-b border-graphite-border/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group" aria-label="Upadhyay Rubber Industry home">
            <div className="relative h-12 w-24 shrink-0 overflow-hidden rounded-lg bg-black group-hover:scale-105 transition-transform">
              <img
                src={brandLogo}
                alt=""
                aria-hidden="true"
                className="absolute -top-[22px] left-0 h-24 w-24 max-w-none object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-industrial-orange" : "text-warm-white/80 hover:text-warm-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-industrial-orange"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Phone + Quote CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-mono text-muted-gray hover:text-warm-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-orange" />
              <span>{companyData.contact.phone}</span>
            </a>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-industrial-orange hover:bg-industrial-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-industrial-orange/20 flex items-center gap-1.5"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-md bg-industrial-orange text-white text-[11px] font-bold uppercase tracking-wider"
            >
              Quote
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-graphite border border-graphite-border text-warm-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[65px] z-30 bg-charcoal border-b border-graphite-border shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-graphite text-industrial-orange border border-industrial-orange/40 font-bold"
                          : "text-warm-white/90 hover:bg-graphite hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-industrial-orange" />}
                    </NavLink>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-graphite-border flex flex-col gap-3">
                <a
                  href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-graphite text-xs font-mono text-warm-white"
                >
                  <Phone className="w-4 h-4 text-industrial-orange" />
                  <span>Call: {companyData.contact.phone}</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-industrial-orange text-white text-center text-xs font-bold uppercase tracking-wider"
                >
                  Request a Formal Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
