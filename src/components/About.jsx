import { MapPin, Mail, Coffee, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo } from '../data/portfolio';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
,
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-mono text-accent text-sm">01. about</span>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mt-2">
              Who I Am
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg dark:text-slate-300 text-slate-700 leading-relaxed">
                I'm a passionate Full Stack Developer who loves building things that live on the internet.
                I care deeply about <span className="text-accent font-medium">performance</span>,{' '}
                <span className="text-accent font-medium">clean code</span>, and experiences that feel{' '}
                <span className="text-accent font-medium">effortless</span> to use.
              </p>
              <p className="text-lg dark:text-slate-400 text-slate-600 leading-relaxed">
                When I'm not shipping features, you'll find me grinding LeetCode problems, contributing
                to open-source, or exploring the latest in distributed systems and AI tooling.
              </p>
              <p className="text-lg dark:text-slate-400 text-slate-600 leading-relaxed">
                I believe the best products are born at the intersection of technical rigor and thoughtful
                design — and I bring both to every project I take on.
              </p>

              {/* Quick info */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3 dark:text-slate-400 text-slate-600">
                  <MapPin size={16} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 dark:text-slate-400 text-slate-600">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="font-mono text-sm hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 dark:text-slate-400 text-slate-600">
                  <Coffee size={16} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-sm">Fueled by coffee & curiosity</span>
                </div>
                <div className="flex items-center gap-3 dark:text-slate-400 text-slate-600">
                  <Zap size={16} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-sm">Open to remote & hybrid roles</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="glass dark:bg-dark-800/50 bg-white/50 rounded-2xl p-6 border dark:border-white/5 border-black/5 group hover:border-accent/30 transition-all duration-300"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold gradient-text font-mono">{stat.value}</div>
                    <div className="text-sm dark:text-slate-500 text-slate-500 mt-1 font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Fun facts card */}
              <div className="glass dark:bg-dark-800/50 bg-white/50 rounded-2xl p-6 border dark:border-white/5 border-black/5">
                <h3 className="font-mono text-sm text-accent mb-4">// fun facts</h3>
                <ul className="space-y-2 text-sm dark:text-slate-400 text-slate-600 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    Wrote my first line of code at age 20
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    Big fan of mechanical keyboards & custom setups
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    Reading sci-fi when not reading docs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    Vim user (and proud of it)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
