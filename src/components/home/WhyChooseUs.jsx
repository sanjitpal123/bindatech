import React from 'react';
import { 
  Target, Code2, Layers3, FileCheck, MessageSquareCheck, Handshake 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const whyUsData = [
  {
    title: "Business-Focused Development",
    desc: "We focus on solving real business problems and increasing revenue, not just writing isolated lines of code.",
    icon: Target,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Modern Technology Stack",
    desc: "We build on battle-tested frameworks like React, React Native, Node.js, and Cloud APIs for high speed and longevity.",
    icon: Code2,
    color: "from-cyan-500 to-emerald-600"
  },
  {
    title: "Scalable Cloud Architecture",
    desc: "Applications are engineered from day one to handle user growth, multi-tenancy, and peak server loads gracefully.",
    icon: Layers3,
    color: "from-purple-500 to-emerald-600"
  },
  {
    title: "Clean & Maintainable Code",
    desc: "We follow strict engineering principles, component reuse, and clean folder structures for frictionless handovers.",
    icon: FileCheck,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Transparent Communication",
    desc: "Direct communication with engineering leads, regular sprint demos, and real-time project milestone tracking.",
    icon: MessageSquareCheck,
    color: "from-amber-500 to-rose-600"
  },
  {
    title: "Long-Term Engineering Partner",
    desc: "We provide post-launch optimization, continuous updates, and scaling support as your digital product expands.",
    icon: Handshake,
    color: "from-teal-500 to-emerald-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950/80 border-y border-slate-900 relative">
      <Container size="lg">
        <SectionHeading
          badge="Why BindaTech"
          title="Why Forward-Thinking Businesses"
          titleGradient="Choose BindaTech"
          subtitle="We bridge technical complexity and business strategy to craft software products that deliver real-world ROI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm group shadow-lg"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-0.5 mb-6 shadow-lg`}>
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
