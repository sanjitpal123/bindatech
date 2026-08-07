import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../common/ParticleBackground';
import QuickContactFab from '../common/QuickContactFab';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top automatically on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-brand-dark overflow-x-hidden text-brand-body">
      {/* Ambient background particles & grid */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Body with Smooth Route Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow pt-24 pb-16 relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Consultation Action */}
      <QuickContactFab />
    </div>
  );
}
