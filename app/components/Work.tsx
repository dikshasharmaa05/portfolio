"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Lumina — Brand & Web",
    category: "UI Design / Development",
    description:
      "Full brand identity and marketing site for a SaaS analytics platform. Focused on clarity and conversion.",
    tags: ["Next.js", "Figma", "Tailwind"],
    color: "from-indigo-900/30 to-violet-900/10",
    year: "2024",
  },
  {
    number: "02",
    title: "Pulse — Dashboard UI",
    category: "Product Design",
    description:
      "Data-heavy admin dashboard redesign for a fintech startup — improved task completion by 40%.",
    tags: ["React", "TypeScript", "Framer"],
    color: "from-emerald-900/20 to-teal-900/10",
    year: "2024",
  },
  {
    number: "03",
    title: "Orbit — Mobile App",
    category: "UX / Mobile",
    description:
      "Habit tracking app with a focus on calm UX and delightful micro-interactions. Designed & prototyped in Figma.",
    tags: ["Figma", "Prototyping", "iOS"],
    color: "from-rose-900/20 to-pink-900/10",
    year: "2023",
  },
  {
    number: "04",
    title: "Forge — Dev Portfolio",
    category: "Web Development",
    description:
      "Custom portfolio site for a senior engineer. High performance, animated, and fully accessible.",
    tags: ["Next.js", "GSAP", "Vercel"],
    color: "from-amber-900/20 to-orange-900/10",
    year: "2023",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Selected work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            A curated selection of recent client work and personal projects.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  parentInView,
}: {
  project: (typeof projects)[0];
  index: number;
  parentInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative border border-white/8 rounded-2xl p-6 md:p-8 bg-gradient-to-br ${project.color} hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Number + meta */}
        <div className="flex-shrink-0 w-12">
          <span className="text-xs text-white/20 font-mono">{project.number}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-0.5">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-white/45 leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-white/35 bg-white/5 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year + arrow */}
        <div className="flex-shrink-0 flex flex-col items-end gap-3">
          <span className="text-xs text-white/25 font-mono">{project.year}</span>
          <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-200">
            <ArrowUpRight size={14} className="group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
