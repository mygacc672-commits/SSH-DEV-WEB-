import { useState } from "react";
interface NavbarProps {
  scrollY: number;
}
const navLinks = ["Services", "Work", "About", "Pricing", "Contact"];
export default function Navbar({ scrollY }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? "glass px-6 py-3 shadow-lg shadow-black/30"
            : "px-6 py-3"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              NEXUS
            </span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="glow-btn px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
              Get Started
            </button>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
