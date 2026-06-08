"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { label: "React",      icon: "⚛️" },
  { label: "Node.js",    icon: "🟢" },
  { label: "PostgreSQL", icon: "🐘" },
  { label: "Socket.io",  icon: "🔌" },
  { label: "Railway",    icon: "🚂" },
  { label: "Web Push",   icon: "🔔" },
];

export default function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#111] rounded-3xl overflow-hidden"
        style={{ minHeight: "580px" }}
      >
        {/* ── Full-height photo in the center ── */}
        <div
          className="absolute inset-0 flex justify-center"
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 100% at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 100% at 50% 50%, black 40%, transparent 80%)",
          }}
        >
          <div className="relative w-[420px] h-full">
            <Image
              src="/Gemini_Generated_Image_qnurgrqnurgrqnur.png"
              alt="Diksha Sharma"
              fill
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
        </div>

        {/* ── Content layer on top ── */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12" style={{ minHeight: "580px" }}>

          {/* Top row */}
          <div className="flex items-start justify-between">
            {/* Left */}
            <div className="flex flex-col gap-5 max-w-[380px]">
              <span className="text-[#CCFF00] font-medium text-base">Hey 👋 I&apos;m Diksha</span>
              <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05]">
                Full-Stack<br />Developer &amp;<br />
                <span className="text-[#CCFF00]">Product Builder</span>
              </h1>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-fit px-8 py-3.5 bg-[#CCFF00] text-black font-semibold rounded-full hover:bg-[#b8f000] transition-all text-sm mt-2"
              >
                Hire Me
              </button>
            </div>

            {/* Right — Experienced in */}
            <div className="hidden md:flex flex-col gap-3 bg-[#1e1e1e]/90 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-xs text-gray-400">Experienced in</p>
              <div className="grid grid-cols-3 gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.label}
                    title={tool.label}
                    className="w-11 h-11 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-base"
                  >
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-8">
            <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">
              I like builds where the interesting problem is hidden underneath something that looks simple. End to end — data layer to the thing you touch.
            </p>
            <div className="flex gap-8">
              {[
                { value: "3+",  label: "Months in production" },
                { value: "50+", label: "Features shipped" },
                { value: "3",   label: "Projects built" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-gray-600 pt-3">
                  <p className="text-white text-3xl font-bold">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
