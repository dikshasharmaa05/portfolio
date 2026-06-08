"use client";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-sm font-semibold tracking-widest uppercase text-white/30">Diksha.</span>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Diksha Sharma. Designed &amp; built with care.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-white/30 hover:text-white transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
