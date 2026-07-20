import React from 'react';
import './MarqueeBand.css';

const items = [
  'Websites', '✦', 'Discord Bots', '✦', 'Student Projects',
  '✦', 'Automation Tools', '✦', 'Landing Pages', '✦', 'Built Fast',
];

export default function MarqueeBand({ inverted = false }) {
  const doubled = [...items, ...items]; // seamless loop

  return (
    <div className={`marquee-band ${inverted ? 'marquee-band--inv' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
