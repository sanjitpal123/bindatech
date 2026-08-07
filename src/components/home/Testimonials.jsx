import React, { useState, useEffect } from 'react';
import { 
  Star, Quote, CheckCircle2, TrendingUp, ChevronLeft, ChevronRight, Shield, Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

const testimonialsData = [
  {
    id: 1,
    name: "Vikram Sengupta",
    role: "Founder & CEO",
    company: "RetailSync SaaS",
    category: "SaaS Platform",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "BindaTech engineered our multi-tenant SaaS inventory platform from scratch. Their architectural clarity, speed of delivery, and clean code exceeded all expectations. We scaled to 15,000+ active store managers with zero downtime.",
    metric: "+320% Revenue Scale",
    deliverable: "Multi-Tenant SaaS App",
    verified: true
  },
  {
    id: 2,
    name: "Ananya Roy",
    role: "Head of Product",
    company: "MedCare Health Tech",
    category: "Mobile Apps",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "The cross-platform React Native app developed by BindaTech is smooth, ultra-fast, and secure. Patients love the live doctor booking and real-time consultation features. Highly recommended for complex mobile products!",
    metric: "4.9★ App Rating",
    deliverable: "Android & iOS Patient App",
    verified: true
  },
  {
    id: 3,
    name: "Rajesh Banerjee",
    role: "Managing Director",
    company: "Apex Logistics & Supply Chain",
    category: "Web Platforms",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "Their team transformed our legacy paper-based tracking system into a real-time cloud dispatch portal. Delivery tracking efficiency improved dramatically across 12 states. True tech partners in Kolkata!",
    metric: "45% Operational Savings",
    deliverable: "Cloud Logistics Portal",
    verified: true
  },
  {
    id: 4,
    name: "Priya Mukherjee",
    role: "Co-Founder",
    company: "EduSphere Learning",
    category: "SaaS Platform",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "BindaTech built our interactive video course and live quiz platform in just 7 weeks. Their team communicated daily during sprint demos and delivered a flawless product ahead of schedule.",
    metric: "50,000+ Students Onboarded",
    deliverable: "EdTech Learning System",
    verified: true
  },
  {
    id: 5,
    name: "Saurav Das",
    role: "Chief Technology Officer",
    company: "FinEdge Wealth Systems",
    category: "Web Platforms",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "BindaTech delivered an ultra-secure financial analytics portal with real-time portfolio tracking. Their attention to encryption, speed optimization, and UI responsiveness is top tier.",
    metric: "99.99% System Uptime",
    deliverable: "Fintech Web Portal",
    verified: true
  },
  {
    id: 6,
    name: "Debolina Ghosh",
    role: "VP of Product",
    company: "OmniChannel Retail",
    category: "Custom CRM",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    quote: "Custom CRM system built by BindaTech streamlined our sales workflow across 3 regional branches. Automated reporting saved our management team 15+ hours weekly.",
    metric: "15hrs Saved / Week",
    deliverable: "Enterprise CRM Platform",
    verified: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const total = testimonialsData.length;

  // Window resize handler for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play horizontal slider every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Helper function to calculate relative offset for 3D Carousel Position
  const getCardStyle = (index) => {
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      // Active Center Focus Card
      return {
        x: '0%',
        scale: 1,
        opacity: 1,
        zIndex: 30,
        rotateY: 0,
        filter: 'blur(0px)',
        pointerEvents: 'auto',
        display: 'block'
      };
    } else if (diff === 1 || (diff === -(total - 1))) {
      // Right Peek Card (Visible on desktop, hidden on mobile for 100% readability)
      return {
        x: isMobile ? '100%' : '65%',
        scale: isMobile ? 0.8 : 0.85,
        opacity: isMobile ? 0 : 0.35,
        zIndex: 10,
        rotateY: -15,
        filter: 'blur(3px)',
        pointerEvents: isMobile ? 'none' : 'auto',
        display: isMobile ? 'none' : 'block'
      };
    } else if (diff === -1 || diff === total - 1) {
      // Left Peek Card (Visible on desktop, hidden on mobile for 100% readability)
      return {
        x: isMobile ? '-100%' : '-65%',
        scale: isMobile ? 0.8 : 0.85,
        opacity: isMobile ? 0 : 0.35,
        zIndex: 10,
        rotateY: 15,
        filter: 'blur(3px)',
        pointerEvents: isMobile ? 'none' : 'auto',
        display: isMobile ? 'none' : 'block'
      };
    } else {
      // Hidden Offscreen Cards
      return {
        x: diff > 0 ? '130%' : '-130%',
        scale: 0.7,
        opacity: 0,
        zIndex: 0,
        rotateY: 0,
        filter: 'blur(6px)',
        pointerEvents: 'none',
        display: 'none'
      };
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-950/90 border-y border-slate-900 relative overflow-hidden">
      
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <SectionHeading
          badge="Client Success & Reviews"
          title="Trusted By Forward-Thinking"
          titleGradient="Founders & Companies"
          subtitle="Discover how our engineering expertise translates into real-world software performance and measurable business growth."
        />

        {/* 3D Perspective Horizontal Slider Box */}
        <div 
          className="relative mt-8 sm:mt-10 max-w-4xl mx-auto px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Top Rating Badge & Controls Header */}
          <div className="flex flex-row items-center justify-between gap-2 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-inner">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] sm:text-xs font-bold text-amber-300 ml-1">5.0 Star Reviews</span>
              </div>
            </div>

            {/* Left & Right Chevrons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-lg active:scale-90 hover:scale-105"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-lg active:scale-90 hover:scale-105"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* 3D Perspective Stage */}
          <div 
            className="relative h-[380px] xs:h-[350px] sm:h-[340px] md:h-[320px] w-full flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            {testimonialsData.map((item, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    x: cardStyle.x,
                    scale: cardStyle.scale,
                    opacity: cardStyle.opacity,
                    zIndex: cardStyle.zIndex,
                    rotateY: cardStyle.rotateY,
                    filter: cardStyle.filter,
                    display: cardStyle.display
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                    mass: 0.8
                  }}
                  style={{ pointerEvents: cardStyle.pointerEvents }}
                  className={`absolute w-full max-w-xl p-5 sm:p-7 md:p-9 rounded-3xl transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/25' 
                      : 'bg-slate-900/90 border border-slate-800'
                  }`}
                >
                  <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-4">
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-3 sm:mb-5 gap-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <Badge 
                          variant="glow" 
                          className={`text-[9px] sm:text-[10px] uppercase font-mono ${
                            isActive ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {item.deliverable}
                        </Badge>
                      </div>

                      {/* Quote Body (Crystal Clear Non-Italic Font) */}
                      <div className="relative my-2 sm:my-3">
                        <Quote className="w-6 h-6 sm:w-10 sm:h-10 text-emerald-500/25 absolute -top-2 -left-1 pointer-events-none" />
                        <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed pl-3 sm:pl-4 relative z-10 font-medium not-italic tracking-normal">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Client Profile Footer */}
                    <div className="pt-3 sm:pt-4 border-t border-slate-800 flex flex-row items-center justify-between gap-2">
                      <div className="flex items-center space-x-2.5 sm:space-x-3.5 min-w-0">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 shadow-md shrink-0 ${
                            isActive ? 'border-emerald-400' : 'border-slate-700'
                          }`}
                        />
                        <div className="min-w-0">
                          <div className="flex items-center space-x-1">
                            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                              {item.name}
                            </h4>
                            {item.verified && (
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                            )}
                          </div>
                          <p className="text-[10px] sm:text-xs text-slate-300 truncate">
                            {item.role} • <span className="text-emerald-300 font-medium">{item.company}</span>
                          </p>
                        </div>
                      </div>

                      <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold flex items-center space-x-1 shrink-0 whitespace-nowrap">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{item.metric}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Progress Bar & Dots */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentIndex === idx
                    ? 'w-8 sm:w-10 bg-emerald-400 shadow-lg shadow-emerald-500/50'
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Global Trust Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">100% Confidentiality & Code Ownership</div>
              <div className="text-[11px] sm:text-xs text-slate-400">We sign strict NDAs and deliver full source code intellectual property to you.</div>
            </div>
          </div>

          <Badge variant="outline" className="text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 border-emerald-500/40 text-emerald-300 whitespace-nowrap">
            NDA Protected Contracts
          </Badge>
        </div>

      </Container>
    </section>
  );
}
