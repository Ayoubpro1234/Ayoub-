import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProgress,
  formatSeconds,
  isValidDownloadUrl,
  isMediaFireUrl,
  COUNTDOWN_TOTAL_SECONDS,
} from './countdown';

test('COUNTDOWN_TOTAL_SECONDS is exactly 10 seconds as specified in requirements', () => {
  assert.equal(COUNTDOWN_TOTAL_SECONDS, 10);
});

test('calculateProgress returns accurate percentage progression', () => {
  assert.equal(calculateProgress(10, 10), 0);
  assert.equal(calculateProgress(5, 10), 50);
  assert.equal(calculateProgress(0, 10), 100);
  assert.equal(calculateProgress(2, 10), 80);
});

test('calculateProgress handles clamping and boundaries', () => {
  assert.equal(calculateProgress(-5, 10), 100);
  assert.equal(calculateProgress(15, 10), 0);
  assert.equal(calculateProgress(0, 0), 100);
});

test('formatSeconds pads and appends unit correctly', () => {
  assert.equal(formatSeconds(10), '10s');
  assert.equal(formatSeconds(9), '09s');
  assert.equal(formatSeconds(0), '00s');
  assert.equal(formatSeconds(-1), '00s');
  assert.equal(formatSeconds(4.8), '04s');
});

test('isValidDownloadUrl validates legitimate web addresses', () => {
  assert.equal(isValidDownloadUrl('https://www.mediafire.com/file/xyz/app.apk'), true);
  assert.equal(isValidDownloadUrl('http://example.com/file.apk'), true);
  assert.equal(isValidDownloadUrl(''), false);
  assert.equal(isValidDownloadUrl('not-a-url'), false);
  assert.equal(isValidDownloadUrl('javascript:alert(1)'), false);
});

test('isMediaFireUrl detects MediaFire domain properly', () => {
  assert.equal(isMediaFireUrl('https://www.mediafire.com/file/demo/flashlite.apk'), true);
  assert.equal(isMediaFireUrl('https://mediafire.com/download'), true);
  assert.equal(isMediaFireUrl('https://www.mediafire.com/file/gvi9ffm1cmfzxsx/AYOUB+Flash-Lite.apk/file'), true);
  assert.equal(isMediaFireUrl('https://github.com/releases'), false);
  assert.equal(isMediaFireUrl(''), false);
});

test('Validates real project configuration URLs', () => {
  assert.equal(isValidDownloadUrl('https://www.mediafire.com/file/gvi9ffm1cmfzxsx/AYOUB+Flash-Lite.apk/file'), true);
  assert.equal(isValidDownloadUrl('https://github.com/Ayoubpro1234/AYOUB-flach-lite'), true);
  assert.equal(isValidDownloadUrl('https://www.instagram.com/ayoub.apex/'), true);
});
