// src/components/RobotGuardian.jsx

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export default function RobotGuardian() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Handle Sync percentage text (required state for fixed Turn 11 crash)
  const [percent, setPercent] = useState(0);
  useMotionValueEvent(smoothScroll, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  // 3D Transforms tied to scroll position (creates tactical movement)
  const rotateY = useTransform(smoothScroll, [0, 1], [0, 360]); // Full rotation across site
  const rotateX = useTransform(smoothScroll, [0, 1], [15, -15]); // Slight nod
  const scale = useTransform(smoothScroll, [0, 0.5, 1], [0.85, 1.1, 0.85]); // Breathing effect

  return (
    // Replaced fixed position with layout-responsive sticky column styles
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
      
      {/* Container is explicitly rotated to POINT RIGHT towards the content */}
      <motion.div style={{ width: '180px', height: '180px', position: 'relative', rotateY: '25deg', transformStyle: 'preserve-3d' }}>
        
        {/* Main Inner Core with 3D animation */}
        <motion.div style={{ position: 'absolute', inset: 0, rotateY, rotateX, scale, transformStyle: 'preserve-3d' }}>
            {/* Body */}
            <div style={{
              position: 'absolute', inset: 0, border: '1.5px solid var(--red)',
              borderRadius: '24px', background: 'rgba(232,37,26,0.03)',
              boxShadow: '0 0 50px rgba(232,37,26,0.15)', backdropFilter: 'blur(8px)'
            }}></div>

            {/* Scanning "Tactical" Eye */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '45%', left: '15%', right: '15%', height: '2px',
                background: 'var(--red)', boxShadow: '0 0 12px var(--red)', zIndex: 10
              }}
            />
        </motion.div>

        {/* Tactical Outer Ring - Now with parallax Y scroll speed */}
        <motion.div
          style={{
            position: 'absolute', inset: '-30px', border: '1px dashed var(--text-mute)',
            borderRadius: '50%', rotateZ: useTransform(smoothScroll, [0, 1], [0, -180]), 
            y: useTransform(smoothScroll, [0, 1], [20, -20]), // Add independent vertical movement
            opacity: 0.4
          }}
        />
      </motion.div>
      
      {/* Status UI Text Stream - Now matching column layout */}
      <div style={{
          position: 'absolute', bottom: '15vh', left: '0', right: '0', display: 'flex', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', textTransform: 'uppercase',
          letterSpacing: '0.15em', opacity: 0.8
        }}>
        Sync: {percent}% COMPLETE
      </div>
    </div>
  );
}