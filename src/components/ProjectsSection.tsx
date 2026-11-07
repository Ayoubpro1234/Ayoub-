import { ArrowRight, ArrowDownToLine, Smartphone, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../config/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  onViewDetails: (project: ProjectItem) => void;
  onDownloadApk: (project: ProjectItem) => void;
}

export function ProjectsSection({ onViewDetails, onDownloadApk }: ProjectsSectionProps) {
  const { projects } = PORTFOLIO_DATA;
  const { t, isRTL } = useLanguage();

  return (
    <section id="projects" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-start">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-yellow-400 mb-2">
              {t.projects.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              {t.projects.subtitle}
            </p>
          </div>
          <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>
              {isRTL ? `١ ${t.projects.publishedCount}` : `${projects.length} ${t.projects.publishedCount}${projects.length > 1 ? 's' : ''}`}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b0b0f] border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Visual Banner & Mockup Container */}
                <div className="lg:col-span-5 relative bg-[#09090d] flex items-center justify-center min-h-[300px] lg:min-h-[420px] p-6 overflow-hidden group border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-zinc-800/80">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border border-zinc-800">
                    <img
                      src={project.bannerImage}
                      alt={`${project.name} Real Interface`}
                      className="max-h-[340px] sm:max-h-[380px] w-auto object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Category and platform badge */}
                  <div className="absolute top-4 start-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium text-zinc-200 shadow-md">
                    <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{isRTL ? 'تطبيق أندرويد' : project.category}</span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs text-zinc-300">
                    <span className="font-mono bg-black/80 px-2.5 py-1 rounded border border-zinc-800 text-yellow-400 shadow-sm">
                      {project.version}
                    </span>
                    <span className="font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-zinc-800">
                      {isRTL ? 'أندرويد 7.0+' : project.minAndroid}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 sm:ps-0 flex flex-col justify-between text-start">
                  <div>
                    {/* Header with App Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={project.iconImage}
                        alt={`${project.name} Official Icon`}
                        className="w-14 h-14 rounded-2xl aspect-square object-contain bg-black border border-zinc-700/80 shadow-md shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {project.name}
                        </h3>
                        <p className="text-xs text-yellow-400 font-medium mt-0.5">
                          {isRTL
                            ? 'أدوات إضاءة متطورة وسهلة الاستخدام في مكان واحد'
                            : project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-base leading-relaxed mb-6">
                      {isRTL
                        ? 'تطبيق كشاف عصري وسهل الاستخدام صُمم ليوفر أدوات إضاءة مريحة وعملية في مكان واحد.'
                        : project.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                        {t.projects.keyFeaturesLabel}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
                        {project.features.map((feature) => {
                          const localizedFeature = t.projects.features[feature] || feature;
                          return (
                            <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                              <span className="font-medium">{localizedFeature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onViewDetails(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 hover:text-white border border-zinc-700/70 transition-all cursor-pointer"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>

                    <button
                      onClick={() => onDownloadApk(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-md shadow-yellow-400/20 cursor-pointer"
                    >
                      <ArrowDownToLine className="w-4 h-4 stroke-[2.5]" />
                      <span>{t.projects.downloadApk}</span>
                    </button>

                    <span className="text-xs text-zinc-400 font-mono ms-auto hidden sm:inline-block">
                      {t.projects.sizeLabel} {project.apkSize}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scalability Note Card */}
        <div className="mt-12 text-center p-6 rounded-xl border border-zinc-800/60 bg-zinc-950/40 text-xs text-zinc-400">
          <p>{t.projects.scalabilityNote}</p>
        </div>
      </div>
    </section>
  );
}
