import { useState } from "react";

const services = [
  {
    icon: "✦",
    title: "Brand Identity",
    desc: "We craft unforgettable brand identities that resonate with your audience and stand the test of time.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    color: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: "◈",
    title: "UI/UX Design",
    desc: "Human-centered design that creates intuitive, beautiful interfaces users fall in love with.",
    tags: ["Wireframing", "Prototyping", "User Research"],
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
  },
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Lightning-fast, scalable web applications built with cutting-edge technologies.",
    tags: ["React", "Next.js", "TypeScript"],
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: "◎",
    title: "Motion & Animation",
    desc: "Breathtaking animations and micro-interactions that bring your digital products to life.",
    tags: ["GSAP", "Framer Motion", "Lottie"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: "⬟",
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences that feel native on every device.",
    tags: ["React Native", "iOS", "Android"],
    color: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: "◆",
    title: "SEO & Performance",
    desc: "Technical excellence that gets you found — and keeps users engaged once they arrive.",
    tags: ["Core Web Vitals", "Analytics", "Optimization"],
    color: "from-indigo-500 to-violet-500",
    glow: "rgba(99,102,241,0.3)",
  },
];

export default function Services() {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
            — What We Do
          </p>
          <h2
            className="text-5xl md:text-7xl font-black leading-none mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white">Services That</span>
            <br />
            <span className="gradient-text">Make Waves</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We don't just build products. We engineer experiences that define industries and delight users.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-3xl p-8 cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${service.glow}, transparent 70%)`,
                }}
              />

              {/* Top corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-bl-full`} />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6 text-2xl font-bold text-white shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
