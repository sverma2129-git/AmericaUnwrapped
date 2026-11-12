'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which scroll step is being read. The reading line sits mid-screen when
 * the pinned figure is beside the steps, and just below the figure when it sits
 * above them on narrow screens. Measuring a handful of cards is cheap, so this
 * runs on every scroll event rather than through requestAnimationFrame (which
 * pauses in background tabs).
 */
export function useActiveStep() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const figureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)');
    const update = () => {
      const figureBottom = figureRef.current?.getBoundingClientRect().bottom ?? 0;
      const line = wide.matches
        ? window.innerHeight * 0.55
        : figureBottom + (window.innerHeight - figureBottom) * 0.4;
      let next = 0;
      stepRefs.current.forEach((el, i) => {
        if (el && el.firstElementChild!.getBoundingClientRect().top < line) next = i;
      });
      setActive(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const stepRef = (i: number) => (el: HTMLLIElement | null) => {
    stepRefs.current[i] = el;
  };

  return { active, stepRef, figureRef };
}
