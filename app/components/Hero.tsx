"use client";

import { motion } from "framer-motion";

const tools = [
  { label: "Sketch",     bg: "bg-orange-100", icon: "💎" },
  { label: "Framer",     bg: "bg-purple-100", icon: "🖼" },
  { label: "Figma",      bg: "bg-pink-100",   icon: "🎨" },
  { label: "Webflow",    bg: "bg-blue-100",   icon: "🌐" },
  { label: "After Fx",   bg: "bg-indigo-100", icon: "🎬" },
];

export default function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 pb-6">
      {/* Dark hero card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden min-h-[580px] flex flex-col justify-between p-8 md:p-12"
      >
        {/* Top row: greeting + tools */}
        <div className="flex items-start justify-between">
          {/* Left: greeting + heading + button */}
          <div className="flex flex-col gap-6 z-10 max-w-[480px]">
            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00] font-medium text-base">Hey 👋 I&apos;m Diksha</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Designer &amp;<br />Developer
            </h1>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-fit px-8 py-3.5 bg-[#CCFF00] text-black font-semibold rounded-full hover:bg-[#b8f000] transition-all text-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Right: tools grid */}
          <div className="hidden md:grid grid-cols-3 gap-2 z-10">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center text-xl`}
                title={tool.label}
              >
                {tool.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Center photo — absolutely positioned */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 md:w-80 h-full flex items-end justify-center">
            {/* Placeholder silhouette — replace src with your photo */}
            <div className="w-56 md:w-72 h-[420px] bg-gradient-to-t from-[#2a2a2a] to-[#444] rounded-t-full flex items-end justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#333] to-[#1a1a1a] flex items-center justify-center">
                <span className="text-6xl opacity-20">👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: bio + stats */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 z-10 mt-auto pt-32">
          {/* Bio */}
          <p className="text-gray-400 text-sm max-w-[220px] leading-relaxed">
            Lead product designer and developer crafting beautiful digital experiences.
          </p>

          {/* Stats */}
          <div className="flex gap-10">
            {[
              { value: "3+",  label: "Years of experience" },
              { value: "20+", label: "Happy clients" },
              { value: "50+", label: "Projects done" },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-gray-600 pt-3">
                <p className="text-white text-3xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
