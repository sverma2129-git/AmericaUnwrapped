'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ModuleLoading = () => (
  <div className="p-12 border border-rule bg-parchment text-center rounded-xs">
    <div className="text-sm text-ink-muted">
      Loading…
    </div>
  </div>
);

const GenevaDivisionMap = dynamic(() => import('./modules/GenevaDivisionMap'), { loading: ModuleLoading });
const EscalationTimeline = dynamic(() => import('./modules/EscalationTimeline'), { loading: ModuleLoading });
const AttritionModel = dynamic(() => import('./modules/AttritionModel'), { loading: ModuleLoading });
const PhoenixAnalysis = dynamic(() => import('./modules/PhoenixAnalysis'), { loading: ModuleLoading });
const TetOffensiveMap = dynamic(() => import('./modules/TetOffensiveMap'), { loading: ModuleLoading });
const VietnamizationTracker = dynamic(() => import('./modules/VietnamizationTracker'), { loading: ModuleLoading });
const ParisAccordsTimeline = dynamic(() => import('./modules/ParisAccordsTimeline'), { loading: ModuleLoading });
const CollapseOffensiveMap = dynamic(() => import('./modules/CollapseOffensiveMap'), { loading: ModuleLoading });
const AftermathMetrics = dynamic(() => import('./modules/AftermathMetrics'), { loading: ModuleLoading });
const CompetingArguments = dynamic(() => import('./modules/CompetingArguments'), { loading: ModuleLoading });

interface InteractiveModuleWrapperProps {
  type: string;
}

export default function InteractiveModuleWrapper({ type }: InteractiveModuleWrapperProps) {
  switch (type) {
    case 'geneva-division-map':
      return <GenevaDivisionMap />;
    case 'escalation-timeline':
      return <EscalationTimeline />;
    case 'attrition-model':
      return <AttritionModel />;
    case 'phoenix-analysis':
      return <PhoenixAnalysis />;
    case 'tet-offensive-map':
      return <TetOffensiveMap />;
    case 'vietnamization-tracker':
      return <VietnamizationTracker />;
    case 'paris-timeline':
      return <ParisAccordsTimeline />;
    case 'collapse-1975-map':
      return <CollapseOffensiveMap />;
    case 'aftermath-metrics':
      return <AftermathMetrics />;
    case 'competing-arguments':
      return <CompetingArguments />;
    default:
      return null;
  }
}
