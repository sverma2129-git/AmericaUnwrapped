/** "Label: explanation" takeaways render with the label emphasized. */
export function splitTakeaway(text: string): { label: string | null; text: string } {
  const idx = text.indexOf(':');
  return idx > 0 && idx < 40 ? { label: text.slice(0, idx), text: text.slice(idx + 1).trim() } : { label: null, text };
}
