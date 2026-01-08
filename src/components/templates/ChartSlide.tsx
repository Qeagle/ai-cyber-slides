import { motion } from 'framer-motion';
import { ChartSlide as ChartSlideType } from '../../slides/types';
import { TrendingUp, ExternalLink } from 'lucide-react';

interface Props {
  slide: ChartSlideType;
}

export default function ChartSlide({ slide }: Props) {
  const { series, calloutBox, highlightValue, sources, yAxisLabel } = slide;
  const data = series[0]?.data || [];
  
  // Find max value for scaling
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="h-full flex flex-col px-12 py-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">{slide.title}</h1>
        {slide.subtitle && (
          <p className="text-lg text-slate-400">{slide.subtitle}</p>
        )}
      </motion.div>

      {/* Main content - Chart + Callout */}
      <div className="flex-1 flex gap-8 items-center">
        {/* Chart Area */}
        <div className="flex-1 h-full flex flex-col">
          {/* Y-Axis Label */}
          {yAxisLabel && (
            <div className="text-xs text-slate-500 mb-2">{yAxisLabel}</div>
          )}
          
          {/* Chart visualization */}
          <div className="flex-1 flex items-end gap-2 pb-8 relative">
            {/* Area chart background gradient */}
            <div className="absolute inset-0 bottom-8">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={generateAreaPath(data, maxValue)}
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d={generateLinePath(data, maxValue)}
                  fill="none"
                  stroke="rgb(6, 182, 212)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </svg>
            </div>
            
            {/* Data points as bars with labels */}
            {data.map((point, i) => {
              const heightPercent = (point.value / maxValue) * 100;
              return (
                <motion.div
                  key={point.year}
                  className="flex-1 flex flex-col items-center justify-end h-full relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  {/* Value label */}
                  <motion.div 
                    className={`text-sm font-bold mb-2 ${point.isScenario ? 'text-cyan-400/70' : 'text-cyan-400'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    {point.label || `$${point.value}B`}
                  </motion.div>
                  
                  {/* Bar */}
                  <motion.div
                    className={`w-12 rounded-t-lg ${point.isScenario 
                      ? 'bg-gradient-to-t from-cyan-600/30 to-cyan-400/50 border border-cyan-500/30 border-dashed' 
                      : 'bg-gradient-to-t from-cyan-600 to-cyan-400'}`}
                    style={{ height: `${heightPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  />
                  
                  {/* Year label */}
                  <div className="text-slate-400 text-sm mt-3 font-medium">{point.year}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side - Callout Box */}
        {calloutBox && (
          <motion.div
            className="w-80 bg-slate-800/60 border border-cyan-500/30 rounded-xl p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">{calloutBox.title}</h3>
            </div>
            <ul className="space-y-3">
              {calloutBox.lines.map((line, i) => (
                <motion.li
                  key={i}
                  className="text-slate-300 text-sm leading-relaxed"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  {line}
                </motion.li>
              ))}
            </ul>
            
            {/* Highlight value */}
            {highlightValue && (
              <motion.div
                className="mt-6 pt-4 border-t border-slate-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="text-3xl font-bold text-cyan-400">{highlightValue.value}</div>
                <div className="text-xs text-slate-500 mt-1">{highlightValue.label}</div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Sources */}
      {sources && sources.length > 0 && (
        <motion.div 
          className="flex items-center gap-2 text-xs text-slate-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <ExternalLink className="w-3 h-3" />
          <span>Sources: {sources.join(' • ')}</span>
        </motion.div>
      )}
    </div>
  );
}

// Helper function to generate SVG area path
function generateAreaPath(data: { year: string; value: number }[], maxValue: number): string {
  if (data.length === 0) return '';
  
  const width = 100;
  const height = 100;
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (d.value / maxValue) * height * 0.85
  }));
  
  let path = `M ${points[0].x} ${height}`;
  path += ` L ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i].x} ${points[i].y}`;
  }
  
  path += ` L ${points[points.length - 1].x} ${height}`;
  path += ' Z';
  
  return path;
}

// Helper function to generate SVG line path
function generateLinePath(data: { year: string; value: number }[], maxValue: number): string {
  if (data.length === 0) return '';
  
  const width = 100;
  const height = 100;
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (d.value / maxValue) * height * 0.85
  }));
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i].x} ${points[i].y}`;
  }
  
  return path;
}
