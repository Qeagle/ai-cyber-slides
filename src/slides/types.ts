// Slide Types - Type definitions for all slide configurations

export type SlideType = 
  | 'TITLE'
  | 'TAMIL_CHECK'    // Tamil comprehension hands-up
  | 'ROOM_PULSE'     // 3 cards (Who in room / AI usage)
  | 'SIMPLE_CARDS'   // Generic cards (Cyber basics)
  | 'PROFILE'        // Credibility
  | 'IMAGE_ONLY'     // Full screen image
  | 'SPLIT_TIMELINE' // Human vs Machine speed
  | 'BALANCE_SCALE'  // Fraud trade-off
  | 'DEEPFAKE_CFO'   // Deepfake video call grid
  | 'AI_MENTAL_MODEL' // Brain, Memory, Hands mental model
  | 'PIPELINE_FLOW'  // Detect->Decide->Act
  | 'SPLIT_CARDS'    // AI helps both / Two tracks
  | 'RULE_CHIPS'     // Deepfake 3 lessons
  | 'RECAP_COUNT'    // 3 takeaways
  | 'ICON_GRID'      // AI for Cyber use cases
  | 'GAUGE_MODEL'    // Anomaly score
  | 'LAYERED_CARDS'  // Prompt injection
  | 'FLOW_LEAK'      // RAG leakage
  | 'CHECKLIST_RX'   // 5 must-have controls (Risk -> Fix)
  | 'GATES_3'        // 3 Gates framework
  | 'QUIZ'           // Quick recap
  | 'ROADMAP_QR'     // Timeline + QR
  | 'CHART';         // Data visualization chart

// Visual configuration for slides
export interface VisualConfig {
  layout?: 'center' | 'split-left' | 'split-right' | 'grid';
  icons?: string[];
  colors?: ('blue' | 'pink' | 'green' | 'amber')[];
}

// Animation stages for the slide
export type AnimationStage = 'entry' | 'reveal-1' | 'reveal-2' | 'reveal-3' | 'highlight' | 'exit';

export interface BaseSlide {
  id: string;
  type: SlideType;
  title: string;
  
  // On-screen content
  headline?: string;
  microBullets?: string[]; // Max 3-4 items, <4 words each
  
  // Visuals
  visual?: any; // Flexible payload for specific slide types
  
  // Speaker & Context
  speakerNotes: string;   // Internal use only
  audiencePrompt?: string; // "Ask this..."
  safetyNote?: string;    // "Generic example only"
  
  // Runtime state (not in config, but useful for types)
  status?: 'hidden' | 'active' | 'done';
}

// -- Specific Slide Interfaces --

export interface TitleSlide extends BaseSlide {
  type: 'TITLE';
  subtitle?: string;
  tracks?: [string, string];
}

export interface RoomPulseSlide extends BaseSlide {
  type: 'ROOM_PULSE';
  options: { label: string; icon?: string }[];
}

export interface SimpleCardsSlide extends BaseSlide {
  type: 'SIMPLE_CARDS';
  cards: { label: string; icon?: string; active?: boolean }[];
  footerChips?: string[]; // Optional frequency chips
  imageSrc?: string; // Optional image for split layout
  imageAlt?: string;
}

export interface ImageSlide extends BaseSlide {
  type: 'IMAGE_ONLY';
  src: string;
  alt?: string;
}

export interface TamilCheckSlide extends BaseSlide {
  type: 'TAMIL_CHECK';
  question: string;
}

export interface DeepfakeCFOSlide extends BaseSlide {
  type: 'DEEPFAKE_CFO';
  participants: { name: string; real: boolean }[];
  amount: string;
}

export interface AIMentalModelSlide extends BaseSlide {
  type: 'AI_MENTAL_MODEL';
  concepts: { title: string; icon: string; description: string; subtext: string }[];
}

export interface ProfileSlide extends BaseSlide {
  type: 'PROFILE';
  bullets: string[];
  icons: string[];
}

export interface SplitTimelineSlide extends BaseSlide {
  type: 'SPLIT_TIMELINE';
  leftLabel: string;
  rightLabel: string;
  reasons: string[];
}

export interface BalanceScaleSlide extends BaseSlide {
  type: 'BALANCE_SCALE';
  leftSide: string;
  rightSide: string;
}

export interface PipelineFlowSlide extends BaseSlide {
  type: 'PIPELINE_FLOW';
  steps: { label: string; sub?: string }[];
}

export interface SplitCardsSlide extends BaseSlide {
  type: 'SPLIT_CARDS';
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

export interface RuleChipsSlide extends BaseSlide {
  type: 'RULE_CHIPS';
  chips: string[];
  examples?: string[]; // Short examples for each chip
}

export interface RecapCountSlide extends BaseSlide {
  type: 'RECAP_COUNT';
  count: number;
  items: string[];
}

export interface IconGridSlide extends BaseSlide {
  type: 'ICON_GRID';
  items: { label: string; icon: string; description?: string }[];
}

export interface GaugeSlide extends BaseSlide {
  type: 'GAUGE_MODEL';
  features: string[];
  actionLabels: string[];
}

export interface LayeredCardsSlide extends BaseSlide {
  type: 'LAYERED_CARDS';
  layers: string[]; // Front, Middle, Back
}

export interface FlowLeakSlide extends BaseSlide {
  type: 'FLOW_LEAK';
  steps: string[];
  leaks: string[];
}

export interface ChecklistRxSlide extends BaseSlide {
  type: 'CHECKLIST_RX';
  items: { risk: string; fix: string }[];
}

export interface GatesFrameworkSlide extends BaseSlide {
  type: 'GATES_3';
  gates: { name: string; question: string; example: string }[];
}

export interface QuizSlide extends BaseSlide {
  type: 'QUIZ';
  questions: { q: string; options: string[]; correct: number }[];
}

export interface RoadmapQrSlide extends BaseSlide {
  type: 'ROADMAP_QR';
  phases: string[];
  qrUrl?: string; // Optional, can use placeholder
}

export interface ChartSlide extends BaseSlide {
  type: 'CHART';
  subtitle?: string;
  chartType: 'area' | 'bar' | 'line';
  series: {
    name: string;
    data: { year: string; value: number; label?: string; isScenario?: boolean }[];
  }[];
  yAxisLabel?: string;
  calloutBox?: {
    title: string;
    lines: string[];
  };
  highlightValue?: {
    value: string;
    label: string;
  };
  sources?: string[];
}

export type Slide = 
  | TitleSlide
  | TamilCheckSlide
  | RoomPulseSlide
  | SimpleCardsSlide
  | ProfileSlide
  | ImageSlide
  | DeepfakeCFOSlide
  | AIMentalModelSlide
  | SplitTimelineSlide
  | BalanceScaleSlide
  | PipelineFlowSlide
  | SplitCardsSlide
  | RuleChipsSlide
  | RecapCountSlide
  | IconGridSlide
  | GaugeSlide
  | LayeredCardsSlide
  | FlowLeakSlide
  | ChecklistRxSlide
  | GatesFrameworkSlide
  | QuizSlide
  | RoadmapQrSlide
  | ChartSlide;

export interface PresentationConfig {
  title: string;
  author: string;
  slides: Slide[];
}
