import { ExternalLink, Github, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index }) {
  const statusColors = {
    'Live': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'Open Source': 'text-accent bg-accent/10 border-accent/20',
    'WIP': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  };

  return (
    <div
      className={`group glass dark:bg-dark-800/50 bg-white/70 rounded-2xl p-6 border dark:border-white/5 border-black/5 hover:border-accent/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-accent/5 flex flex-col ${
        project.featured ? 'ring-1 ring-accent/10' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded-md border border-accent/20">
              <Star size={10} />
              Featured
            </span>
          )}
          <span className={`px-2 py-0.5 text-xs font-mono rounded-md border ${statusColors[project.status] || 'text-slate-400 bg-slate-400/10 border-slate-400/20'}`}>
            {project.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:text-slate-500 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-black/5 transition-all"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg dark:text-slate-500 text-slate-500 dark:hover:text-accent hover:text-accent dark:hover:bg-white/5 hover:bg-black/5 transition-all"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-mono dark:text-slate-400 text-slate-600 dark:bg-dark-700/80 bg-slate-100 rounded-md border dark:border-white/5 border-black/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="font-mono text-accent text-sm">03. projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 mt-2">
              Things I've Built
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent2 mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/Siddhantkhot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border dark:border-white/10 border-black/10 rounded-xl dark:text-slate-300 text-slate-700 hover:border-accent/40 hover:text-accent dark:hover:bg-accent/5 hover:bg-accent/5 transition-all duration-300 font-mono text-sm"
            >
              <Github size={16} />
              See all projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
