import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Lumina Finance",
    category: "Web App",
    desc: "A next-generation fintech dashboard with real-time analytics and AI-powered insights.",
    img: "https://images.pexels.com/photos/10653941/pexels-photo-10653941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tags: ["React", "TypeScript", "D3.js"],
    gradient: "from-violet-600/80 to-blue-600/80",
    year: "2024",
  },
  {
    id: 2,
    title: "Aura Creative",
    category: "Brand Identity",
    desc: "Complete brand overhaul for a leading creative studio — from logo to full visual system.",
    img: "https://images.pexels.com/photos/29450012/pexels-photo-29450012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tags: ["Branding", "Motion", "Print"],
    gradient: "from-pink-600/80 to-violet-600/80",
    year: "2024",
  },
  {
    id: 3,
    title: "Zenith Commerce",
    category: "E-commerce",
    desc: "High-converting e-commerce platform with 3D product visualization and seamless checkout.",
    img: "https://images.pexels.com/photos/34062650/pexels-photo-34062650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tags: ["Next.js", "Shopify", "Three.js"],
    gradient: "from-emerald-600/80 to-teal-600/80",
    year: "2025",
  },
  {
    id: 4,
    title: "Pulse Mobile",
    category: "Mobile App",
    desc: "Health & wellness app with 500k+ downloads and 4.9★ App Store rating.",
    img: "https://images.pexels.com/photos/9850247/pexels-photo-9850247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tags: ["React Native", "iOS", "Android"],
    gradient: "from-amber-600/80 to-orange-600/80",
    year: "2025",
  },
];

const filters = ["All", "Web App", "Brand Identity", "E-commerce", "Mobile App"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="work" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
              — Our Work
            </p>
            <h2
              className="text-5xl md:text-7xl font-black leading-none"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="text-white">Selected</span>
              <br />
              <span className="gradient-text-2">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs">
            A curated selection of our most impactful work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/30"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer card-3d"
              style={{ height: i === 0 ? "500px" : "380px" }}
            >
              {/* Background image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="text-white/60 text-xs">{project.year}</span>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs text-white/60 bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-3">
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
