"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, GitFork, ExternalLink } from "lucide-react";

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:diksha@example.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("diksha@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-indigo-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs tracking-widest uppercase text-white/30 mb-6">Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Let&apos;s build something
            <br />
            <span className="text-white/25">great together.</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-12">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
            talk about how I can help bring your vision to life.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:diksha@example.com"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all"
            >
              Say hello
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={copyEmail}
              className="px-8 py-4 border border-white/15 rounded-full text-white/60 hover:border-white/30 hover:text-white transition-all text-sm"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
