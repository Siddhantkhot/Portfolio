import { Briefcase, GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="experience" className="py-24 relative dark:bg-dark-800/20 bg-slate-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-mono text-accent text-sm">04. experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mt-2">
              Journey
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px dark:bg-dark-600 bg-slate-200" />

            <div className="space-y-8">
              {experience.map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl dark:bg-dark-700 bg-white border dark:border-white/10 border-black/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300 z-10 relative">
                      {item.type === 'work'
                        ? <Briefcase size={18} className="text-accent" />
                        : <GraduationCap size={18} className="text-accent2" />
                      }
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass dark:bg-dark-800/50 bg-white/70 rounded-2xl p-6 border dark:border-white/5 border-black/5 group-hover:border-accent/20 transition-all duration-300 mb-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold dark:text-white text-slate-900 text-lg">
                          {item.title}
                        </h3>
                        <p className="font-mono text-sm text-accent">{item.company}</p>
                      </div>
                      <span className="font-mono text-xs dark:text-slate-500 text-slate-500 bg-slate-100 dark:bg-dark-700 px-3 py-1 rounded-lg border dark:border-white/5 border-black/5 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 text-xs font-mono dark:text-slate-400 text-slate-600 dark:bg-dark-700/80 bg-slate-100 rounded border dark:border-white/5 border-black/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
