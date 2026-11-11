'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { CourseId } from '@/types/vietnam';

const STORAGE_KEY = 'au-course';

export const COURSE_LABEL: Record<CourseId, string> = {
  // Generic label until the team confirms which course ("American History 1" or its sequel) covers this unit.
  ah1: 'U.S. History',
  apush: 'AP U.S. History',
};

interface CourseState {
  course: CourseId | null;
  setCourse: (course: CourseId) => void;
}

const CourseContext = createContext<CourseState>({ course: null, setCourse: () => {} });

/**
 * The student's course, remembered on this device only (no account, no
 * tracking). Storage can be unavailable, so every access is guarded and the
 * page works without it.
 */
export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [course, setCourseState] = useState<CourseId | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reading a client-only preference after hydration
      if (saved === 'ah1' || saved === 'apush') setCourseState(saved);
    } catch {
      // storage blocked: keep the default
    }
  }, []);

  const setCourse = (next: CourseId) => {
    setCourseState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage blocked: the choice lasts for this visit
    }
  };

  return <CourseContext.Provider value={{ course, setCourse }}>{children}</CourseContext.Provider>;
}

export function useCourse() {
  return useContext(CourseContext);
}

/** Segmented control for choosing a course. */
export function CourseToggle({ className = '' }: { className?: string }) {
  const { course, setCourse } = useCourse();
  return (
    <div role="radiogroup" aria-label="Your course" className={`inline-flex rounded-md border border-ink bg-surface p-0.5 ${className}`}>
      {(Object.keys(COURSE_LABEL) as CourseId[]).map((id) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={course === id}
          onClick={() => setCourse(id)}
          className={`px-4 py-1.5 rounded-sm text-sm font-medium transition-colors cursor-pointer ${ course === id ? 'bg-ink text-paper' : 'text-ink-muted hover:text-ink' }`}
        >
          {COURSE_LABEL[id]}
        </button>
      ))}
    </div>
  );
}
