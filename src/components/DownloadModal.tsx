import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle
} from 'lucide-react';
import { ProjectItem } from '../config/portfolioData';
import { 
  calculateProgress, 
  COUNTDOWN_TOTAL_SECONDS, 
  DownloadFlowState 
} from '../utils/countdown';
import { useLanguage } from '../context/LanguageContext';

interface DownloadModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ project, isOpen, onClose }: DownloadModalProps) {
  const { t, isRTL } = useLanguage();
  const [secondsRemaining, setSecondsRemaining] = useState<number>(COUNTDOWN_TOTAL_SECONDS);
  const [flowState, setFlowState] = useState<DownloadFlowState>('counting');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or reset countdown whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setSecondsRemaining(COUNTDOWN_TOTAL_SECONDS);
      setFlowState('counting');
      document.body.style.overflow = 'hidden';

      // Start tick
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setFlowState('ready');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to cancel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCancel = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setFlowState('cancelled');
    onClose();
  };

  if (!isOpen || !project) return null;

  const progressPercent = calculateProgress(secondsRemaining, COUNTDOWN_TOTAL_SECONDS);

  // SVG Circular progress math
  const strokeWidth = 8;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCancel();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0d0d12] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-center flex flex-col p-6 sm:p-8">
        {/* Top bar with close/cancel */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 text-start">
          <div className="flex items-center gap-3">
            <img
              src={project.iconImage}
              alt={project.name}
              className="w-10 h-10 rounded-xl aspect-square object-contain bg-black border border-zinc-700 shrink-0"
            />
            <div>
              <h3 id="download-modal-title" className="text-sm font-bold text-white">
                {project.name}
              </h3>
              <p className="text-xs text-yellow-400 font-mono">
                {isRTL ? 'حزمة أندرويد APK' : project.download.label} · {project.version}
              </p>
            </div>
          </div>

          <button
            onClick={handleCancel}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
            aria-label="Cancel download and close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Flow View */}
        {flowState === 'counting' ? (
          <div className="space-y-6">
            {/* Circular Progress Ring with Countdown Seconds */}
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                {/* Track circle */}
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  className="stroke-zinc-800/80"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Active progress circle */}
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  className="stroke-yellow-400 transition-all duration-1000 ease-linear"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Center Counter */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                  {secondsRemaining}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                  {t.countdownModal.seconds}
                </span>
              </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercent}%` }}
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            {/* Explanatory notice */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white tracking-tight">
                {t.countdownModal.preparingTitle}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                {t.countdownModal.preparingDesc}
              </p>
              <p className="text-[11px] text-zinc-400">
                {t.countdownModal.preparingNote}
              </p>
            </div>

            {/* Cancel action */}
            <div className="pt-2">
              <button
                onClick={handleCancel}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
              >
                {t.countdownModal.cancelBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Ready State */
          <div className="space-y-6 py-2 animate-in zoom-in-95 duration-200">
            {/* Big Success Checkmark */}
            <div className="w-20 h-20 mx-auto rounded-full bg-yellow-400/10 border-2 border-yellow-400/40 flex items-center justify-center text-yellow-400 shadow-xl shadow-yellow-400/10">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-white tracking-tight">
                {t.countdownModal.readyTitle}
              </h4>
              <p className="text-sm text-zinc-300 max-w-xs mx-auto">
                {t.countdownModal.readyDescPrefix}{' '}
                <span className="text-white font-medium font-mono">{project.download.fileName}</span>{' '}
                {t.countdownModal.readyDescSuffix}
              </p>
            </div>

            {/* File Verification Card */}
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-start text-xs space-y-1 font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>{t.countdownModal.formatLabel}</span>
                <span className="text-zinc-200">{isRTL ? 'حزمة أندرويد APK' : 'Android APK'} ({project.apkSize})</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>{t.countdownModal.destinationLabel}</span>
                <span className="text-yellow-400">{t.countdownModal.destinationValue}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleCancel}
                className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors order-2 sm:order-1 cursor-pointer"
              >
                {t.countdownModal.closeBtn}
              </button>
              
              {/* Primary: Continue to MediaFire */}
              <a
                href={project.download.mediaFireUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setTimeout(() => onClose(), 400);
                }}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all shadow-lg shadow-yellow-400/25 order-1 sm:order-2 cursor-pointer text-center select-none"
                aria-label="Continue to MediaFire to download AYOUB Flash-Lite APK"
              >
                <span>{t.countdownModal.continueBtn}</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            <p className="text-[11px] text-zinc-400 pt-1">
              {t.countdownModal.externalNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
