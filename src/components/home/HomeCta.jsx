import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyInfo';

export default function HomeCta() {
  return (
    <section className="py-20 lg:py-28 relative">
      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-emerald-950/60 via-slate-900/90 to-slate-950 border border-emerald-500/30 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          
          {/* Background Radial Orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Have an Idea?{' '}
              <span className="text-gradient-brand bg-clip-text text-transparent">
                Let's Build It.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us what you're building, what problem you're solving, or what you want to improve. Let's turn your idea into a high-performance digital product.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="glow" size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
              <Button href={`tel:${companyInfo.phone}`} variant="secondary" size="lg" icon={false} className="w-full sm:w-auto">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="whitespace-nowrap">Call Us (+91 8944935356)</span>
              </Button>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="pt-10 mt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{companyInfo.formattedPhone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{companyInfo.location}</span>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
