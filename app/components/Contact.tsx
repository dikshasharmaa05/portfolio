"use client";

export default function Contact() {
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="px-4 md:px-8 pt-6 pb-10">
      <div className="bg-[#111] rounded-3xl px-8 md:px-16 py-20 flex flex-col items-center justify-center text-center gap-8 min-h-[380px]">
        <p className="text-[#CCFF00] text-sm">Let&apos;s turn your ideas into a stunning reality.</p>

        <a
          href="mailto:diksha@gmail.com"
          className="text-[#CCFF00] text-4xl md:text-6xl lg:text-7xl font-bold hover:opacity-80 transition-opacity break-all"
        >
          diksha@gmail.com
        </a>

        {/* Nav pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
          {["Home", "About", "Portfolio", "Blog"].map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              className="px-5 py-2.5 bg-[#222] text-white/80 rounded-full text-sm hover:bg-[#333] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
