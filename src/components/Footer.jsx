import { Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t dark:border-white/5 border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
              <Code2 size={12} className="text-dark-900" />
            </div>
            <span className="font-mono text-xs dark:text-slate-500 text-slate-500">
              {personalInfo.name}
            </span>
          </div>

          <p className="flex items-center gap-1.5 text-xs font-mono dark:text-slate-600 text-slate-400">
            Built with
            <Heart size={12} className="text-accent" />
            using React + Vite + Tailwind
          </p>

          <p className="text-xs font-mono dark:text-slate-600 text-slate-400">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
