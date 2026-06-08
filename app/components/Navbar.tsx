"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <span className="text-white font-bold text-sm">DS</span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-2">
        {["Home", "About", "Portfolio", "Blog"].map((link, i) => (
          <button
            key={link}
            onClick={() => handleNav(link.toLowerCase())}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              i === 0
                ? "bg-[#CCFF00] text-black"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => handleNav("contact")}
        className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gray-400 transition-all"
      >
        <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-xs">💬</span>
        Let&apos;s talk
      </button>
    </nav>
  );
}
