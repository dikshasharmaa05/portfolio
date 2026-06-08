"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "UI/UX Design", "React", "Next.js", "TypeScript",
  "Tailwind CSS", "Figma", "Node.js", "Framer Motion",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left col */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4">About me</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Turning ideas into{" "}
            <span className="text-white/30">pixel-perfect</span>{" "}
            reality
          </h2>
          <p className="text-white/50 leading-relaxed mb-4">
            Hi, I&apos;m Diksha — a designer and developer with a passion for creating
            clean, intuitive interfaces backed by solid code. I bridge the gap
            between design and engineering so products feel as good as they look.
          </p>
          <p className="text-white/50 leading-relaxed">
            When I&apos;m not pushing pixels or writing code, you&apos;ll find me exploring
            design trends, contributing to open source, or sketching the next idea
            in my notebook.
          </p>
        </motion.div>

        {/* Right col — skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-xs tracking-widest uppercase text-white/30 mb-6">Skills & tools</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="text-sm px-4 py-2 border border-white/10 rounded-full text-white/60 hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Experience blurb */}
          <div className="mt-10 p-6 border border-white/8 rounded-2xl bg-white/[0.02]">
            <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Currently</p>
            <p className="font-medium">Freelance Designer &amp; Developer</p>
            <p className="text-sm text-white/40 mt-1">Building products for startups &amp; agencies worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
