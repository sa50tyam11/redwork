import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'SCOPE',
    text: 'Tell us what you need — a bot, a project, or a site. We confirm scope the same day.',
  },
  {
    id: '02',
    title: 'BUILD',
    text: 'We build with proven templates and clean code, so quality stays high and turnaround stays fast.',
  },
  {
    id: '03',
    title: 'DELIVER',
    text: "You get the finished product, full source files, and a walkthrough so you understand what you're getting.",
  },
  {
    id: '04',
    title: 'SUPPORT',
    text: "Free minor tweaks after delivery. Need something bigger? We're one WhatsApp message away.",
  },
];

export default function WorkProcess() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  
  // Translate the right column upwards as the user scrolls
  const rightColumnY = useTransform(smoothProgress, [0, 1], ['25vh', '-45vh']);

  return (
    <section
      id="how-we-work"
      ref={containerRef}
      style={{ padding: 0, height: '300vh', background: '#111111', position: 'relative' }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        <div id="work-process-grid" style={{
          maxWidth: '1160px', margin: '0 auto', padding: '0 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
          width: '100%', alignItems: 'center',
        }}>
          
          {/* LEFT */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#e8251a', margin: 0, fontWeight: 700
              }}>The Methodology</span>
            </div>
            
            <h2 style={{
              fontFamily: 'var(--font-disp)', fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase',
              color: '#ffffff', margin: 0,
            }}>
              How We<br />
              Work
            </h2>
          </div>

          {/* RIGHT */}
          <motion.div style={{ position: 'relative', paddingLeft: '48px', y: rightColumnY }}>
            {/* Track line (faint) */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '1px', background: 'rgba(255,255,255,0.06)',
            }} />
            
            {/* Red indicator marker (grows with scroll) */}
            <motion.div style={{
              position: 'absolute', left: '-1px', top: 0,
              width: '3px', height: lineHeight, background: '#e8251a',
              transformOrigin: 'top'
            }} />

            {steps.map((step, index) => {
              const start = index * 0.25;
              const end = (index + 1) * 0.25;
              const opacity = useTransform(
                smoothProgress,
                [Math.max(0, start - 0.1), start + 0.1, end - 0.08, Math.min(1, end + 0.1)],
                [0.2, 1, 1, 0.2]
              );
              
              return (
                <motion.div key={step.id} style={{ 
                  marginBottom: index === steps.length - 1 ? 0 : '80px',
                  opacity
                }}>
                  
                  {/* Step number */}
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                      letterSpacing: '0.12em', color: '#e8251a', opacity: 0.9,
                    }}>
                      [{step.id}]
                    </span>
                  </div>
                  
                  {/* Step title */}
                  <h3 style={{
                    fontFamily: 'var(--font-disp)', fontWeight: 800,
                    fontSize: '1.6rem', letterSpacing: '0.04em', textTransform: 'uppercase',
                    color: '#ffffff',
                    margin: '0 0 16px', lineHeight: 1.2,
                  }}>
                    {step.title}
                  </h3>
                  
                  {/* Step text */}
                  <p style={{
                    fontFamily: 'var(--font-ui)', fontSize: '1rem',
                    color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
                    maxWidth: '420px', margin: 0,
                  }}>
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #work-process-grid { grid-template-columns: 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}