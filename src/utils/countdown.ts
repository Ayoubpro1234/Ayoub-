/**
 * Countdown and Download utilities
 * Pure functions decoupled from React UI for deterministic testing and validation.
 */

export const COUNTDOWN_TOTAL_SECONDS = 10;

export type DownloadFlowState = 'idle' | 'counting' | 'ready' | 'cancelled';

/**
 * Calculates percentage completed (0 to 100).
 * At remaining = 10, completed = 0%.
 * At remaining = 0, completed = 100%.
 */
export function calculateProgress(remainingSeconds: number, totalSeconds: number = COUNTDOWN_TOTAL_SECONDS): number {
  if (totalSeconds <= 0) return 100;
  const clamped = Math.max(0, Math.min(totalSeconds, remainingSeconds));
  const elapsed = totalSeconds - clamped;
  return Math.round((elapsed / totalSeconds) * 100);
}

/**
 * Formats seconds remaining into human-readable string (e.g. "10s", "05s", "00s")
 */
export function formatSeconds(seconds: number): string {
  const clamped = Math.max(0, Math.floor(seconds));
  return `${clamped < 10 ? '0' : ''}${clamped}s`;
}

/**
 * Validates external download link.
 * Ensures URL is secure/valid and not empty.
 */
export function isValidDownloadUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Verifies if URL is a MediaFire link or compatible download hosting domain.
 */
export function isMediaFireUrl(url: string): boolean {
  if (!isValidDownloadUrl(url)) return false;
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return hostname.includes('mediafire.com');
  } catch {
    return false;
  }
}
