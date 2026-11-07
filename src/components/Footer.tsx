import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#08080b] py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-start">
            <span className="font-display font-bold text-white text-lg tracking-wider">
              {t.nav.brandName}
            </span>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <p className="text-sm text-zinc-400">
              {t.footer.copyright}
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              className="hover:text-yellow-400 transition-colors"
            >
              {t.nav.projects}
            </a>
            <a
              href="#downloads"
              className="hover:text-yellow-400 transition-colors"
            >
              {t.nav.downloads}
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              {t.nav.contact}
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors ms-2 cursor-pointer"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
