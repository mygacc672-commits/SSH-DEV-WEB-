import { useState } from "react";

const contactInfo = [
  { icon: "📍", label: "Studio", value: "123 Creative Ave, San Francisco, CA 94105" },
  { icon: "📧", label: "Email", value: "hello@nexus.agency" },
  { icon: "📞", label: "Phone", value: "+1 (415) 555-0190" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs text-violet-400 tracking-widest uppercase font-medium mb-4">
            — Let's Talk
          </p>
          <h2
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white">Ready to Create</span>
            <br />
            <span className="gradient-text">Something Amazing?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 glass-hover">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
                  >
                    {s[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">Currently Available</span>
              </div>
              <p className="text-gray-500 text-sm">
                We have 2 project slots open for Q1 2025. Don't miss out!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 animate-pulse-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Project Budget</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select budget range</option>
                      <option value="<5k" className="bg-gray-900">Under $5,000</option>
                      <option value="5k-15k" className="bg-gray-900">$5,000 – $15,000</option>
                      <option value="15k-50k" className="bg-gray-900">$15,000 – $50,000</option>
                      <option value="50k+" className="bg-gray-900">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Tell Us About Your Project</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-btn w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
