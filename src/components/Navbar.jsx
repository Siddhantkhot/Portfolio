import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
    // { href: '#experience', label: 'Experience' },
    // { href: '#profiles', label: 'Profiles' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass dark:bg-dark-900/80 border-b dark:border-white/5 border-black/5 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 size={16} className="text-dark-900" />
            </div>
            <span className="font-mono font-semibold text-sm dark:text-slate-100 text-slate-800">
              Sidd<span className="text-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-mono ${
                  active === link.href
                    ? 'text-accent bg-accent/10'
                    : 'dark:text-slate-400 text-slate-600 dark:hover:text-accent hover:text-accent hover:bg-accent/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:text-slate-400 text-slate-600 dark:hover:text-accent hover:text-accent dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden md:block px-4 py-2 text-sm font-medium font-mono text-dark-900 bg-accent rounded-lg hover:bg-accent/90 transition-all duration-200 glow-btn"
            >
              Hire Me
            </a>

            <button
              className="md:hidden p-2 rounded-lg dark:text-slate-400 text-slate-600 dark:hover:bg-white/5 hover:bg-black/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-80 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-sm font-mono dark:text-slate-300 text-slate-700 dark:hover:text-accent hover:text-accent dark:hover:bg-white/5 hover:bg-black/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
