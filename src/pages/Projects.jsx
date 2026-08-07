import React, { useState } from 'react';
import { Code2, ArrowRight, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MetaTags from '../components/common/MetaTags';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import HomeCta from '../components/home/HomeCta';
import { projectsData, projectCategories } from '../data/projectsData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <>
      <MetaTags
        title="Software & App Portfolio | BindaTech"
        description="Explore BindaTech's software project portfolio across SaaS applications, mobile solutions, web platforms, and custom software systems."
      />

      {/* Projects Hero Header */}
      <section className="py-12 lg:py-20 relative">
        <Container size="lg">
          <SectionHeading
            badge="Engineering Portfolio"
            title="Digital Products & Systems"
            titleGradient="We Have Engineered"
            subtitle="Discover how we help businesses transform complex software requirements into scalable digital products."
          />

          {/* Category Filter Tabs with Layout Animations */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-emerald-600 rounded-full shadow-lg shadow-emerald-500/25 border border-emerald-400/40"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Filtered Projects Grid with AnimatePresence */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  key={project.id}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors backdrop-blur-sm overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Top visual mock image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <Badge variant="outline" className="bg-slate-950/80 backdrop-blur-md border-white/20 text-white font-semibold shadow-md">
                          {project.category}
                        </Badge>
                        <div className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-white/10">
                          <Code2 className="w-4 h-4" />
                        </div>
                      </div>

                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-[11px] font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Modal Action */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center space-x-2 transition-all"
                    >
                      <span>View Architecture Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </Container>
      </section>

      {/* Project Specs Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto z-10"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="primary">{selectedProject.category}</Badge>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Project Image Banner inside Modal */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.fullDesc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    System Architecture & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <Button onClick={() => setSelectedProject(null)} variant="secondary" size="sm" icon={false}>
                  Close Overview
                </Button>
                <Button to="/contact" variant="primary" size="sm">
                  Discuss Similar Project
                </Button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <HomeCta />
    </>
  );
}
