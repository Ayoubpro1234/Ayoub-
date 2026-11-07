import { ArrowDownToLine } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../config/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface DownloadSectionProps {
  onDownloadApk: (project: ProjectItem) => void;
}

export function DownloadSection({ onDownloadApk }: DownloadSectionProps) {
  const flashLite = PORTFOLIO_DATA.projects[0];
  const { t, isRTL } = useLanguage();

  return (
    <section id="downloads" className="py-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[300px] sm:h-[350px] bg-yellow-400/5 blur-[90px] sm:blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-start">
          <p className="text-xs uppercase tracking-widest font-semibold text-yellow-400 mb-2">
            {t.download.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.download.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            {t.download.subtitle}
          </p>
        </div>

        {/* Download Card Container */}
        <div className="bg-[#0c0c11] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Icon & Info */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-start">
              <img
                src={flashLite.iconImage}
                alt={`${flashLite.name} Official Icon`}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl aspect-square object-contain bg-black border-2 border-zinc-700/80 shadow-xl shrink-0"
                referrerPolicy="no-referrer"
              />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {flashLite.name}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-yellow-400 text-black shadow-sm">
                    {t.download.apkBadge}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  {isRTL
                    ? 'تطبيق كشاف عصري وسهل الاستخدام يوفر لك جميع أدوات الإنارة والأنماط التفاعلية بكفاءة وسرعة فائقة.'
                    : flashLite.description}
                </p>

                {/* Metadata strip */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono pt-1">
                  <span>{t.download.versionLabel} <span className="text-zinc-200">{flashLite.version}</span></span>
                  <span aria-hidden="true">·</span>
                  <span>{t.download.sizeLabel} <span className="text-zinc-200">{flashLite.apkSize}</span></span>
                  <span aria-hidden="true">·</span>
                  <span>{t.download.requiresLabel} <span className="text-zinc-200">{isRTL ? 'أندرويد 7.0+' : flashLite.minAndroid}</span></span>
                </div>
              </div>
            </div>

            {/* Right: Download Action Box */}
            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center w-full">
              <button
                onClick={() => onDownloadApk(flashLite)}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-xl shadow-yellow-400/25 cursor-pointer"
              >
                <ArrowDownToLine className="w-5 h-5 stroke-[2.5]" />
                <span>{t.download.downloadBtn}</span>
              </button>
              <p className="text-[11px] text-zinc-400 mt-2 text-center lg:text-end">
                {t.download.hostedNote}
              </p>
            </div>
          </div>

          {/* Quick installation guide banner */}
          <div className="mt-8 pt-8 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-start">
            {t.download.steps.map((step) => (
              <div key={step.number} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 font-mono text-xs flex items-center justify-center shrink-0">
                  {step.number}
                </span>
                <div>
                  <p className="text-xs font-semibold text-zinc-200">{step.title}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
