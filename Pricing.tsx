import { useState } from "react";

const plans = [
  {
    name: "Starter",
    emoji: "🌱",
    price: { monthly: 2999, yearly: 2399 },
    desc: "Perfect for startups and small businesses getting started.",
    features: [
      "Brand Identity Design",
      "Landing Page",
      "Mobile Responsive",
      "Basic SEO Setup",
      "2 Revision Rounds",
      "30-day Support",
    ],
    notIncluded: ["Custom Web App", "API Integration", "Analytics Dashboard"],
    color: "from-gray-600 to-gray-700",
    popular: false,
  },
  {
    name: "Growth",
    emoji: "🚀",
    price: { monthly: 5999, yearly: 4799 },
    desc: "For growing companies ready to scale their digital presence.",
    features: [
      "Everything in Starter",
      "Full Website (5-10 pages)",
      "Custom Web App",
      "API Integration",
      "Analytics Dashboard",
      "Unlimited Revisions",
      "90-day Priority Support",
    ],
    notIncluded: ["Dedicated Team", "White-label"],
    color: "from-violet-600 to-blue-600",
    popular: true,
  },
  {
    name: "Enterprise",
    emoji: "👑",
    price: { monthly: 12999, yearly: 10399 },
    desc: "Full-service partnership for ambitious enterprises.",
    features: [
      "Everything in Growth",
      "Dedicated Design Team",
      "Custom Mobile App",
      "Performance Optimization",
      "White-label Solutions",
      "24/7 Priority Support",
      "Quarterly Strategy Reviews",
    ],
    notIncluded: [],
    color: "from-amber-500 to-orange-600",
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
            — Pricing
          </p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white">Simple,</span>
            <span className="gradient-text"> Transparent</span>
            <br />
            <span className="text-white">Pricing</span>
          </h2>
          <p className="text-gray-400 mb-8">No hidden fees. No surprises. Just results.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-full px-2 py-2">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !yearly ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                yearly ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white" : "text-gray-400"
              }`}
            >
              Yearly
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-violet-500 scale-105 shadow-2xl shadow-violet-500/30"
                  : "glass glass-hover"
              }`}
            >
              {/* Popular background */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-violet-900/40 to-blue-900/40 backdrop-blur-xl border border-violet-500/30" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold px-6 py-1.5 rounded-b-xl tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`relative p-8 ${plan.popular ? "pt-12" : ""}`}>
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-2xl`}>
                    {plan.emoji}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                    <p className="text-gray-500 text-xs">{plan.desc}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-lg">$</span>
                    <span
                      className="text-5xl font-black text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString()}
                    </span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                  {yearly && (
                    <p className="text-emerald-400 text-xs mt-1">
                      Save ${((plan.price.monthly - plan.price.yearly) * 12).toLocaleString()} per year
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3.5 rounded-2xl font-semibold mb-8 transition-all duration-300 glow-btn ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/40"
                      : "glass text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-600 text-sm mt-8">
          All plans include a free 30-minute discovery call. Enterprise plans can be fully customized.{" "}
          <a href="#contact" className="text-violet-400 hover:text-violet-300">Contact us</a> for custom quotes.
        </p>
      </div>
    </section>
  );
}
