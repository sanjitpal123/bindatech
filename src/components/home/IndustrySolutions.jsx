import React from 'react';
import { 
  ShoppingBag, HeartPulse, GraduationCap, BadgeIndianRupee, Truck, Layers 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { solutionsData } from '../../data/solutionsData';

const solutionIcons = {
  ShoppingBag: ShoppingBag,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
  BadgeIndianRupee: BadgeIndianRupee,
  Truck: Truck,
  Layers: Layers
};

export default function IndustrySolutions() {
  return (
    <section className="py-20 bg-slate-950/60 border-y border-slate-900 relative">
      <Container size="lg">
        <SectionHeading
          badge="Industry Expertise"
          title="Digital Solutions We"
          titleGradient="Engineer & Build"
          subtitle="We tailor digital architectures to match the operational and regulatory requirements of specific industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((item, index) => {
            const Icon = solutionIcons[item.icon] || Layers;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm group shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {item.highlights.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
