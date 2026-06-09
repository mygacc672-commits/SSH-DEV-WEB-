import { useEffect, useRef, useState } from "react";
const stats = [
  { value: 1200, suffix: "+", label: "Projects Delivered", desc: "Across all industries" },
  { value: 500, suffix: "+", label: "Happy Clients", desc: "In 40+ countries" },
  { value: 12, suffix: "yrs", label: "Years Experience", desc: "Award-winning work" },
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "5-star average rating" },
];
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
export default function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-blue-900/20 to-violet-900/20" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 border border-violet-500/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div
                  className="text-5xl md:text-6xl font-black mb-2 gradient-text animate-counter-glow"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
