/**
 * Approximate Flesch-Kincaid grade level. Syllables are estimated from vowel
 * groups, so treat the result as a rough guide (±1 grade), not a precise score.
 */
function syllables(word: string): number {
  const w = [...word.toLowerCase()].filter((ch) => ch >= 'a' && ch <= 'z').join('');
  if (!w) return 0;
  let n = (w.match(/[aeiouy]+/g) ?? []).length;
  if (w.endsWith('e') && !w.endsWith('le') && n > 1) n -= 1;
  return Math.max(1, n);
}

export function fleschKincaidGrade(text: string): number {
  const clean = text.replace(/\[\^[^\]]+\]/g, '');
  const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.trim()).length;
  const words = clean.match(/[A-Za-z][A-Za-z'’-]*/g) ?? [];
  if (!sentences || !words.length) return 0;
  const syl = words.reduce((sum, w) => sum + syllables(w), 0);
  return 0.39 * (words.length / sentences) + 11.8 * (syl / words.length) - 15.59;
}
