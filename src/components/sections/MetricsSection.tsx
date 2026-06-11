import React, { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { type Metric, metrics } from '../../data/portfolioData';

const MetricItem: React.FC<{ metric: Metric }> = ({ metric }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const animatedValue = useCounter(metric.value, itemRef, 1500);

  // Split label by newlines to match the original line breaks
  const labelLines = metric.label.split('\n');

  return (
    <div ref={itemRef} className="metric-item">
      <div className="metric-value">
        {metric.prefix && <span className="metric-accent">{metric.prefix}</span>}
        {animatedValue}
        {metric.suffix && <span className="metric-accent">{metric.suffix}</span>}
      </div>
      <div className="metric-label">
        {labelLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < labelLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const MetricsSection: React.FC = () => {
  return (
    <section className="metrics-section">
      <div className="metrics-grid reveal">
        {metrics.map((metric) => (
          <MetricItem key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  );
};
export default MetricsSection;
