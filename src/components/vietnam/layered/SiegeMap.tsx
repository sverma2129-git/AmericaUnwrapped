import React from 'react';
import type { SiegeMapState } from '@/types/vietnam';

const ORDER: SiegeMapState[] = ['valley', 'guns', 'outposts', 'ring', 'fall'];

// Schematic layout of the French strongpoints (north is up). Relative
// positions follow the standard campaign maps; distances are not to scale.
const POSITIONS = [
  { name: 'Gabrielle', x: 300, y: 72, labelDx: 14, fallsAt: 'outposts' },
  { name: 'Beatrice', x: 418, y: 118, labelDx: 14, fallsAt: 'outposts' },
  { name: 'Anne-Marie', x: 214, y: 150, labelDx: -14, fallsAt: 'fall' },
  { name: 'Huguette', x: 248, y: 236, labelDx: -14, fallsAt: 'fall' },
  { name: 'Dominique', x: 386, y: 214, labelDx: 14, fallsAt: 'fall' },
  { name: 'Eliane', x: 392, y: 292, labelDx: 14, fallsAt: 'fall' },
  { name: 'Claudine', x: 270, y: 314, labelDx: -14, fallsAt: 'fall' },
  { name: 'Isabelle', x: 312, y: 446, labelDx: 14, fallsAt: 'fall' },
] as const;

const GUNS = [
  [118, 112], [96, 262], [130, 410], [212, 36], [432, 40], [528, 128], [552, 284], [506, 424],
];

const HQ = { x: 322, y: 266 };

const STATE_LABEL: Record<SiegeMapState, string> = {
  valley: 'French strongpoints around the airstrip in the valley floor, surrounded by hills.',
  guns: 'Viet Minh artillery hidden on the hills on every side, with clear lines of fire into the valley.',
  outposts: 'The northern strongpoints Beatrice and Gabrielle have fallen.',
  ring: 'Viet Minh trenches encircle the central position and cut off Isabelle; the airstrip is closed.',
  fall: 'All French positions have fallen.',
};

export default function SiegeMap({ state }: { state: SiegeMapState }) {
  const level = ORDER.indexOf(state);
  const at = (s: SiegeMapState) => level >= ORDER.indexOf(s);
  const fade = 'transition-opacity duration-700 motion-reduce:transition-none';

  return (
    <svg
      viewBox="0 0 640 500"
      role="img"
      aria-label={`Map of Dien Bien Phu. ${STATE_LABEL[state]}`}
      className="w-full h-full"
    >
      <defs>
        <pattern id="dbp-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-brand)" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* Hills and valley floor */}
      <rect width="640" height="500" fill="var(--color-terrain)" />
      {[
        [300, 262],
        [262, 240],
        [228, 222],
      ].map(([rx, ry], i) => (
        <ellipse key={i} cx="320" cy="250" rx={rx} ry={ry} fill="none" stroke="var(--color-terrain-line)" strokeWidth="1" />
      ))}
      <ellipse cx="320" cy="252" rx="190" ry="206" fill="var(--color-paper)" stroke="var(--color-terrain-line)" strokeWidth="1.5" />
      <text x="34" y="486" className="fill-ink-soft" fontSize="12" letterSpacing="1.5">HILLS</text>
      <text x="470" y="486" className="fill-ink-soft" fontSize="12" letterSpacing="1.5">VALLEY FLOOR</text>

      {/* Nam Yum river */}
      <path
        d="M 338 8 C 330 90, 352 150, 336 220 S 318 330, 330 400 S 318 470, 322 500"
        fill="none"
        stroke="var(--color-water)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="346" y="168" fontSize="11" fill="var(--color-water)" fontStyle="italic">Nam Yum</text>

      {/* Airstrip */}
      <g>
        <rect x="290" y="132" width="16" height="146" rx="2" className="fill-ink" opacity={at('ring') ? 0.25 : 0.85} />
        <rect
          x="290" y="132" width="16" height="146" rx="2"
          fill="url(#dbp-hatch)"
          className={fade}
          opacity={at('ring') ? 1 : 0}
        />
        <text x="276" y="206" textAnchor="end" fontSize="12" className="fill-ink" fontWeight="600">
          Airstrip{at('ring') ? ' (closed)' : ''}
        </text>
      </g>

      {/* Lines of fire from the hills */}
      <g className={fade} opacity={at('guns') ? 1 : 0}>
        {GUNS.map(([x, y], i) => (
          <line
            key={i}
            x1={x} y1={y} x2={HQ.x} y2={HQ.y - 40}
            stroke="var(--color-brand)"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity={at('fall') ? 0.15 : 0.45}
          />
        ))}
      </g>

      {/* Trench ring */}
      <g className={fade} opacity={at('ring') ? 1 : 0}>
        <ellipse cx="318" cy="246" rx="128" ry="150" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeDasharray="10 6" />
        <circle cx="312" cy="446" r="34" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeDasharray="8 5" />
        <text x="452" y="372" fontSize="12" fill="var(--color-brand)" fontWeight="600">Siege trenches</text>
      </g>

      {/* French strongpoints */}
      {POSITIONS.map((p) => {
        const fallen = at(p.fallsAt);
        const anchor = p.labelDx < 0 ? 'end' : 'start';
        return (
          <g key={p.name}>
            <rect
              x={p.x - 8} y={p.y - 8} width="16" height="16" rx="2"
              className={`${fade} ${fallen ? 'fill-paper' : 'fill-ink'}`}
              stroke={fallen ? 'var(--color-brand)' : 'var(--color-ink)'}
              strokeWidth="2"
            />
            <path
              d={`M ${p.x - 5} ${p.y - 5} L ${p.x + 5} ${p.y + 5} M ${p.x + 5} ${p.y - 5} L ${p.x - 5} ${p.y + 5}`}
              stroke="var(--color-brand)"
              strokeWidth="2"
              className={fade}
              opacity={fallen ? 1 : 0}
            />
            <text
              x={p.x + p.labelDx} y={p.y + 4}
              textAnchor={anchor}
              fontSize="13"
              fontWeight="600"
              className={fallen ? 'fill-ink-soft' : 'fill-ink'}
            >
              {p.name}
            </text>
          </g>
        );
      })}

      {/* Command post */}
      <g>
        <circle cx={HQ.x} cy={HQ.y} r="7" className={at('fall') ? 'fill-brand' : 'fill-ink'} />
        <text x={HQ.x + 24} y={HQ.y + 2} fontSize="11" className="fill-ink-muted">Command post</text>
      </g>

      {/* Viet Minh artillery */}
      <g className={fade} opacity={at('guns') ? 1 : 0}>
        {GUNS.map(([x, y], i) => (
          <path key={i} d={`M ${x} ${y - 9} L ${x + 9} ${y + 7} L ${x - 9} ${y + 7} Z`} fill="var(--color-brand)" />
        ))}
      </g>

      {/* Compass */}
      <g transform="translate(600 40)" className="fill-ink-soft">
        <path d="M 0 -14 L 5 2 L 0 -2 L -5 2 Z" />
        <text y="18" textAnchor="middle" fontSize="11" fontWeight="600">N</text>
      </g>
    </svg>
  );
}

export function SiegeLegend() {
  const item = 'inline-flex items-center gap-1.5';
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-muted">
      <li className={item}><span className="w-2.5 h-2.5 rounded-[2px] bg-ink" aria-hidden="true" />French strongpoint</li>
      <li className={item}>
        <span className="w-2.5 h-2.5 rounded-[2px] border-2 border-brand bg-paper" aria-hidden="true" />Fallen
      </li>
      <li className={item}>
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" aria-hidden="true"><path d="M5 0 L10 10 L0 10 Z" fill="var(--color-brand)" /></svg>
        Viet Minh artillery
      </li>
      <li className={item}><span className="w-4 border-t-2 border-dashed border-brand" aria-hidden="true" />Trenches</li>
    </ul>
  );
}
