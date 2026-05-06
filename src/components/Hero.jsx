import { ArrowDown, Github, Linkedin, Download, Terminal } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';


const TypedText = () => {
  return (
    <span className="font-mono text-accent">
      {personalInfo.role}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border dark:border-accent/30 border-accent/40 bg-accent/5 text-accent text-sm font-mono animate-fade-in"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new opportunities
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-slate-900 leading-none">
                {personalInfo.name.split(' ')[0]}
                <br />
                <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: '0.2s' }}>
              <Terminal size={18} className="text-accent flex-shrink-0" />
              <TypedText />
            </div>

            {/* Tagline */}
            <p
              className="text-lg dark:text-slate-400 text-slate-600 leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-dark-900 font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 glow-btn font-mono text-sm"
              >
                View Projects →
              </a>
              <a
                href="/SiddhantCV.pdf"
                className="flex items-center gap-2 px-6 py-3 border dark:border-white/10 border-black/10 rounded-xl dark:text-slate-300 text-slate-700 dark:hover:border-accent/50 hover:border-accent/50 hover:text-accent transition-all duration-300 font-mono text-sm dark:hover:bg-accent/5 hover:bg-accent/5"
              > 
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-xs font-mono dark:text-slate-600 text-slate-400">find me on</span>
              <div className="flex gap-3">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg dark:text-slate-500 text-slate-500 dark:hover:text-accent hover:text-accent dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg dark:text-slate-500 text-slate-500 dark:hover:text-[#0a66c2] hover:text-[#0a66c2] dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200">
                  <Linkedin size={20} />
                </a>
                <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg dark:text-slate-500 text-slate-500 dark:hover:text-[#ffa116] hover:text-[#ffa116] dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.5a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Floating card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-accent2/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                {/* Avatar placeholder */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-dark-700 to-dark-800 dark:from-dark-700 dark:to-dark-800 border dark:border-white/10 border-black/5 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text font-mono">
                      <img src="./avatar1.png" alt="Siddhant" className='w-fit h-fit'/>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                {/* <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl dark:text-white text-slate-800 text-xs font-mono animate-float border dark:border-white/10 border-black/5" style={{ animationDelay: '0s' }}>
                  <span className="text-accent">3+</span> yrs experience
                </div>
                <div className="absolute -bottom-2 -left-8 glass px-3 py-2 rounded-xl dark:text-white text-slate-800 text-xs font-mono animate-float border dark:border-white/10 border-black/5" style={{ animationDelay: '2s' }}>
                  <span className="text-accent">50+</span> projects
                </div>
                <div className="absolute top-1/2 -right-12 glass px-3 py-2 rounded-xl dark:text-white text-slate-800 text-xs font-mono animate-float border dark:border-white/10 border-black/5" style={{ animationDelay: '1s' }}>
                  <span className="text-[#ffa116]">487</span> LC solved
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 dark:text-slate-600 text-slate-400 hover:text-accent transition-colors duration-200">
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
