"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery",
    description:
      "I'll draft a few layouts to make sure we're aligned on the structure, interactions, and overall direction.",
    icon: "🔍",
    iconBorder: "border-gray-300",
    iconColor: "text-gray-600",
    bg: "bg-white",
    col: "top",
  },
  {
    title: "Wireframe",
    description:
      "I'll whip up some wireframes to make sure we're all on the same page about where we're headed.",
    icon: "⬜",
    iconBorder: "border-indigo-300",
    iconColor: "text-indigo-500",
    bg: "bg-white",
    col: "top",
  },
  {
    title: "Design",
    description:
      "I'll check out the art direction and animation for the experience, making sure it fits well with your target.",
    icon: "🖥",
    iconBorder: "border-lime-300",
    iconColor: "text-lime-500",
    bg: "bg-white",
    col: "top",
  },
  {
    title: "Build",
    description:
      "Once the designs are all set, I'll team up with a creative developer to make the vision.",
    icons: ["💻", "⬡", "👨‍💻"],
    bg: "bg-gradient-to-br from-[#f5ffd6] to-[#eaffc4]",
    col: "bottom",
  },
  {
    title: "Deliver",
    description:
      "Finally, I'll put together and send you the project assets and guidelines right on schedule.",
    icons: ["🖥", "→", "✅"],
    bg: "bg-gradient-to-br from-[#f0f0ff] to-[#e8e8ff]",
    col: "bottom",
  },
];

const top = steps.filter((s) => s.col === "top");
const bottom = steps.filter((s) => s.col === "bottom");

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] px-8 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My reliable and effective<br />design process
        </motion.h2>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {top.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className={`${step.bg} rounded-2xl p-8 flex flex-col gap-6`}
            >
              <div className={`w-14 h-14 rounded-full border ${step.iconBorder} flex items-center justify-center text-2xl`}>
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottom.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
              className={`${step.bg} rounded-2xl p-8 flex flex-row items-center justify-between gap-6`}
            >
              <div className="flex flex-col gap-3 max-w-[220px]">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
              {/* Icon cluster */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {step.icons?.map((icon, j) => (
                  <div
                    key={j}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                      ${icon === "→" ? "text-gray-400 text-2xl" : "bg-white shadow-sm border border-white/60"}
                      ${j === step.icons!.length - 1 ? "bg-[#CCFF00] border-[#CCFF00]" : ""}
                    `}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
