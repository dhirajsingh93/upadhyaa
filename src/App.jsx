import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import QualityLab from './pages/QualityLab';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/quality-lab"
          element={
            <PageTransition>
              <QualityLab />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        {/* Fallback route */}
        <Route
          path="*"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-charcoal text-warm-white selection:bg-industrial-orange selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
