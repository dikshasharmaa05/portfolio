"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Creative Design",
    description:
      "My creative strategy and branding service focuses on developing distinctive brand identities that resonate with your audience and communicate your vision effectively. We combine research, storytelling, and design thinking.",
    stats: [
      { value: "100+", label: "Work done" },
      { value: "97+",  label: "Positive reviews" },
      { value: "50+",  label: "Repeat clients" },
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
  },
  {
    title: "Web Development",
    description:
      "Building fast, accessible, and scalable web applications using modern frameworks like Next.js and React. From landing pages to full-stack products.",
    stats: [],
    image: null,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic SEO, content marketing, and social campaigns that drive real traffic and convert visitors into loyal customers.",
    stats: [],
    image: null,
  },
  {
    title: "Business Consulting",
    description:
      "Helping startups and SMEs define their digital strategy, optimize workflows, and identify growth opportunities with data-driven insights.",
    stats: [],
    image: null,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="px-8 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-xs">
            The coolest services I provide!
          </h2>
          <div className="flex flex-col items-start gap-4 max-w-xs">
            <p className="text-gray-400 text-sm leading-relaxed">
              With years of experience in web design and development, I&apos;m here to help bring your business to life with top-notch service.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors"
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* Header row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-semibold">{service.title}</span>
                <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(-45deg)" : "rotate(0deg)" }}>
                  ↗
                </span>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 flex flex-col md:flex-row gap-10">
                      {/* Left: description + stats */}
                      <div className="flex-1 flex flex-col justify-between gap-8">
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                          {service.description}
                        </p>
                        {service.stats.length > 0 && (
                          <div className="flex gap-10">
                            {service.stats.map((stat) => (
                              <div key={stat.label} className="border-t border-gray-200 pt-3">
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: image */}
                      {service.image && (
                        <div className="md:w-1/2 rounded-xl overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 md:h-64 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
