import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Sparkles, X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../../data/companyInfo';

export default function QuickContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Expanded Quick Action Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 22 }}
            className="mb-4 w-72 sm:w-80 p-5 rounded-3xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur-2xl text-white space-y-4 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Online & Accepting Projects
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-1">Have a Product Idea?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our engineering leads in Kolkata for an instant proposal and tech consultation.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-xs font-bold text-white flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Instant Project Quote</span>
              </Link>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white flex flex-row items-center justify-center gap-2 flex-nowrap whitespace-nowrap transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 inline-block align-middle" />
                <span className="whitespace-nowrap inline-block align-middle">Call Us (+91 8944935356)</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>100% Free Consultation</span>
              </div>
              <span className="font-mono text-emerald-300">BindaTech</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative group p-1 rounded-full flex items-center justify-center shadow-2xl focus:outline-none"
        aria-label="Talk to Engineers"
      >
        {/* 1. Subtle, Minimal Outer Aura Glow */}
        <div className="absolute -inset-0.5 rounded-full bg-emerald-500/30 blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

        {/* 2. Main Glass Button Pill */}
        <div className="relative px-4 sm:px-5 py-2.5 rounded-full bg-slate-950 border border-slate-800 hover:border-emerald-500/50 flex items-center space-x-3 backdrop-blur-xl shadow-md overflow-hidden transition-colors">
          
          {/* Internal Shimmer Sweep Layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/40 via-teal-500/40 to-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />

          {/* Active Status Ping Indicator */}
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-slate-950"></span>
          </span>

          {/* Animated Icon */}
          <div className="relative z-10 p-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 group-hover:scale-110 transition-transform">
            {isOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <MessageSquare className="w-4 h-4 text-emerald-300 animate-bounce" />
            )}
          </div>

          {/* Button Text */}
          <span className="relative z-10 font-extrabold text-xs sm:text-sm text-white tracking-wide whitespace-nowrap">
            {isOpen ? 'Close' : 'Talk to Engineers'}
          </span>

          {/* Arrow / Sparkle Accent */}
          {!isOpen && (
            <div className="relative z-10 p-1 rounded-full bg-white/10 group-hover:bg-emerald-500/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
          )}

        </div>
      </motion.button>

    </div>
  );
}
