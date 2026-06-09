const team = [
  { name: "Alex Rivera", role: "Creative Director", emoji: "🎨", color: "from-violet-500 to-purple-600" },
  { name: "Mia Chen", role: "Lead Developer", emoji: "⚡", color: "from-blue-500 to-cyan-500" },
  { name: "Jordan Kim", role: "UX Strategist", emoji: "🔮", color: "from-emerald-500 to-teal-500" },
  { name: "Sam Torres", role: "Motion Designer", emoji: "✨", color: "from-pink-500 to-rose-500" },
];
const values = [
  { icon: "◈", title: "Craft", desc: "We obsess over every pixel, every line of code, every interaction." },
  { icon: "◎", title: "Innovation", desc: "We push boundaries and pioneer new approaches to digital experiences." },
  { icon: "✦", title: "Impact", desc: "We measure success by the real-world results we create for clients." },
];
export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
              — About Us
            </p>
            <h2
              className="text-5xl md:text-6xl font-black leading-tight mb-8"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="text-white">We're a Team of</span>
              <br />
              <span className="gradient-text">Digital Dreamers</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2012, NEXUS has grown from a small design studio into a
              full-service digital agency trusted by Fortune 500 companies and
              startups alike. We believe that great design is not just about
              aesthetics — it's about creating meaningful connections between
              brands and the people they serve.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Our multidisciplinary team of designers, developers, and strategists
              work collaboratively to deliver experiences that don't just look
              amazing — they perform.
            </p>
            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4 glass rounded-2xl p-4 glass-hover">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center text-violet-400 font-bold flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Team grid */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="glass glass-hover rounded-3xl p-6 text-center group cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Avatar */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {member.emoji}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
                  <p className="text-gray-500 text-xs">{member.role}</p>
                  {/* Social icons */}
                  <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white cursor-pointer">
                      in
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white cursor-pointer">
                      tw
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm">🏆</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Awwwards Winner</p>
                  <p className="text-white font-bold text-sm">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
