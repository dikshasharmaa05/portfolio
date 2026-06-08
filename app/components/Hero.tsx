"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { label: "Sketch",    icon: "💎" },
  { label: "Framer",    icon: "🖼" },
  { label: "Figma",     icon: "🎨" },
  { label: "Webflow",   icon: "🌐" },
  { label: "After Fx",  icon: "🎬" },
];

export default function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#111] rounded-3xl overflow-hidden min-h-[560px] flex flex-col justify-between p-8 md:p-12"
      >
        {/* ── Top-left: greeting + heading + button ── */}
        <div className="flex items-start justify-between z-10">
          <div className="flex flex-col gap-5 max-w-[420px]">
            <span className="text-[#CCFF00] font-medium text-base">Hey 👋 I&apos;m Diksha</span>
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

          {/* ── Top-right: Experienced in panel ── */}
          <div className="hidden md:flex flex-col gap-3 bg-[#1e1e1e] rounded-2xl p-4">
            <p className="text-xs text-gray-400">Experienced in</p>
            <div className="grid grid-cols-3 gap-2">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  title={tool.label}
                  className="w-11 h-11 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-lg"
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Center photo cutout ── */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div
            className="relative w-64 md:w-80 h-[480px]"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 90% at 50% 100%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 90% at 50% 100%, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/diksha.jpg"
              alt="Diksha Sharma"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* ── Bottom: bio + stats ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 z-10 mt-auto pt-40">
          <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">
            Designer and developer crafting beautiful digital experiences.
          </p>
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
