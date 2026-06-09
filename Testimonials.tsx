import { useState } from "react";

const testimonials = [
  {
    quote: "NEXUS completely transformed our digital presence. The results were beyond anything we imagined — conversions tripled in the first month.",
    author: "Sarah Mitchell",
    role: "CEO, Lumina Ventures",
    avatar: "SM",
    rating: 5,
    color: "from-violet-500 to-purple-600",
  },
  {
    quote: "Working with NEXUS was a game-changer. Their attention to detail and commitment to quality is unmatched. They don't just deliver — they over-deliver.",
    author: "James Park",
    role: "CTO, TechForge",
    avatar: "JP",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote: "The team's creativity and technical expertise is extraordinary. They built us something we didn't even know we needed — and our users love it.",
    author: "Priya Sharma",
    role: "Product Lead, Zenith App",
    avatar: "PS",
    rating: 5,
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote: "Professional, responsive, and incredibly talented. NEXUS delivered our project on time and on budget, and it exceeded all our expectations.",
    author: "Marcus Williams",
    role: "Founder, Aura Studio",
    avatar: "MW",
    rating: 5,
    color: "from-pink-500 to-rose-500",
  },
  {
    quote: "Absolutely mind-blowing work. The animations and interactions they built have been commented on by every single person who sees our site.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Pulse Media",
    avatar: "ER",
    rating: 5,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
            — Testimonials
          </p>
          <h2
            className="text-5xl md:text-7xl font-black"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white">What Clients</span>
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="glass rounded-3xl p-10 md:p-14 text-center relative mb-8">
          {/* Quote mark */}
          <div className="text-8xl font-serif text-violet-500/20 absolute top-4 left-8 leading-none">"</div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-amber-400 text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto font-light italic">
            "{t.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg`}>
              {t.avatar}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">{t.author}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-violet-500"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
