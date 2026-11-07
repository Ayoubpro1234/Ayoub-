import { useState, useEffect } from 'react';
import { 
  X, 
  ArrowDownToLine, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  ImageIcon
} from 'lucide-react';
import { ProjectItem } from '../config/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDownloadClick: (project: ProjectItem) => void;
}

type SimulatorMode = 'flashlight' | 'lantern' | 'strobe' | 'sos';

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onDownloadClick,
}: ProjectDetailModalProps) {
  const { t, isRTL } = useLanguage();

  // Interactive Simulator State
  const [simActive, setSimActive] = useState(false);
  const [simMode, setSimMode] = useState<SimulatorMode>('flashlight');
  const [strobeSpeed, setStrobeSpeed] = useState(5); // Hz
  const [batteryLevel] = useState(88);
  const [strobeFlash, setStrobeFlash] = useState(false);

  // Real Screenshot Gallery State
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setActiveScreenshotIdx(0);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Strobe effect simulator loop
  useEffect(() => {
    if (!simActive || (simMode !== 'strobe' && simMode !== 'sos')) {
      setStrobeFlash(false);
      return;
    }

    if (simMode === 'strobe') {
      const intervalMs = Math.max(80, 1000 / strobeSpeed);
      const interval = setInterval(() => {
        setStrobeFlash((prev) => !prev);
      }, intervalMs);
      return () => clearInterval(interval);
    }

    if (simMode === 'sos') {
      let step = 0;
      const sosPattern = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0];
      const interval = setInterval(() => {
        const val = sosPattern[step % sosPattern.length];
        setStrobeFlash(val === 1);
        step++;
      }, 160);
      return () => clearInterval(interval);
    }
  }, [simActive, simMode, strobeSpeed]);

  if (!isOpen || !project) return null;

  const screenshots = project.screenshots || [];
  const currentScreenshotRaw = screenshots[activeScreenshotIdx] || {
    url: project.bannerImage,
    title: 'Application Preview',
    description: project.description,
  };

  const currentScreenshot = {
    url: currentScreenshotRaw.url,
    title: t.detailModal.screenshotCaptions[activeScreenshotIdx]?.title || currentScreenshotRaw.title,
    description: t.detailModal.screenshotCaptions[activeScreenshotIdx]?.description || currentScreenshotRaw.description,
  };

  const handleNextScreenshot = () => {
    if (screenshots.length <= 1) return;
    setActiveScreenshotIdx((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrevScreenshot = () => {
    if (screenshots.length <= 1) return;
    setActiveScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#0d0d12] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-start">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800 bg-zinc-950/70">
          <div className="flex items-center gap-3">
            <img
              src={project.iconImage}
              alt={project.name}
              className="w-10 h-10 rounded-xl aspect-square object-contain bg-black border border-zinc-700 shrink-0"
            />
            <div>
              <h3 id="modal-title" className="text-lg font-bold text-white tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs text-zinc-400">
                {isRTL ? 'تطبيق أندرويد' : project.category} · <span className="text-yellow-400 font-mono">{project.version}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            aria-label="Close Project Details Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-zinc-800/80">
          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-yellow-400 font-semibold">
              {t.detailModal.overviewTitle}
            </h4>
            <p className="text-zinc-200 text-base leading-relaxed">
              {isRTL
                ? 'تطبيق كشاف عصري وسهل الاستخدام صُمم ليوفر أدوات إضاءة متكاملة ومريحة في مكان واحد لهواتف أندرويد.'
                : project.description}
            </p>
          </div>

          {/* Real Application Screenshot Gallery */}
          {screenshots.length > 0 && (
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-yellow-400 font-semibold flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{t.detailModal.screenshotsBadge}</span>
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {t.detailModal.screenshotsSubtitle}
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-yellow-400">
                  {activeScreenshotIdx + 1} / {screenshots.length}
                </span>
              </div>

              {/* Main Active Screenshot Viewer Frame */}
              <div className="relative rounded-2xl border border-zinc-800 bg-[#07070a] p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative flex items-center justify-center w-full min-h-[340px] sm:min-h-[420px]">
                  {/* Previous Button */}
                  <button
                    onClick={isRTL ? handleNextScreenshot : handlePrevScreenshot}
                    className="absolute start-2 sm:start-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-zinc-700/80 hover:border-yellow-400/60 backdrop-blur-sm transition-all cursor-pointer shadow-lg active:scale-95"
                    aria-label={t.detailModal.prevShot}
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  {/* Active Phone Display */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800 max-h-[380px] sm:max-h-[440px] w-auto">
                    <img
                      src={currentScreenshot.url}
                      alt={currentScreenshot.title}
                      className="max-h-[380px] sm:max-h-[440px] w-auto object-contain mx-auto select-none transition-all duration-300"
                    />
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={isRTL ? handlePrevScreenshot : handleNextScreenshot}
                    className="absolute end-2 sm:end-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-zinc-700/80 hover:border-yellow-400/60 backdrop-blur-sm transition-all cursor-pointer shadow-lg active:scale-95"
                    aria-label={t.detailModal.nextShot}
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>
                </div>

                {/* Screenshot Caption */}
                <div className="w-full mt-4 pt-3 border-t border-zinc-800/80 text-center">
                  <p className="text-sm font-semibold text-white">
                    {currentScreenshot.title}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {currentScreenshot.description}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                {screenshots.map((shot, idx) => {
                  const shotTitle = t.detailModal.screenshotCaptions[idx]?.title || shot.title;
                  return (
                    <button
                      key={shot.id}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative rounded-xl overflow-hidden border p-1 transition-all cursor-pointer bg-[#09090d] flex flex-col items-center text-center ${
                        activeScreenshotIdx === idx
                          ? 'border-yellow-400 ring-2 ring-yellow-400/20 shadow-md shadow-yellow-400/10'
                          : 'border-zinc-800 hover:border-zinc-700 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`View screenshot ${idx + 1}: ${shotTitle}`}
                    >
                      <div className="h-14 sm:h-20 w-full overflow-hidden rounded-lg flex items-center justify-center bg-black">
                        <img
                          src={shot.url}
                          alt={shotTitle}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <span className="text-[10px] font-medium text-zinc-300 truncate w-full mt-1.5 px-0.5 hidden sm:block">
                        {shotTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive Flashlight Simulator Pane */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-yellow-400 font-semibold">
                  {t.detailModal.interactiveBadge}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {t.detailModal.interactiveSubtitle}
                </p>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                {t.detailModal.demoTag}
              </span>
            </div>

            {/* Simulator Device Shell */}
            <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center">
              {/* Device Mode Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-md mb-6">
                {(['flashlight', 'lantern', 'strobe', 'sos'] as SimulatorMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      setSimMode(mode);
                      setSimActive(true);
                    }}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      simMode === mode
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-sm shadow-yellow-400/30'
                        : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {t.detailModal.modes[mode]}
                  </button>
                ))}
              </div>

              {/* Virtual Light Beam Display */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                {/* Glow rings */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-200 ${
                    simActive
                      ? simMode === 'strobe' || simMode === 'sos'
                        ? strobeFlash
                          ? 'bg-yellow-400/30 blur-2xl scale-110'
                          : 'bg-zinc-900/40 blur-none scale-100'
                        : simMode === 'lantern'
                        ? 'bg-amber-300/25 blur-3xl scale-125'
                        : 'bg-yellow-400/25 blur-2xl scale-110'
                      : 'bg-transparent'
                  }`}
                />

                {/* Main Action Toggle Button in Simulator */}
                <button
                  onClick={() => setSimActive(!simActive)}
                  aria-label={simActive ? t.detailModal.powerOff : t.detailModal.powerOn}
                  className={`relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 flex flex-col items-center justify-center transition-all cursor-pointer ${
                    simActive
                      ? simMode === 'strobe' || simMode === 'sos'
                        ? strobeFlash
                          ? 'bg-yellow-300 text-black border-yellow-200 shadow-2xl shadow-yellow-400'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-700'
                        : simMode === 'lantern'
                        ? 'bg-amber-100 text-black border-amber-300 shadow-2xl shadow-amber-200/50'
                        : 'bg-yellow-400 text-black border-yellow-300 shadow-2xl shadow-yellow-400'
                      : 'bg-zinc-900/90 text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  <Zap className={`w-10 h-10 mb-1 ${simActive ? 'fill-current' : ''}`} />
                  <span className="text-xs font-bold tracking-wider">
                    {simActive ? t.detailModal.powerOn : t.detailModal.powerOff}
                  </span>
                  <span className="text-[10px] font-mono mt-0.5 opacity-80">
                    {t.detailModal.modes[simMode]}
                  </span>
                </button>
              </div>

              {/* Extra Controls based on active mode */}
              {simMode === 'strobe' && (
                <div className="w-full max-w-xs mb-4 text-center">
                  <div className="flex justify-between text-xs text-zinc-400 mb-1.5 font-mono">
                    <span>{t.detailModal.frequencyLabel}</span>
                    <span className="text-yellow-400">{strobeSpeed} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={strobeSpeed}
                    onChange={(e) => setStrobeSpeed(Number(e.target.value))}
                    className="w-full accent-yellow-400 cursor-pointer"
                    aria-label="Strobe frequency slider"
                  />
                </div>
              )}

              {/* Status info strip */}
              <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  {t.detailModal.batteryLabel} {batteryLevel}%
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                  {t.detailModal.thermalSafe}
                </span>
              </div>
            </div>
          </div>

          {/* Deep Feature Breakdown */}
          <div className="pt-6 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-yellow-400 font-semibold">
              {t.detailModal.featureDeepDiveTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.detailModal.detailedFeatures.map((feat) => (
                <div key={feat.name} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <h5 className="text-sm font-semibold text-white">{feat.name}</h5>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="pt-6 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-yellow-400 font-semibold">
              {t.detailModal.specsTitle}
            </h4>
            <div className="rounded-xl border border-zinc-800 overflow-hidden">
              <dl className="divide-y divide-zinc-800/80 text-xs sm:text-sm">
                {t.detailModal.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-3 px-4 py-3 bg-zinc-950/40">
                    <dt className="text-zinc-400 font-medium">{spec.label}</dt>
                    <dd className="col-span-2 text-zinc-200 font-mono">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            {t.detailModal.signedPackageLabel} <span className="font-mono text-zinc-200">{project.download.fileName}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
            >
              {t.detailModal.closeBtn}
            </button>
            <button
              onClick={() => {
                onClose();
                onDownloadClick(project);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-md shadow-yellow-400/20 cursor-pointer"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2.5]" />
              <span>{t.detailModal.downloadApkBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
