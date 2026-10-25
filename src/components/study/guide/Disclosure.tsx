import React from 'react';

interface DisclosureProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  as?: 'div' | 'article';
  /** Larger padding and top-aligned toggle, used for long prompt headings. */
  size?: 'md' | 'lg';
  defaultOpen?: boolean;
}

/**
 * Native <details>-based collapsible section. Works without JavaScript and is
 * keyboard/screen-reader accessible out of the box.
 */
export default function Disclosure({
  summary,
  children,
  as: Wrapper = 'div',
  size = 'md',
  defaultOpen = true,
}: DisclosureProps) {
  const large = size === 'lg';
  return (
    <Wrapper className="bg-parchment border border-rule rounded-xs overflow-hidden">
      <details open={defaultOpen} className="group">
        <summary
          className={`list-none [&::-webkit-details-marker]:hidden w-full text-left flex justify-between gap-4 hover:bg-parchment-light cursor-pointer transition-colors ${
            large ? 'p-5 sm:p-6 items-start' : 'p-4 sm:p-5 items-center'
          }`}
        >
          <div className={large ? 'space-y-2' : 'space-y-1'}>{summary}</div>
          <div className={`flex items-center gap-2 shrink-0 ${large ? 'mt-1' : ''}`} aria-hidden="true">
            <span className="text-xs text-ink-muted hidden sm:inline">
              <span className="group-open:hidden">Expand</span>
              <span className="hidden group-open:inline">Collapse</span>
            </span>
            <span className="w-6 h-6 rounded-full border border-rule bg-white flex items-center justify-center text-sm font-bold text-brand">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </div>
        </summary>
        <div className={`pt-0 border-t border-rule/60 ${large ? 'p-6 space-y-4' : 'p-5'}`}>{children}</div>
      </details>
    </Wrapper>
  );
}
