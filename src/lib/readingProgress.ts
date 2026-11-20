'use client';

import { useSyncExternalStore } from 'react';

/**
 * Which chapters a student has read, kept only in this browser. A chapter
 * counts as read once the student scrolls most of the way through it.
 * Storage can be missing or blocked (private windows), so every access is
 * guarded and the site works the same without it.
 */
const KEY = 'america-unwrapped:vietnam:read-chapters';
const listeners = new Set<() => void>();
let cache: string | null = null;

function readRaw(): string {
  try {
    return window.localStorage.getItem(KEY) ?? '[]';
  } catch {
    return '[]';
  }
}

function snapshot(): string {
  if (cache === null) cache = readRaw();
  return cache;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

function parse(raw: string): string[] {
  try {
    const value = JSON.parse(raw);
    return Array.isArray(value) ? value.filter((v) => typeof v === 'string') : [];
  } catch {
    return [];
  }
}

export function markChapterRead(id: string) {
  const current = parse(snapshot());
  if (current.includes(id)) return;
  const next = JSON.stringify([...current, id]);
  try {
    window.localStorage.setItem(KEY, next);
  } catch {
    // Storage blocked: remember for this visit only.
  }
  cache = next;
  listeners.forEach((l) => l());
}

/** The ids of chapters this student has read. Empty on the server and on first paint. */
export function useReadChapters(): string[] {
  const raw = useSyncExternalStore(subscribe, snapshot, () => '[]');
  return parse(raw);
}
