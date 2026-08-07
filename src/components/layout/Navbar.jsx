import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '../../data/navigationData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <Container size="lg">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links with Animated Sliding Pill */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/70 p-1.5 rounded-full border border-white/15 backdrop-blur-xl shadow-xl">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 select-none"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavTab"
                          className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-500/35 border border-emerald-400/30"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          isActive ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative group"
              >
                <Link
                  to="/contact"
                  className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/40 flex items-center space-x-2.5 overflow-hidden shadow-lg shadow-emerald-500/25"
                >
                  {/* Sparkle Icon */}
                  <Sparkles className="relative z-10 w-4 h-4 text-white" />

                  {/* Button Text */}
                  <span className="relative z-10 font-extrabold text-sm text-white tracking-wide">
                    Start Your Project
                  </span>

                  {/* Arrow Badge */}
                  <div className="relative z-10 p-1 rounded-full bg-white/15 backdrop-blur-md group-hover:bg-white/25 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger Button with Framer Motion scale */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-2xl bg-slate-900/90 text-slate-200 border border-emerald-500/40 hover:border-emerald-400/70 shadow-lg shadow-emerald-500/15 focus:outline-none backdrop-blur-md flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-emerald-400" />
            </motion.button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
