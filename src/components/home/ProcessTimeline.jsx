import React, { useState } from 'react';
import { 
  Search, Compass, Palette, Code, ShieldCheck, Rocket, TrendingUp, CheckCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { processSteps } from '../../data/processData';

const iconMap = {
  Search: Search,
  Compass: Compass,
  Palette: Palette,
  Code: Code,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
  TrendingUp: TrendingUp
};

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="Structured Roadmap"
          title="From Concept to"
          titleGradient="Market Launch"
          subtitle="Our 7-step engineering process guarantees clarity, transparency, and high quality at every phase."
        />

        {/* Step Selector Pills for Desktop */}
        <div className="hidden lg:flex items-center justify-between mb-16 p-2 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative flex-1 py-3 px-2 rounded-xl text-xs font-bold transition-colors flex flex-col items-center space-y-1.5 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcessPill"
                    className="absolute inset-0 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 opacity-80">{step.number}</span>
                <span className="relative z-10 truncate max-w-[90px]">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl sm:text-5xl font-black font-mono text-gradient-brand">
                    {processSteps[activeStep].number}
                  </span>
                  <div className="h-8 w-px bg-slate-800" />
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {processSteps[activeStep].title} Phase
                  </span>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {processSteps[activeStep].description}
                </p>

                <div className="pt-4 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Clear Milestone Deliverables & Sprint Reviews</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-sm">
                  {(() => {
                    const Icon = iconMap[processSteps[activeStep].icon] || Code;
                    return <Icon className="w-14 h-14 sm:w-16 sm:h-16 animate-pulse" />;
                  })()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All 7 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;
            const isCurrent = activeStep === index;

            return (
              <motion.div
                key={step.number}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`p-5 rounded-2xl border cursor-pointer transition-colors flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {step.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h4>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 line-clamp-2">
                  {step.description}
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
