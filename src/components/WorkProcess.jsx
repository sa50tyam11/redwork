import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { id: '01', title: 'SCOPE', label: 'THE BLUEPRINT', text: 'Tell us what you need — a bot, a project, or a site. We confirm scope the same day.' },
  { id: '02', title: 'BUILD', label: 'THE CONSTRUCTION', text: 'We build with proven templates and clean code, so quality stays high and turnaround stays fast.' },
  { id: '03', title: 'DELIVER', label: 'THE LAUNCH', text: "You get the finished product, full source files, and a walkthrough so you understand what you're getting." },
  { id: '04', title: 'SUPPORT', label: 'THE GROWTH', text: "Free minor tweaks after delivery. Need something bigger? We're one WhatsApp message away." }
];

export default function WorkProcess() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: '300vh', 
        background: '#151112', // Charcoal background
        position: 'relative',
        zIndex: 20 // Ensure it's above previous sections
      }}
    >
      {/* This DIV must be STICKY to stay on screen while you scroll the 300vh */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        width: '100%'
      }}>
        
     <div className="container responsive-grid designation-grid" style={{ width: '100%' }}>
          
          <div className="process-info">
            <p className="label" style={{ color: 'var(--red)' }}>The Methodology</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#ffffff', margin: '10px 0' }}>How We<br/>Work</h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Background Line */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--glass-border)' }} />
            
            {/* Animated Red Line */}
            <motion.div style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: lineHeight, background: 'var(--red)', boxShadow: '0 0 15px #e8251a' }} />

            {steps.map((step, index) => {
              const start = index * 0.25;
              const end = (index + 1) * 0.25;
              const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0.2, 1, 1, 0.2]);

              return (
                <motion.div key={step.id} style={{ opacity, marginBottom: '40px' }}>
                   <span style={{ color: 'var(--red)', fontSize: '0.8rem', fontFamily: 'monospace' }}>[{step.id}]</span>
                   <h3 style={{ color: '#ffffff', fontSize: '1.5rem', margin: '5px 0' }}>{step.title}</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', maxWidth: '400px' }}>{step.text}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}