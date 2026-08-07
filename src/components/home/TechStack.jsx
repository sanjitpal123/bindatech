import React from 'react';
import { 
  Code, Smartphone, Server, Database, Cloud, 
  Layers, Lock, Cpu, Globe, CpuIcon
} from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { technologiesData } from '../../data/technologiesData';

const iconMap = {
  Smartphone: Smartphone,
  Code: Code,
  FileCode: Code,
  Layout: Globe,
  Server: Server,
  Cpu: Cpu,
  Network: Layers,
  Cloud: Cloud,
  Database: Database,
  CreditCard: Layers,
  Lock: Lock,
  Layers: Layers
};

export default function TechStack() {
  return (
    <section className="py-16 bg-slate-950/60 border-y border-slate-900 relative">
      <Container size="lg">
        <SectionHeading
          badge="Core Tech Stack"
          title="Technologies That Power"
          titleGradient="Modern Businesses"
          subtitle="We leverage proven, high-performance technology stacks to build maintainable applications designed to scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologiesData.map((techGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm group"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-slate-800">
                {techGroup.category}
              </h3>

              <div className="space-y-3">
                {techGroup.items.map((item, idx) => {
                  const IconComponent = iconMap[item.iconName] || Code;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/50 group-hover:border-slate-700/60 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
