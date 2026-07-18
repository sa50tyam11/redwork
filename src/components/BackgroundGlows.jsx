import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundGlows() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Top Left Glow */}
      <motion.div 
        style={{ y: y1, position: 'absolute', top: '-10%', left: '-5%', width: '50vw', height: '50vw', 
                 background: 'radial-gradient(circle, rgba(232,37,26,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} 
      />
      {/* Bottom Right Glow */}
      <motion.div 
        style={{ y: y2, position: 'absolute', bottom: '10%', right: '-5%', width: '60vw', height: '60vw', 
                 background: 'radial-gradient(circle, rgba(232,37,26,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }} 
      />
    </div>
  );
}