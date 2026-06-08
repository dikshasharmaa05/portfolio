"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Lumina — Brand & Web",
    category: "UI Design / Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    title: "Pulse — Dashboard UI",
    category: "Product Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Orbit — Mobile App",
    category: "UX / Mobile",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "Forge — Dev Portfolio",
    category: "Web Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="px-8 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Check out our<br />awesome showcase!
          </h2>
          <button className="w-fit px-6 py-2.5 border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">
            View all Cases
          </button>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-all cursor-pointer"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{project.title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{project.category} · {project.year}</p>
                </div>
                <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
