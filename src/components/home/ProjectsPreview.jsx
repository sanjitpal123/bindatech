import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { projectsData } from '../../data/projectsData';

export default function ProjectsPreview() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-20 bg-slate-950/80 border-y border-slate-900 relative">
      <Container size="lg">
        <SectionHeading
          badge="Featured Engineering Work"
          title="What We"
          titleGradient="Engineer & Build"
          subtitle="Explore selected product engineering highlights across SaaS platforms, mobile applications, and web architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 320, damping: 20 } }}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  {/* Real Product Mockup Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <Badge variant="outline" className="bg-slate-950/80 backdrop-blur-md border-white/20 text-white font-semibold shadow-md">
                      {project.category}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-white/10">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
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

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/projects"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center space-x-2 transition-all group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-emerald-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
