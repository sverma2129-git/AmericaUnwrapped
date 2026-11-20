import React from 'react';
import { SidePerspective } from '@/types/vietnam';

interface DualPerspectiveViewerProps {
  washington: SidePerspective;
  hanoi: SidePerspective;
}

function Side({ place, people, side }: { place: string; people: string; side: SidePerspective }) {
  return (
    <section aria-label={place} className="min-w-0">
      <h3 className="font-display text-xl font-bold text-ink">{place}</h3>
      <p className="mt-1 text-sm text-ink-soft">
        {people}: {side.keyActors.join(', ')}
      </p>

      <h4 className="mt-6 text-sm font-bold text-ink">What they wanted</h4>
      <p className="mt-1 font-serif text-lg leading-snug text-ink">{side.strategicObjective}</p>

      <h4 className="mt-6 text-sm font-bold text-ink">What they assumed</h4>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-ink-muted marker:text-brand">
        {side.underlyingAssumptions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="mt-6 text-sm font-bold text-ink">What they argued about</h4>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-ink-muted marker:text-brand">
        {side.internalDebates.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

/** Washington and Hanoi side by side, judged by the same questions. */
export default function DualPerspectiveViewer({ washington, hanoi }: DualPerspectiveViewerProps) {
  return (
    <div className="grid gap-x-12 gap-y-12 pt-8 md:grid-cols-2">
      <Side place="Washington" people="Who decided" side={washington} />
      <Side place="Hanoi" people="Who decided" side={hanoi} />
    </div>
  );
}
