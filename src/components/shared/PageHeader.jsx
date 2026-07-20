import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, description, badge }) {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center font-sans" style={{ minHeight: '55vh', background: '#060404' }}>
      
      {/* --- Atmospheric Glow --- */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,37,26,0.15) 0%, rgba(180,20,10,0.05) 45%, transparent 70%)'
      }} />

      {/* --- Scanlines --- */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }} />
      
      {/* --- Bottom Fade into bg --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] pointer-events-none z-[3]" style={{
        background: 'linear-gradient(to bottom, transparent, var(--bg))'
      }} />

      {/* --- Content --- */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center pt-24 pb-8 flex flex-col items-center">
        {badge && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 typo-badge" style={{ padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3px', background: 'rgba(0,0,0,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)] shadow-[0_0_8px_var(--red)]"></span>
            {badge}
          </motion.div>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="typo-section-h2" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#ffffff', margin: 0 }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="typo-body mt-6" style={{ maxWidth: '600px', fontSize: '1.1rem' }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
