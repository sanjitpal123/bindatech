import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Globe, Layout, Server, Cpu, Palette, CheckCircle2, ArrowRight, Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import MetaTags from '../components/common/MetaTags';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import HomeCta from '../components/home/HomeCta';
import { servicesData } from '../data/servicesData';

const serviceIcons = {
  Smartphone: Smartphone,
  Globe: Globe,
  Layout: Layout,
  Server: Server,
  Cpu: Cpu,
  Palette: Palette
};

export default function Services() {
  return (
    <>
      <MetaTags
        title="Software & SaaS Services | BindaTech"
        description="Comprehensive software development services including mobile apps (Android/iOS), web applications, websites, SaaS platforms, and custom software in Kolkata."
      />

      {/* Services Hero Header */}
      <section className="py-12 lg:py-20 relative">
        <Container size="lg">
          <SectionHeading
            badge="Engineering Capabilities"
            title="Complete Digital Product"
            titleGradient="Development Services"
            subtitle="We partner with businesses to turn complex technical challenges into scalable, robust, and intuitive digital applications."
          />
        </Container>
      </section>

      {/* Detailed Service Cards Breakdown */}
      <section className="py-8 pb-20 relative">
        <Container size="lg" className="space-y-16">
          {servicesData.map((service, index) => {
            const IconComponent = serviceIcons[service.icon] || Globe;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Info Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <Badge variant="primary">{service.badge}</Badge>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                        Technical Capabilities & Inclusions
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button to="/contact" variant="primary" size="md">
                        Start {service.title} Project
                      </Button>
                    </div>
                  </div>

                  {/* Right Details Box */}
                  <div className="lg:col-span-5 space-y-6 bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-800 overflow-hidden">

                    {/* Service Image Banner */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                        Common Industry Use Cases
                      </h4>
                      <div className="space-y-1.5 text-xs text-slate-400">
                        {service.useCases.map((uc, idx) => (
                          <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800/60">
                            {uc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </Container>
      </section>

      <HomeCta />
    </>
  );
}
