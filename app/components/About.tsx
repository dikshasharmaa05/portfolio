"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="px-8 md:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="md:w-1/3"
        >
          <span className="text-sm text-gray-400">(Available for work)</span>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-2/3"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-8">
            Welcome to my portfolio! I&apos;m Diksha, a passionate and innovative web designer and developer.
            I specialize in creating visually stunning and highly functional websites that deliver{" "}
            <span className="text-gray-300">exceptional user experiences.</span>
          </p>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            See my latest work
            <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs">↗</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
