import { useState } from 'react';
import { Mail, Github, Instagram, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function ContactSection() {
  const { contact } = PORTFOLIO_DATA;
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-start">
          <p className="text-xs uppercase tracking-widest font-semibold text-yellow-400 mb-2">
            {t.contact.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-[#0c0c11] border border-zinc-800 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700 transition-all text-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t.contact.emailCard.title}</h3>
              <p className="text-xs text-zinc-400 mb-4">
                {t.contact.emailCard.desc}
              </p>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-200 break-all select-all">
                {contact.email}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-6 border-t border-zinc-800/80">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-colors"
              >
                <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                <span>{t.contact.emailCard.sendBtn}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
                aria-label={t.contact.emailCard.copyTitle}
                title={t.contact.emailCard.copyTitle}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-[#0c0c11] border border-zinc-800 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700 transition-all text-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 mb-5">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t.contact.githubCard.title}</h3>
              <p className="text-xs text-zinc-400 mb-4">
                {t.contact.githubCard.desc}
              </p>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-300 break-all">
                github.com/Ayoubpro1234/AYOUB-flach-lite
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800/80">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
                aria-label="Open AYOUB GitHub Repository in new tab"
              >
                <span>{t.contact.githubCard.btn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-[#0c0c11] border border-zinc-800 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700 transition-all text-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 mb-5">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t.contact.instagramCard.title}</h3>
              <p className="text-xs text-zinc-400 mb-4">
                {t.contact.instagramCard.desc}
              </p>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-300 break-all">
                @ayoub.apex · instagram.com/ayoub.apex
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800/80">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
                aria-label="Open AYOUB Instagram Profile in new tab"
              >
                <span>{t.contact.instagramCard.btn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Note on configuration */}
        <p className="mt-10 text-xs text-zinc-400 text-center">
          {t.contact.note}
        </p>
      </div>
    </section>
  );
}
