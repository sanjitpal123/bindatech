import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, ShieldCheck, Zap, Sparkles, Smartphone, Server, Users, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import HeroBackground from './HeroBackground';
import { companyInfo } from '../../data/companyInfo';
import heroTeamImg from '../../assets/hero_team.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-8 sm:pt-16 pb-20 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated & Attractive Hero Background */}
      <HeroBackground />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Animated Text & CTAs */}
          <motion.div 
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/15 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Software Engineering & SaaS Product Studio</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              We Build Digital Products That{' '}
              <span className="text-gradient-brand bg-clip-text text-transparent inline-block">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {companyInfo.heroSubheadline}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button to="/contact" variant="glow" size="lg" className="w-full sm:w-auto shadow-glow-md hover:scale-105 transition-transform">
                {companyInfo.ctaPrimary}
              </Button>
              <Button href={`tel:${companyInfo.phone}`} variant="secondary" size="lg" icon={false} className="w-full sm:w-auto hover:bg-slate-800 transition-colors border-emerald-500/30 text-emerald-300">
                <span className="relative flex h-2.5 w-2.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Talk to Engineers</span>
              </Button>
            </motion.div>

            {/* Value Indicators */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Scalable Code</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <Zap className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <Code className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Clean Architecture</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: High Impact Team & Digital Studio Showcase */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* 1. Rotating Conic Cyber Aura Ring Animation */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-lime-400 opacity-60 blur-xl animate-[spin_12s_linear_infinite] pointer-events-none" />

              {/* 2. Floating Cyber Tech Badge 1 (Top Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-4 z-20 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-emerald-400/50 text-emerald-300 text-xs font-mono font-bold shadow-lg shadow-emerald-500/25 backdrop-blur-md flex items-center space-x-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Production Launch v3.4</span>
              </motion.div>

              {/* 3. Floating Cyber Tech Badge 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-4 z-20 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-teal-400/50 text-teal-300 text-xs font-mono font-bold shadow-lg shadow-teal-500/25 backdrop-blur-md flex items-center space-x-2"
              >
                <Zap className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
                <span>99.99% High Performance</span>
              </motion.div>

              {/* 4. Main Glass Frame Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden group">
                
                {/* Futuristic HUD Corner Brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400/80 rounded-tl-md z-20 pointer-events-none" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-teal-400/80 rounded-tr-md z-20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-teal-400/80 rounded-bl-md z-20 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-lime-400/80 rounded-br-md z-20 pointer-events-none" />

                {/* Team Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={heroTeamImg} 
                    alt="BindaTech Engineering & Product Team" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Holographic Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-400/10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
                </div>

                {/* Floating Glassmorphism Badges overlaying the image */}
                {/* Top Badge: Active Engineering Team */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-4 left-4 sm:top-5 sm:left-5 backdrop-blur-xl bg-slate-900/85 border border-white/20 px-3.5 py-2 rounded-2xl shadow-xl flex items-center space-x-2.5 z-10"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">Expert Tech Team</span>
                    <span className="text-[10px] text-slate-300">Engineers & Designers</span>
                  </div>
                </motion.div>

                {/* Bottom Floating Stats Bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 backdrop-blur-xl bg-slate-900/85 border border-white/20 p-3.5 sm:p-4 rounded-2xl shadow-2xl z-10">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <div className="flex items-center space-x-3 border-r border-slate-700/80 pr-2">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-white">100% In-House</div>
                        <div className="text-[11px] text-slate-300">Dedicated Squads</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 pl-1">
                      <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-white">Top Tech Talent</div>
                        <div className="text-[11px] text-slate-300">Web, Mobile & SaaS</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
