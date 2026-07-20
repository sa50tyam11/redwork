import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const steps = [
  {
    id: '01',
    title: 'Scope',
    sub: 'The Blueprint',
    text: 'Tell us what you need — a bot, a project, or a site. We confirm scope and timelines the same day.',
    accent: '→ 24hr response',
  },
  {
    id: '02',
    title: 'Build',
    sub: 'The Construction',
    text: 'We build with clean code and proven patterns — quality stays high, turnaround stays fast.',
    accent: '→ Daily updates',
  },
  {
    id: '03',
    title: 'Deliver',
    sub: 'The Launch',
    text: 'You get the finished product, full source files, and a walkthrough so you own it completely.',
    accent: '→ Full handoff',
  },
  {
    id: '04',
    title: 'Support',
    sub: 'The Growth',
    text: "Free minor tweaks after delivery. Need something bigger? We're one WhatsApp message away.",
    accent: '→ Ongoing care',
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

  return (
    <section
      ref={containerRef}
      style={{ height: '280vh', background: '#0d0d0f', position: 'relative', zIndex: 20 }}
    >
      {/* ── Sticky panel ── */}
      <div style={{
        position: 'sticky', top: 0, height: '100dvh',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(232,37,26,0.06) 0%, transparent 70%)',
        }} />

        <div style={{
          maxWidth: '1160px', margin: '0 auto', padding: '0 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
          width: '100%', position: 'relative', alignItems: 'center',
        }}>

          {/* ── LEFT — fixed editorial title ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: '#e8251a' }} />
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: '#e8251a', margin: 0,
              }}>The Methodology</p>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-disp)', fontStyle: 'italic', fontWeight: 900,
              fontSize: 'clamp(3rem, 5.5vw, 5rem)',
              letterSpacing: '-0.04em', lineHeight: 1.0,
              color: '#f5f5f7', margin: '0 0 32px',
            }}>
              How We<br />
              <em style={{ color: '#e8251a' }}>Work.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--font-ui)', fontSize: '1rem',
              color: 'rgba(245,245,247,0.45)', lineHeight: 1.75, maxWidth: '360px',
            }}>
              A clear, repeatable process that gets your project built right — every time.
            </p>

            {/* Progress indicator */}
            <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.div
                style={{
                  width: '80px', height: '2px',
                  background: 'rgba(255,255,255,0.1)',
                  position: 'relative', overflow: 'hidden', borderRadius: '1px',
                }}
              >
                <motion.div style={{
                  position: 'absolute', top: 0, left: 0, height: '100%',
                  width: lineHeight, background: '#e8251a',
                  boxShadow: '0 0 8px rgba(232,37,26,0.8)',
                }} />
              </motion.div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>Scroll to explore</span>
            </div>
          </div>

          {/* ── RIGHT — scrolling steps ── */}
          <div style={{ position: 'relative', paddingLeft: '36px' }}>
            {/* Track line */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '1px', background: 'rgba(255,255,255,0.07)',
            }} />
            {/* Animated fill */}
            <motion.div style={{
              position: 'absolute', left: 0, top: 0,
              width: '2px', height: lineHeight,
              background: 'linear-gradient(to bottom, #e8251a, rgba(232,37,26,0.3))',
              boxShadow: '0 0 12px rgba(232,37,26,0.6)',
            }} />

            {steps.map((step, index) => {
              const start = index * 0.25;
              const end = (index + 1) * 0.25;
              const opacity = useTransform(
                smoothProgress,
                [start, start + 0.1, end - 0.08, end],
                [0.2, 1, 1, 0.25]
              );
              const y = useTransform(
                smoothProgress,
                [start, start + 0.1, end - 0.1, end],
                [12, 0, 0, -12]
              );
              const dotScale = useTransform(
                smoothProgress,
                [start, start + 0.08, end - 0.08, end],
                [0.6, 1, 1, 0.6]
              );

              return (
                <motion.div
                  key={step.id}
                  style={{ opacity, y, marginBottom: '52px', position: 'relative' }}
                >
                  {/* Step dot */}
                  <motion.div style={{
                    position: 'absolute', left: '-44px', top: '6px',
                    width: '10px', height: '10px',
                    borderRadius: '50%', background: '#e8251a',
                    boxShadow: '0 0 12px rgba(232,37,26,0.7)',
                    scale: dotScale,
                    transformOrigin: 'center',
                  }} />

                  {/* Step number + sub */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#e8251a', opacity: 0.8,
                    }}>
                      [{step.id}]
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)',
                    }}>
                      {step.sub}
                    </span>
                  </div>

                  {/* Step title */}
                  <h3 style={{
                    fontFamily: 'var(--font-disp)', fontStyle: 'italic', fontWeight: 900,
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    letterSpacing: '-0.03em', color: '#f5f5f7',
                    margin: '0 0 12px', lineHeight: 1.1,
                  }}>
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p style={{
                    fontFamily: 'var(--font-ui)', fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.52)', lineHeight: 1.7,
                    maxWidth: '380px', margin: '0 0 12px',
                  }}>
                    {step.text}
                  </p>

                  {/* Accent tag */}
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: '#e8251a', opacity: 0.7,
                  }}>
                    {step.accent}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #work-process-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}