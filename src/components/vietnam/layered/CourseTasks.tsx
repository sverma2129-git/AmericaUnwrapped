'use client';

import React, { useId, useState } from 'react';
import type { CourseId, CourseTask } from '@/types/vietnam';
import { CITATION_REGISTRY } from '@/data/vietnam/sourceRegistry';
import { isVerbatimQuotation } from '@/lib/citations';
import CitationMarker from '@/components/common/CitationMarker';
import Icon from '@/components/common/Icon';
import InlineCheck from './InlineCheck';
import { COURSE_LABEL, CourseToggle, useCourse } from './CourseContext';

const MIN_WORDS = 15;
const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function TaskCard({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-3xl">
      <h4 className="font-display text-lg font-semibold text-ink leading-snug">{title}</h4>
      <p className="meta mt-1 text-ink-soft">{kicker}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SourceCard({ citationId }: { citationId: string }) {
  const c = CITATION_REGISTRY[citationId];
  if (!c || !isVerbatimQuotation(c)) return null;
  return (
    <figure className="bg-parchment rounded-sm p-5">
      <blockquote className="font-display text-base sm:text-lg text-ink leading-snug">&ldquo;{c.exactQuotation}&rdquo;</blockquote>
      <figcaption className="mt-2 text-xs text-ink-muted">
        {c.authorOrInstitution}, {c.title}, {c.date}
        <CitationMarker id={c.id} />
      </figcaption>
    </figure>
  );
}

function WritingBox({ label, value, onChange, rows = 4 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your answer here. It stays on this page and is not sent anywhere."
        className="w-full rounded-sm border border-rule bg-surface p-3 text-sm text-ink leading-relaxed focus:border-rule-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      />
    </div>
  );
}

function RevealButton({ ready, onClick, children }: { ready: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      disabled={!ready}
      onClick={onClick}
      className="mt-3 inline-flex items-center px-4 py-2 rounded-sm text-sm font-semibold border transition-colors disabled:cursor-not-allowed disabled:opacity-50 enabled:cursor-pointer border-ink bg-ink text-paper enabled:hover:bg-ink/90"
    >
      {children}
    </button>
  );
}

function OrderTask({ task }: { task: Extract<CourseTask, { kind: 'order' }> }) {
  // Deterministic starting order (reversed, then rotated) so server and client render the same.
  const start = [...task.items.keys()].reverse();
  start.push(start.shift()!);
  const [order, setOrder] = useState(start);
  const [checked, setChecked] = useState(false);
  const move = (pos: number, delta: number) => {
    const next = [...order];
    const target = pos + delta;
    if (target < 0 || target >= next.length) return;
    [next[pos], next[target]] = [next[target], next[pos]];
    setOrder(next);
    setChecked(false);
  };
  const correct = order.filter((item, pos) => item === pos).length;
  return (
    <TaskCard kicker="Put it in order" title={task.prompt}>
      <ol className="space-y-2">
        {order.map((item, pos) => {
          const right = checked && item === pos;
          const wrong = checked && item !== pos;
          return (
            <li
              key={item}
              className={`flex items-center gap-3 rounded-sm border px-3 py-2.5 text-sm ${ right ? 'border-success-rule bg-success-tint' : wrong ? 'border-brand-rule bg-brand-tint' : 'border-rule bg-surface' }`}
            >
              <span className="w-6 text-center font-semibold text-ink-soft tabular-nums">{pos + 1}</span>
              <span className="flex-1 text-ink">
                {task.items[item].label}
                {checked && <span className="ml-2 text-xs text-ink-soft">({task.items[item].date})</span>}
              </span>
              <span className="flex gap-1">
                <button type="button" onClick={() => move(pos, -1)} disabled={pos === 0} aria-label={`Move "${task.items[item].label}" earlier`} className="w-8 h-8 rounded-sm border border-rule text-ink-muted enabled:hover:text-ink enabled:cursor-pointer disabled:opacity-30">
                  <Icon name="chevronUp" className="w-4 h-4 inline" />
                </button>
                <button type="button" onClick={() => move(pos, 1)} disabled={pos === order.length - 1} aria-label={`Move "${task.items[item].label}" later`} className="w-8 h-8 rounded-sm border border-rule text-ink-muted enabled:hover:text-ink enabled:cursor-pointer disabled:opacity-30">
                  <Icon name="chevronDown" className="w-4 h-4 inline" />
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      <RevealButton ready onClick={() => setChecked(true)}>
        Check my order
      </RevealButton>
      <p aria-live="polite" className="mt-2 text-sm text-ink-muted">
        {checked && (correct === order.length ? 'All in the right order.' : `${correct} of ${order.length} in the right place. Move the red ones and check again.`)}
      </p>
    </TaskCard>
  );
}

function ExplainTask({ task }: { task: Extract<CourseTask, { kind: 'explain' }> }) {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  const words = wordCount(text);
  return (
    <TaskCard kicker="Explain in your own words" title={task.prompt}>
      <p className="text-sm text-ink-muted mb-2">Stuck? Start with one of these:</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {task.starters.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setText((t) => (t ? `${t} ${s}` : s))}
            className="px-3 py-1.5 rounded-sm border border-rule bg-parchment-light text-xs text-ink-muted hover:text-ink hover:border-rule-strong cursor-pointer"
          >
            {s}&hellip;
          </button>
        ))}
      </div>
      <WritingBox label={task.prompt} value={text} onChange={setText} />
      <RevealButton ready={words >= MIN_WORDS} onClick={() => setShown(true)}>
        {words >= MIN_WORDS ? 'Compare with a model answer' : `Write at least ${MIN_WORDS} words to compare (${words} so far)`}
      </RevealButton>
      {shown && (
        <div className="mt-4 rounded-sm bg-surface p-4 text-sm">
          <p className="font-semibold text-ink mb-1.5">A strong answer:</p>
          <ul className="list-disc pl-5 space-y-1 text-ink-muted">
            {task.checklist.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="font-semibold text-ink mt-3 mb-1">Model answer</p>
          <p className="text-ink leading-relaxed">{task.model}</p>
        </div>
      )}
    </TaskCard>
  );
}

function StimulusTask({ task }: { task: Extract<CourseTask, { kind: 'stimulus' }> }) {
  return (
    <TaskCard kicker="Source-based questions" title={task.intro}>
      <SourceCard citationId={task.citationId} />
      <div className="mt-4 space-y-3">
        {task.questions.map((q) => (
          <InlineCheck key={q.id} question={q} />
        ))}
      </div>
    </TaskCard>
  );
}

function SaqPart({ part }: { part: Extract<CourseTask, { kind: 'saq' }>['parts'][number] }) {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);
  return (
    <li>
      <p className="text-sm text-ink mb-2">
        <strong className="font-semibold">({part.label})</strong> {part.prompt}
      </p>
      <WritingBox label={`Part ${part.label}`} value={text} onChange={setText} rows={3} />
      <RevealButton ready={wordCount(text) >= 8} onClick={() => setShown(true)}>
        Show a model answer
      </RevealButton>
      {shown && <p className="mt-3 rounded-sm bg-surface p-3 text-sm text-ink leading-relaxed">{part.model}</p>}
    </li>
  );
}

function SaqTask({ task }: { task: Extract<CourseTask, { kind: 'saq' }> }) {
  return (
    <TaskCard kicker="Short-answer question" title={task.intro}>
      <SourceCard citationId={task.citationId} />
      <ol className="mt-4 space-y-5">
        {task.parts.map((p) => (
          <SaqPart key={p.label} part={p} />
        ))}
      </ol>
    </TaskCard>
  );
}

function LeqTask({ task }: { task: Extract<CourseTask, { kind: 'leq' }> }) {
  const [notes, setNotes] = useState<Record<string, string>>({});
  return (
    <TaskCard kicker={`Long essay plan: ${task.reasoning}`} title={task.prompt}>
      <p className="text-sm text-ink-muted mb-4">Plan the essay before you write it. Each box is one part of a strong response.</p>
      <ol className="space-y-4">
        {task.scaffold.map((s) => (
          <li key={s.label}>
            <p className="text-sm font-semibold text-ink">{s.label}</p>
            <p className="text-xs text-ink-muted mb-1.5">{s.hint}</p>
            <WritingBox label={s.label} value={notes[s.label] ?? ''} onChange={(v) => setNotes((n) => ({ ...n, [s.label]: v }))} rows={2} />
          </li>
        ))}
      </ol>
    </TaskCard>
  );
}

function Task({ task }: { task: CourseTask }) {
  switch (task.kind) {
    case 'order':
      return <OrderTask task={task} />;
    case 'explain':
      return <ExplainTask task={task} />;
    case 'stimulus':
      return <StimulusTask task={task} />;
    case 'saq':
      return <SaqTask task={task} />;
    case 'leq':
      return <LeqTask task={task} />;
  }
}

/** Activities for the student's course; asks them to choose a course first. */
export default function CourseTasks({ tasks }: { tasks: Record<CourseId, CourseTask[]> }) {
  const { course } = useCourse();
  if (!course) {
    return (
      <div className="bg-parchment rounded-sm p-6 max-w-3xl">
        <p className="text-sm text-ink mb-3">Which course are you studying for? The activities are different for each.</p>
        <CourseToggle />
      </div>
    );
  }
  return (
    <div className="space-y-12">
      <p className="text-sm text-ink-muted">
        Showing activities for <strong className="text-ink">{COURSE_LABEL[course]}</strong>. Switch at the top of the page.
      </p>
      {tasks[course].map((t, i) => (
        <Task key={i} task={t} />
      ))}
    </div>
  );
}

/** The chapter's learning objectives for the chosen course (both when none is chosen). */
export function CourseObjectives({ objectives }: { objectives: Record<CourseId, string[]> }) {
  const { course } = useCourse();
  const ids = course ? [course] : (Object.keys(objectives) as CourseId[]);
  return (
    <div className={`grid gap-6 ${ids.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {ids.map((id) => (
        <div key={id}>
          <h3 className="mb-2 text-sm font-bold text-ink">What you should be able to do in {COURSE_LABEL[id]}</h3>
          <ul className="space-y-1.5 text-sm text-ink-muted leading-relaxed list-disc pl-5">
            {objectives[id].map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
