import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills, techBadges } from '../data/portfolio';

function ProgressBar({ level, color, isVisible }) {
  return (
    <div className="h-1.5 dark:bg-dark-600 bg-slate-200 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1500 ease-out"
        style={{
          width: isVisible ? `${level}%` : '0%',
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}60`,
          transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 relative dark:bg-dark-800/30 bg-slate-50/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-mono text-accent text-sm">02. skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mt-2">
              Tech Stack
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 mt-4 rounded-full" />
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((category, ci) => (
              <div
                key={ci}
                className="glass dark:bg-dark-800/50 bg-white/70 rounded-2xl p-6 border dark:border-white/5 border-black/5 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color, boxShadow: `0 0 8px ${category.color}` }}
                  />
                  <h3 className="font-semibold font-mono text-sm dark:text-slate-200 text-slate-800">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.items.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm dark:text-slate-300 text-slate-700 font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar level={skill.level} color={category.color} isVisible={isVisible} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="glass dark:bg-dark-800/50 bg-white/70 rounded-2xl p-8 border dark:border-white/5 border-black/5">
            <h3 className="font-mono text-sm text-accent mb-6">// also familiar with</h3>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono dark:text-slate-300 text-slate-700 dark:bg-dark-700/60 bg-slate-100 border dark:border-white/5 border-black/5 rounded-lg hover:border-accent/40 hover:text-accent dark:hover:bg-accent/5 hover:bg-accent/5 transition-all duration-200 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
