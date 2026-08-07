import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Sparkles, Zap, Globe, Database, Terminal, Layers } from 'lucide-react';

const floatingIcons = [
  { Icon: Code, top: '15%', left: '8%', color: 'text-emerald-400', size: 24, delay: 0 },
  { Icon: Sparkles, top: '22%', right: '12%', color: 'text-teal-400', size: 20, delay: 1.2 },
  { Icon: Cpu, top: '65%', left: '5%', color: 'text-lime-400', size: 22, delay: 2.5 },
  { Icon: Zap, top: '75%', right: '8%', color: 'text-emerald-400', size: 20, delay: 0.8 },
  { Icon: Globe, top: '10%', left: '45%', color: 'text-cyan-400', size: 18, delay: 1.8 },
  { Icon: Database, top: '80%', left: '40%', color: 'text-teal-300', size: 22, delay: 3.1 },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 1. Cyber Grid Overlay with Radial Vignette */}
      <div 
        className="absolute inset-0 hero-grid-pattern opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)'
        }}
      />

      {/* 2. Scanning Laser Light Beam */}
      <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-emerald-500/15 to-transparent blur-md animate-laser-scan" />

      {/* 3. Floating Mesh Gradient Orbs */}
      {/* Top Left Emerald Glow Orb */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 20, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-600/30 via-teal-600/20 to-transparent rounded-full blur-[140px]"
      />

      {/* Top Right Teal & Lime Glow Orb */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/25 via-emerald-600/20 to-lime-600/10 rounded-full blur-[150px]"
      />

      {/* Bottom Center Lime & Teal Glow Orb */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute -bottom-20 left-1/3 w-[500px] h-[450px] bg-gradient-to-t from-emerald-600/25 via-teal-500/15 to-transparent rounded-full blur-[130px]"
      />

      {/* 4. Floating Ambient Tech Icons */}
      {floatingIcons.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 6 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay
            }}
            className={`p-3 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-xl ${item.color} hidden sm:flex items-center justify-center`}
          >
            <Icon size={item.size} />
          </motion.div>
        );
      })}

      {/* 5. Subtle Sparkling Star Particles */}
      {[
        { top: '18%', left: '25%', delay: 0 },
        { top: '35%', left: '75%', delay: 1.5 },
        { top: '60%', left: '18%', delay: 0.8 },
        { top: '82%', left: '80%', delay: 2.2 },
        { top: '45%', left: '50%', delay: 1.1 }
      ].map((star, i) => (
        <motion.div
          key={i}
          style={{ top: star.top, left: star.left }}
          animate={{
            scale: [0.6, 1.4, 0.6],
            opacity: [0.1, 0.9, 0.1]
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow-sm"
        />
      ))}

      {/* Bottom Fade Gradient for Smooth Transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070A0F] to-transparent" />
    </div>
  );
}
