import React from 'react';
import { Slide, SlideType } from './types';

// Importing Templates
import { TitleSlide } from '../components/templates/TitleSlide';
import { TamilCheckSlide } from '../components/templates/TamilCheckSlide';
import { RoomPulseSlide } from '../components/templates/RoomPulseSlide';
import { SimpleCardsSlide } from '../components/templates/SimpleCardsSlide';
import { ProfileSlide } from '../components/templates/ProfileSlide';
import { SplitTimelineSlide } from '../components/templates/SplitTimelineSlide';
import { BalanceScaleSlide } from '../components/templates/BalanceScaleSlide';
import { DeepfakeCFOSlide } from '../components/templates/DeepfakeCFOSlide';
import { AIMentalModelSlide } from '../components/templates/AIMentalModelSlide';
import { PipelineFlowSlide } from '../components/templates/PipelineFlowSlide';
import { SplitCardsSlide } from '../components/templates/SplitCardsSlide';
import { RuleChipsSlide } from '../components/templates/RuleChipsSlide';
import { RecapCountSlide } from '../components/templates/RecapCountSlide';
import { IconGridSlide } from '../components/templates/IconGridSlide';
import { GaugeSlide } from '../components/templates/GaugeSlide';
import { LayeredCardsSlide } from '../components/templates/LayeredCardsSlide';
import { FlowLeakSlide } from '../components/templates/FlowLeakSlide';
import { ChecklistRxSlide } from '../components/templates/ChecklistRxSlide';
import { GatesFrameworkSlide } from '../components/templates/GatesFrameworkSlide';
import { QuizSlide } from '../components/templates/QuizSlide';
import { RoadmapQrSlide } from '../components/templates/RoadmapQrSlide';
import { ImageSlide } from '../components/templates/ImageSlide';
import ChartSlide from '../components/templates/ChartSlide';

// Mapping Enum to Component
const SLIDE_COMPONENTS: Record<SlideType, React.FC<any>> = {
  TITLE: TitleSlide,
  TAMIL_CHECK: TamilCheckSlide,
  ROOM_PULSE: RoomPulseSlide,
  SIMPLE_CARDS: SimpleCardsSlide,
  PROFILE: ProfileSlide,
  IMAGE_ONLY: ImageSlide,
  SPLIT_TIMELINE: SplitTimelineSlide,
  BALANCE_SCALE: BalanceScaleSlide,
  DEEPFAKE_CFO: DeepfakeCFOSlide,
  AI_MENTAL_MODEL: AIMentalModelSlide,
  PIPELINE_FLOW: PipelineFlowSlide,
  SPLIT_CARDS: SplitCardsSlide,
  RULE_CHIPS: RuleChipsSlide,
  RECAP_COUNT: RecapCountSlide,
  ICON_GRID: IconGridSlide,
  GAUGE_MODEL: GaugeSlide,
  LAYERED_CARDS: LayeredCardsSlide,
  FLOW_LEAK: FlowLeakSlide,
  CHECKLIST_RX: ChecklistRxSlide,
  GATES_3: GatesFrameworkSlide,
  QUIZ: QuizSlide,
  ROADMAP_QR: RoadmapQrSlide,
  CHART: ChartSlide,
};

export const SlideRegistry: React.FC<{ slide: Slide }> = ({ slide }) => {
  const Component = SLIDE_COMPONENTS[slide.type];

  if (!Component) {
    return <div className="text-red-500 p-10">Unknown Slide Type: {slide.type}</div>;
  }

  return <Component slide={slide} />;
};
