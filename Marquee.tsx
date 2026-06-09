const brands = [
  "Google", "Apple", "Microsoft", "Meta", "Netflix",
  "Spotify", "Airbnb", "Stripe", "Figma", "Notion",
  "Vercel", "Linear", "Loom", "Discord", "Slack",
];
export default function Marquee() {
  const doubled = [...brands, ...brands];
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs text-gray-600 tracking-widest uppercase mb-6">
        Trusted by the world's best companies
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020408] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020408] to-transparent z-10" />
        
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-violet-400 text-xs font-bold">{brand[0]}</span>
              </div>
              <span className="text-gray-500 font-medium text-sm hover:text-gray-300 transition-colors cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
