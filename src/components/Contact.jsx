import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo, socialLinks } from '../data/portfolio';

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-24 relative dark:bg-dark-800/20 bg-slate-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-mono text-accent text-sm">05. contact</span>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mt-2">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              <p className="text-lg dark:text-slate-300 text-slate-700 leading-relaxed">
                I'm currently open to new opportunities — whether it's a full-time role, freelance
                project, or just a chat. My inbox is always open.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 glass dark:bg-dark-800/50 bg-white/70 p-4 rounded-xl border dark:border-white/5 border-black/5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono dark:text-slate-500 text-slate-500">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm dark:text-slate-200 text-slate-800 hover:text-accent transition-colors font-mono">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass dark:bg-dark-800/50 bg-white/70 p-4 rounded-xl border dark:border-white/5 border-black/5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono dark:text-slate-500 text-slate-500">Location</p>
                    <p className="text-sm dark:text-slate-200 text-slate-800 font-mono">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-mono dark:text-slate-500 text-slate-500 mb-4">// connect</p>
                <div className="flex gap-3">
                  {[
                    { href: socialLinks.github, icon: Github, label: 'GitHub' },
                    { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
                    { href: socialLinks.twitter, icon: Twitter, label: 'Twitter' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border dark:border-white/5 border-black/5 dark:text-slate-400 text-slate-600 dark:hover:text-accent hover:text-accent dark:hover:border-accent/30 hover:border-accent/30 dark:hover:bg-accent/5 hover:bg-accent/5 transition-all duration-200 text-sm font-mono"
                    >
                      <Icon size={15} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass dark:bg-dark-800/50 bg-white/70 rounded-2xl p-8 border dark:border-white/5 border-black/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono dark:text-slate-500 text-slate-500 mb-1.5">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl dark:bg-dark-700/60 bg-slate-100 border dark:border-white/5 border-black/5 dark:text-slate-200 text-slate-800 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-accent/50 dark:focus:bg-dark-700 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono dark:text-slate-500 text-slate-500 mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl dark:bg-dark-700/60 bg-slate-100 border dark:border-white/5 border-black/5 dark:text-slate-200 text-slate-800 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-accent/50 dark:focus:bg-dark-700 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono dark:text-slate-500 text-slate-500 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job opportunity / Project collab / Just saying hi"
                    className="w-full px-4 py-3 rounded-xl dark:bg-dark-700/60 bg-slate-100 border dark:border-white/5 border-black/5 dark:text-slate-200 text-slate-800 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-accent/50 dark:focus:bg-dark-700 focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono dark:text-slate-500 text-slate-500 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or idea..."
                    className="w-full px-4 py-3 rounded-xl dark:bg-dark-700/60 bg-slate-100 border dark:border-white/5 border-black/5 dark:text-slate-200 text-slate-800 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-accent/50 dark:focus:bg-dark-700 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-accent text-dark-900 font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 glow-btn font-mono text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="text-center py-2 text-sm font-mono text-emerald-400 animate-fade-in">
                    ✓ Message sent! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
