import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/918810422099?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20rubber%20and%20plastic%20components.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip on desktop hover */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={isHovered ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="hidden md:flex items-center mr-3 px-3.5 py-2 rounded-xl bg-graphite border border-graphite-border shadow-2xl text-xs font-medium text-warm-white pointer-events-none whitespace-nowrap"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        Chat with Upadhyay Rubber on WhatsApp
      </motion.div>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Upadhyay Rubber Industry on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        {/* Authentic Official WhatsApp Icon (White on Green) */}
        <svg
          className="w-8 h-8 fill-white relative z-10 drop-shadow-sm"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
        </svg>
      </motion.a>
    </div>
  );
}
