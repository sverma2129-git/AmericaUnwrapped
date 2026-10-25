'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ModuleLoading = () => (
  <div className="p-12 border border-[#E8DDC8] bg-[#FAF7F2] text-center rounded-xs shadow-xs">
    <div className="text-xs uppercase tracking-widest text-[#8B252D] font-bold animate-pulse">
      Loading Archival Evidence Module...
    </div>
  </div>
);

const DienBienPhuMap = dynamic(() => import('./modules/DienBienPhuMap'), { loading: ModuleLoading });
const GenevaDivisionMap = dynamic(() => import('./modules/GenevaDivisionMap'), { loading: ModuleLoading });
const EscalationTimeline = dynamic(() => import('./modules/EscalationTimeline'), { loading: ModuleLoading });
const TonkinReconstruction = dynamic(() => import('./modules/TonkinReconstruction'), { loading: ModuleLoading });
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
    case 'dien-bien-phu-map':
      return <DienBienPhuMap />;
    case 'geneva-division-map':
      return <GenevaDivisionMap />;
    case 'escalation-timeline':
      return <EscalationTimeline />;
    case 'tonkin-reconstruction':
      return <TonkinReconstruction />;
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
