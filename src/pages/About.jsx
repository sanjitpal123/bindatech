import React from 'react';
import {
  ShieldCheck, Cpu, Code2, Layers, Award, CheckCircle, MapPin, Users,
  HeartHandshake, Compass, Rocket, Flame, Target, Sparkles, Lightbulb, Trophy, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import MetaTags from '../components/common/MetaTags';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import HomeCta from '../components/home/HomeCta';
import heroTeamImg from '../assets/hero_team.png';

const motivationalPillars = [
  {
    icon: Flame,
    title: "Relentless Engineering Passion",
    badge: "Our Spark",
    description: "We are fueled by a obsession for clean code, elegant architecture, and solving hard technical challenges that others shy away from.",
    color: "from-amber-500/20 to-emerald-500/20",
    border: "border-amber-500/30",
    textGradient: "from-amber-300 via-emerald-300 to-teal-200"
  },
  {
    icon: Target,
    title: "Uncompromising Vision for Excellence",
    badge: "Our Promise",
    description: "We don't settle for mediocre off-the-shelf software. We engineer custom digital products built to scale seamlessly, perform flawlessly, and win market leadership.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    textGradient: "from-emerald-300 via-teal-300 to-cyan-200"
  },
  {
    icon: Rocket,
    title: "Empowering Founder Ambitions",
    badge: "Our Mission",
    description: "Your success is our single metric of performance. We transform complex ideas into market-ready SaaS, mobile apps, and enterprise systems that drive massive ROI.",
    color: "from-cyan-500/20 to-emerald-500/20",
    border: "border-cyan-500/30",
    textGradient: "from-cyan-300 via-emerald-300 to-lime-200"
  }
];

const coreValues = [
  {
    title: "Craftsmanship Over Shortcuts",
    description: "Every architectural decision, database query, and UI component is crafted with pride, precision, and zero technical debt.",
    icon: Code2
  },
  {
    title: "Empowerment Through Tech",
    description: "Technology is the ultimate multiplier. We build tools that unlock potential, streamline workflows, and amplify business growth.",
    icon: Lightbulb
  },
  {
    title: "Future-Proof Architecture",
    description: "We engineer systems designed to handle 10x traffic growth, high security standards, and seamless continuous integration from day one.",
    icon: Layers
  },
  {
    title: "Unshakeable Integrity",
    description: "Complete transparency, strict NDAs, total IP ownership transfer, and clear honest communication at every milestone.",
    icon: HeartHandshake
  }
];

const achievements = [
  { number: "100%", label: "In-House Engineering", sub: "No Outsourcing" },
  { number: "99.99%", label: "Architecture Uptime", sub: "Cloud-Grade Reliability" },
  { number: "15+", label: "Industry Sectors Served", sub: "SaaS, Mobile & Web" },
  { number: "24/7", label: "Dedicated Support", sub: "Production Protection" }
];

export default function About() {
  return (
    <>
      <MetaTags
        title="About BindaTech | Driven by Innovation, Built for Impact"
        description="Learn about BindaTech's mission, engineering philosophy, and dedicated team in Kolkata. We build high-performance SaaS, mobile apps, and custom software systems."
      />

      {/* Motivational Hero Header */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Aura Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-lg">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              <span>Engineered in Kolkata • Scaled Globally</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Driven by Innovation, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
                Defined by Exceptional Impact
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              We are a team of passionate software engineers, product thinkers, and system architects dedicated to turning bold visions into world-class digital realities.
            </p>
          </motion.div>

          {/* Motivational Achievement Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-xl shadow-xl text-center group transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-emerald-300 transition-colors">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  {item.sub}
                </div>
              </div>
            ))}
          </motion.div>

        </Container>
      </section>

      {/* Motivational Pillars Section */}
      <section className="py-16 relative">
        <Container size="lg">
          <SectionHeading
            badge="Why We Exist"
            title="The Core Engine Behind"
            titleGradient="Everything We Build"
            subtitle="We don't just write code — we build digital foundations that empower visionaries, transform legacy workflows, and drive real business growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {motivationalPillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-3xl bg-slate-900/90 border ${pillar.border} hover:border-emerald-400 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all`}
                >
                  {/* Subtle Background Radial Gradient */}
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${pillar.color} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

                  <div>
                    {/* Top Header Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-emerald-400 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <Badge variant="glow" className="text-[10px] uppercase font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-300">
                        {pillar.badge}
                      </Badge>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-extrabold text-white mb-3 bg-gradient-to-r ${pillar.textGradient} bg-clip-text text-transparent`}>
                      {pillar.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-white transition-colors">
                    <span>Engineered for Success</span>
                    <Trophy className="w-4 h-4 text-emerald-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Main Philosophy & Team Showcase Grid */}
      <section className="py-16 relative">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kolkata Studio Headquarters</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Building Software That Moves Visionaries Forward
              </h2>

              <p className="text-slate-300 leading-relaxed text-base">
                In today's fast-evolving digital landscape, off-the-shelf templates and hasty code aren't enough for ambitious companies. BindaTech was established to bridge the gap between business vision and production-grade software execution.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you need a high-performance native mobile application, a modern enterprise web portal, or a multi-tenant subscription SaaS platform, our engineering squad brings disciplined craftsmanship to every sprint demo and production release.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-white">Full-Cycle Mastery</div>
                  <div className="text-xs text-slate-400 mt-1">From UX Design to Cloud Architecture</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-white">Dedicated Growth</div>
                  <div className="text-xs text-slate-400 mt-1">Long-Term Maintenance & Scale</div>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="lg">
                  Start Your Project Today
                </Button>
              </div>
            </div>

            {/* Right Team Studio Visual Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden group p-2">

                {/* Team Studio Photo Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img
                    src={heroTeamImg}
                    alt="BindaTech Engineering Team Studio"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85" />

                  {/* Floating Team Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-white">100% In-House Squad</div>
                        <div className="text-[11px] text-slate-400">Engineers, UI Designers & QA</div>
                      </div>
                    </div>

                    <Badge variant="glow" className="text-xs">
                      Kolkata, WB
                    </Badge>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Core Values Section */}
          <div className="pt-20">
            <SectionHeading
              badge="Our Core Values"
              title="Principles That Drive Our"
              titleGradient="Engineering Culture"
              subtitle="The non-negotiable standards that shape our work ethic, code quality, and client relationships every single day."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all backdrop-blur-sm group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </Container>
      </section>

      <HomeCta />
    </>
  );
}
