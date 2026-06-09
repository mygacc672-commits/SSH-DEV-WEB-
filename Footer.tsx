const footerLinks = {
  Services: ["Brand Identity", "UI/UX Design", "Web Development", "Mobile Apps", "Motion Design", "SEO & Performance"],
  Company: ["About Us", "Our Work", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Case Studies", "Design System", "Style Guide", "Documentation", "Newsletter", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        NEXUS
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                NEXUS
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              We craft digital experiences that inspire, engage, and drive real-world results for ambitious brands.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50 transition-all"
              />
              <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all">
                Join
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 NEXUS Creative Agency. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { name: "Twitter", icon: "𝕏" },
              { name: "Instagram", icon: "◈" },
              { name: "LinkedIn", icon: "in" },
              { name: "Dribbble", icon: "⬡" },
              { name: "GitHub", icon: "⊛" },
            ].map((s) => (
              <a
                key={s.name}
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-gray-500 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-600 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
