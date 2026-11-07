import { Smartphone, Bot, Sparkles, Hammer, Terminal, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const interestIcons = [
    Smartphone, // Android development
    Bot,        // Artificial intelligence
    Sparkles,   // Technology and digital creativity
    Hammer,     // Practical building & experimentation
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-start">
          <p className="text-xs uppercase tracking-widest font-semibold text-yellow-400 mb-2">
            {t.about.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.about.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            {t.about.introduction}
          </p>
        </div>

        {/* 4 Core Interest Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {t.about.interests.map((interest, idx) => {
            const IconComponent = interestIcons[idx] || Cpu;
            return (
              <div
                key={interest.title}
                className="group relative bg-[#0c0c10] border border-zinc-800/80 rounded-2xl p-7 hover:border-zinc-700 transition-all duration-300 text-start"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400 shrink-0 group-hover:border-yellow-400/40 group-hover:scale-105 transition-all">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-yellow-300 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Philosophy Card */}
        <div className="rounded-2xl bg-zinc-950/60 border border-zinc-800/60 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-start">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-medium">
                {t.about.philosophyBadge}
              </p>
              <p className="text-base font-semibold text-zinc-200 mt-0.5">
                {t.about.philosophyTitle}
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
            {t.about.philosophyText}
          </p>
        </div>
      </div>
    </section>
  );
}
