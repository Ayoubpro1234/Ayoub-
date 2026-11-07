import { ArrowRight, Mail, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onViewProjectClick: (projectId: string) => void;
}

export function HeroSection({
  onExploreClick,
  onContactClick,
  onViewProjectClick,
}: HeroSectionProps) {
  const { t, isRTL } = useLanguage();
  const featuredApp = PORTFOLIO_DATA.projects[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow (electric yellow highlight, controlled and refined) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[260px] sm:h-[300px] bg-yellow-400/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle fine geometric grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f280f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f280f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Identity & Role Unboxed Metadata */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-yellow-400 mb-5 tracking-wide">
              <span className="font-semibold text-white tracking-widest uppercase">
                {t.hero.greeting}
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">
                {t.hero.role}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] text-balance mb-6">
              {t.hero.headlineStart}
              <span className="text-yellow-400 relative inline-block">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl mb-8">
              {t.hero.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-lg shadow-yellow-400/20 whitespace-nowrap cursor-pointer"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>{t.hero.contactBtn}</span>
              </button>
            </div>

            {/* Quick Developer Focus highlights */}
            <div className="mt-12 pt-8 border-t border-zinc-800/80 w-full grid grid-cols-3 gap-4 text-start">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  {t.hero.focusLabel}
                </p>
                <p className="text-sm font-medium text-zinc-200">
                  {t.hero.focusValue}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  {t.hero.passionLabel}
                </p>
                <p className="text-sm font-medium text-zinc-200">
                  {t.hero.passionValue}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  {t.hero.approachLabel}
                </p>
                <p className="text-sm font-medium text-zinc-200">
                  {t.hero.approachValue}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured App Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer border glow */}
              <div 
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-yellow-400/30 via-zinc-800/30 to-zinc-900/20 blur-sm" 
                aria-hidden="true" 
              />

              {/* Main Card */}
              <div className="relative bg-[#0d0d12] border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden text-start">
                {/* Header of the featured card */}
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredApp.iconImage}
                      alt={`${featuredApp.name} Official Icon`}
                      className="w-12 h-12 rounded-xl aspect-square object-contain bg-black border border-zinc-700/60 shadow-md shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight">
                        {featuredApp.name}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
                        <span>{isRTL ? 'تطبيق أندرويد' : featuredApp.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-yellow-400 font-medium font-mono">{featuredApp.version}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 rounded">
                    {t.hero.apkBadge}
                  </span>
                </div>

                {/* Real Application Phone Preview */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-800/90 bg-[#09090d] mb-5 group flex items-center justify-center p-3">
                  <div className="relative max-h-56 w-auto overflow-hidden rounded-lg shadow-xl border border-zinc-800">
                    <img
                      src={featuredApp.bannerImage}
                      alt={`${featuredApp.name} Real Application Screenshot`}
                      className="h-52 sm:h-56 w-auto object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#09090d] to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-zinc-300">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
                      {t.hero.liveAndroid}
                    </span>
                    <span className="text-zinc-400 font-mono">{featuredApp.apkSize}</span>
                  </div>
                </div>

                {/* Tagline & Key points */}
                <p className="text-sm text-zinc-300 line-clamp-2 mb-5">
                  {isRTL
                    ? 'تطبيق كشاف عصري وسهل الاستخدام يوفر أدوات الإضاءة الأساسية في مكان واحد.'
                    : featuredApp.description}
                </p>

                {/* Action in Card */}
                <button
                  onClick={() => onViewProjectClick(featuredApp.id)}
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.hero.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
