"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Availability badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          Creative Designer
          <br />
          <span className="text-white/25">&</span>{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Sub line */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed mb-12"
        >
          I&apos;m Diksha Sharma — I craft digital experiences that blend
          aesthetic precision with purposeful engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200"
          >
            View my work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 border border-white/15 text-white/70 text-sm rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-20 flex flex-wrap gap-10 border-t border-white/5 pt-10"
        >
          {[
            { value: "3+", label: "Years experience" },
            { value: "20+", label: "Projects delivered" },
            { value: "15+", label: "Happy clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-white/40 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
