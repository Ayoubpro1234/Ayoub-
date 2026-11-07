import { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onDownloadClick: () => void;
}

export function Navbar({ onDownloadClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090c]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          aria-label={t.nav.brandName}
        >
          <span className="font-display tracking-wider text-2xl font-extrabold text-white group-hover:text-yellow-400 transition-colors">
            {t.nav.brandName}
          </span>
          <span className="h-2 w-2 rounded-full bg-yellow-400 inline-block shadow-sm shadow-yellow-400/50" />
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => scrollTo('downloads')}
            className="hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.downloads}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Zone 3: Language Switcher & Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
            aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
            title={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
          >
            <Globe className="w-3.5 h-3.5 text-yellow-400" />
            <span>{t.nav.langToggle}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-md shadow-yellow-400/20 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label={t.nav.getApp}
          >
            <ArrowDownToLine className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.nav.getApp}</span>
          </button>
        </div>

        {/* Mobile Actions: Language toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-2 rounded-lg text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
          >
            <Globe className="w-3.5 h-3.5 text-yellow-400" />
            <span>{t.nav.langToggle}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-b border-zinc-800 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            <button
              onClick={() => scrollTo('about')}
              className="px-2 py-2 text-start hover:text-yellow-400 hover:bg-zinc-900/50 rounded-md transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="px-2 py-2 text-start hover:text-yellow-400 hover:bg-zinc-900/50 rounded-md transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollTo('downloads')}
              className="px-2 py-2 text-start hover:text-yellow-400 hover:bg-zinc-900/50 rounded-md transition-colors"
            >
              {t.nav.downloads}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-2 py-2 text-start hover:text-yellow-400 hover:bg-zinc-900/50 rounded-md transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-md shadow-yellow-400/20"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2.5]" />
              <span>{t.nav.getApp}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
