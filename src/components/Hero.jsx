import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const captions = [
  "Websites that actually convert.",
  "/ What Powers Us",
  "Bots by day, websites by midnight.",
  "Building digital tools that matter."
];

export default function Hero() {
  const [captionIndex, setCaptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptionIndex((prev) => (prev + 1) % captions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[100svh] bg-[#080808] overflow-hidden selection:bg-[#e8251a] selection:text-[#fff]"
      style={{
        backgroundImage: 'url("/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Soft Glows (Dark theme friendly) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div className="w-[800px] h-[800px] bg-[#e8251a]/5 blur-[100px] rounded-[100%] scale-150 transform -translate-y-10"></div>
        <div className="absolute w-[400px] h-[700px] bg-[#e8251a]/10 blur-[60px] rounded-[40%] top-0 left-[20%] transform rotate-12"></div>
        <div className="absolute w-[300px] h-[500px] bg-[#e8251a]/5 blur-[70px] rounded-[30%] bottom-0 right-[20%] transform -rotate-12"></div>
      </div>



      <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 md:px-12 pt-16 max-w-[820px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        >
          Websites, Bots & Student Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-disp text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          Get it built.<br />
          <em>Get it right.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-[1.1rem] font-normal leading-[1.65] text-white mb-8 max-w-[540px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          Discord bots, final-year projects, and websites for businesses — delivered in days, with real people to talk to along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Link to="/contact" className="font-ui text-[0.82rem] font-bold tracking-[0.04em] uppercase text-white bg-[#e8251a]/40 backdrop-blur-md border border-[#e8251a]/50 px-6 py-[12px] rounded-full hover:bg-[#e8251a]/60 hover:border-[#e8251a]/80 transition-all shadow-[0_4px_24px_rgba(232,37,26,0.2)]">
            Book Free Consult
          </Link>
          <a href="#work" className="font-ui text-[0.82rem] font-bold tracking-[0.04em] uppercase text-white bg-white/10 backdrop-blur-md border border-white/20 px-6 py-[12px] rounded-full hover:bg-white/20 hover:border-white/40 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            See Our Work ↓
          </a>
        </motion.div>
      </div>

      {/* Floating Stat Chips */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="absolute bottom-[20%] right-[10%] md:right-[15%] lg:right-[20%] bg-[#0e0e0e]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 shadow-2xl pointer-events-auto hover:-translate-y-1 transition-transform"
        >
          <div className="font-disp text-2xl md:text-3xl font-black text-white leading-none">
            10<sup>+</sup>
          </div>
          <div className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-wider text-white/60 uppercase leading-snug w-[80px]">
            Projects Delivered
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          className="absolute top-[25%] right-[5%] md:right-[10%] lg:right-[15%] bg-[#0e0e0e]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 shadow-2xl pointer-events-auto hover:-translate-y-1 transition-transform"
        >
          <div className="font-disp text-2xl md:text-3xl font-black text-white leading-none">
            48<span className="text-[1rem] text-[#e8251a] align-super">Hr</span>
          </div>
          <div className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-wider text-white/60 uppercase leading-snug w-[80px]">
            Avg. Response
          </div>
        </motion.div>
      </div>
    </section>
  );
}