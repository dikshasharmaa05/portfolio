"use client";

export default function Footer() {
  return (
    <footer className="px-8 md:px-12 py-5 flex items-center justify-between">
      <p className="text-sm text-gray-400">
        Designed by <span className="font-semibold text-black">Diksha Sharma</span>
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-3">
        {[
          { label: "Behance",   href: "https://behance.net",   icon: "𝔹" },
          { label: "Dribbble",  href: "https://dribbble.com",  icon: "🏀" },
          { label: "LinkedIn",  href: "https://linkedin.com",  icon: "in" },
          { label: "Facebook",  href: "https://facebook.com",  icon: "f" },
          { label: "Instagram", href: "https://instagram.com", icon: "◻" },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 hover:border-gray-400 hover:text-black transition-all"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
