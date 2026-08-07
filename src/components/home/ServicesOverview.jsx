import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Globe, Layout, Server, Cpu, Palette, ArrowRight, CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { servicesData } from '../../data/servicesData';

const serviceIcons = {
  Smartphone: Smartphone,
  Globe: Globe,
  Layout: Layout,
  Server: Server,
  Cpu: Cpu,
  Palette: Palette
};

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 relative">
      <Container size="lg">
        <SectionHeading
          badge="Our Core Expertise"
          title="Everything You Need to Build &"
          titleGradient="Scale Digital Products"
          subtitle="From early architecture planning to long-term cloud deployment, we deliver high-performance software tailored to real business goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = serviceIcons[service.icon] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
                className="group relative rounded-3xl bg-slate-950/90 border border-slate-800/80 hover:border-emerald-400/60 transition-all duration-500 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/15"
              >
                <div>
                  {/* Card Image Header Showcase */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden p-3 pb-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient depth overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                      <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />

                      {/* Top Overlay Badge & Icon */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <div className="w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-emerald-400 shadow-lg">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <Badge variant="primary" className="bg-slate-950/85 backdrop-blur-md border-emerald-400/40 text-emerald-300 shadow-md">
                          {service.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 pt-5">
                    <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-lime-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer with Arrow Pill */}
                <div className="p-6 pt-0 pb-6 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="w-full py-3 px-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-all group/btn shadow-md"
                  >
                    <span>Explore Expertise Details</span>
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 group-hover/btn:bg-emerald-500 group-hover/btn:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
