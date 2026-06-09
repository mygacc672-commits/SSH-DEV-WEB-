import { useEffect, useRef, useState } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 8,
  opacity: Math.random() * 0.6 + 0.2,
}));

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.id % 3 === 0
              ? "rgba(167,139,250,0.8)"
              : p.id % 3 === 1
              ? "rgba(96,165,250,0.8)"
              : "rgba(52,211,153,0.8)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Floating orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent)",
          top: "10%",
          left: "20%",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #2563eb, transparent)",
          bottom: "20%",
          right: "15%",
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #059669, transparent)",
          top: "40%",
          right: "30%",
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-violet-500/10 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-blue-500/05" style={{ animation: "spin-slow 35s linear infinite reverse" }} />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
            Award-Winning Digital Agency
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "Space Grotesk, sans-serif", transitionDelay: "0.2s" }}
        >
          <span className="block text-white">We Build</span>
          <span className="block gradient-text">Digital</span>
          <span className="block">
            <span className="text-stroke">Magic</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          We craft breathtaking digital experiences — from pixel-perfect interfaces to
          blazing-fast web applications that captivate, convert, and inspire.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <button className="glow-btn group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 flex items-center gap-3">
            Start a Project
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="group px-8 py-4 rounded-2xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Showreel
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet-500/50 to-transparent animate-pulse" />
        </div>

        {/* Floating cards */}
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 animate-float">
          <div className="glass rounded-2xl p-4 w-48">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <span className="text-violet-400">★</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Rating</p>
                <p className="text-sm font-bold text-white">5.0/5.0</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">500+ Happy Clients</p>
          </div>
        </div>

        <div className="hidden lg:block absolute -right-20 top-1/3 animate-float" style={{ animationDelay: "2s" }}>
          <div className="glass rounded-2xl p-4 w-48">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Projects Done</p>
                <p className="text-sm font-bold text-white">1,200+</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Across 40 countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
