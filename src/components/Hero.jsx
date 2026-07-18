import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Waves from './Waves';

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
    <section className="relative w-full h-[100svh] bg-[#080808] overflow-hidden selection:bg-[#e8251a] selection:text-[#fff]">

        {/* Background Waves (Dark theme) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <Waves
            lineColor="rgba(232, 37, 26, 0.3)"
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

        {/* Background Soft Glows (Dark theme friendly) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
          <div className="w-[800px] h-[800px] bg-[#e8251a]/5 blur-[100px] rounded-[100%] scale-150 transform -translate-y-10"></div>
          <div className="absolute w-[400px] h-[700px] bg-[#e8251a]/10 blur-[60px] rounded-[40%] top-0 left-[20%] transform rotate-12"></div>
          <div className="absolute w-[300px] h-[500px] bg-[#e8251a]/5 blur-[70px] rounded-[30%] bottom-0 right-[20%] transform -rotate-12"></div>
        </div>



        <div 
          className="relative z-10 w-full h-full flex flex-col justify-center px-4 md:px-12 pt-16"
        >
          {/* Timeline (Left) */}
          <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-16 text-[#f0ede8]/90 hidden lg:flex">
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#f0ede8]/50 mb-1 font-ui font-semibold">Started As</p>
              <p className="font-disp text-4xl text-[#e8251a] font-bold italic">Students</p>
              <div className="absolute left-6 top-16 h-10 border-l-[1.5px] border-dashed border-white/20"></div>
            </div>
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#f0ede8]/50 mb-1 font-ui font-semibold">Became</p>
              <p className="font-disp text-4xl text-[#e8251a] font-bold italic">Freelancers</p>
              <div className="absolute left-6 top-16 h-10 border-l-[1.5px] border-dashed border-white/20"></div>
            </div>
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#f0ede8]/50 mb-1 font-ui font-semibold">Currently</p>
              <p className="font-disp text-4xl text-[#e8251a] font-bold italic">Redwork</p>
            </div>
          </div>

          {/* Central Typography (Restored) */}
          <div className="flex justify-center items-center relative w-full mt-8 md:mt-0 group">
            
            {/* Sticky Note */}
            <motion.div 
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: -8, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-10 md:-top-16 left-[5%] md:left-[18%] bg-[#131313] text-[#f0ede8] p-3 md:p-5 shadow-[4px_4px_0px_rgba(232,37,26,0.3)] border-[1.5px] border-white/20 z-20 w-32 md:w-40 transition-transform group-hover:-rotate-12 group-hover:-translate-y-2 group-hover:-translate-x-2 duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/5 backdrop-blur-md shadow-sm border border-white/10 rotate-[6deg]"></div>
              <p className="font-bold text-[#e8251a] text-lg md:text-2xl tracking-tighter font-ui">EST. SEPT 2024</p>
              <p className="font-disp text-sm md:text-base font-bold text-[#f0ede8]/80 italic">India</p>
            </motion.div>

            <motion.h1 
              initial={{ scale: 0.8, opacity: 0, rotate: -8, y: 50 }}
              animate={{ scale: 1, opacity: 1, rotate: -4, y: 0 }}
              whileHover={{ scale: 1.05, rotate: -2, y: -10 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
              className="font-disp font-black text-[100px] sm:text-[140px] md:text-[200px] lg:text-[250px] text-[#e8251a] leading-[0.8] tracking-tighter z-10 select-none pl-4 md:pl-0 -mt-10 md:-mt-20 cursor-default shadow-black drop-shadow-2xl"
              style={{
                textShadow: '4px 4px 0px #080808, 8px 8px 0px rgba(232,37,26,0.5)',
                WebkitTextStroke: '2px #080808'
              }}
            >
              redwork
            </motion.h1>

            {/* Right Graph Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute right-[2%] lg:right-[4%] xl:right-[10%] top-[10%] lg:top-[20%] flex flex-col items-end hidden lg:flex z-20 transition-transform group-hover:translate-x-4 duration-300"
            >
              <p className="text-[#f0ede8] text-base mb-1 font-ui font-semibold">Coding bots by day,</p>
              <div className="flex items-end gap-2 text-[#f0ede8]">
                <span className="font-disp text-5xl font-bold italic">building sites</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="font-disp text-4xl text-[#f0ede8] font-bold italic">by</span>
                <span className="bg-[#111111] text-[#f0ede8] font-bold text-2xl px-3 py-1 rotate-2 shadow-[4px_4px_0px_#e8251a] border-2 border-white/20 font-ui">
                  midnight.
                </span>
              </div>
              
              {/* Simple Line Graph */}
              <div className="mt-8 flex items-end gap-4 relative">
                <div className="h-16 border-l-2 border-b-2 border-white/30 w-40 relative">
                  {/* SVG Curve */}
                  <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <path d="M 0 45 Q 60 45, 100 0" fill="none" stroke="#f0ede8" strokeWidth="2.5" />
                    <circle cx="100" cy="0" r="5" fill="#f0ede8" className="drop-shadow-lg" />
                    <circle cx="100" cy="0" r="2" fill="#e8251a" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 left-2 text-[10px] text-[#f0ede8]/50 tracking-widest font-mono font-bold">09:00</div>
                <div className="absolute -bottom-6 -right-2 text-[10px] text-[#f0ede8]/50 tracking-widest font-mono font-bold">00:00</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Navigation Element */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-30 w-full max-w-2xl px-4"
          >
            <button className="border-2 border-white/20 bg-[#111111] text-[#f0ede8] text-xs md:text-sm tracking-[0.2em] font-bold uppercase px-6 md:px-8 py-3 hover:bg-[#e8251a] hover:border-[#e8251a] hover:text-white transition-colors font-ui z-10 relative">
              Go On, Scroll Down
            </button>
            
            {/* Hand-drawn style arrow pointing down to nav */}
            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" className="-mt-1 mb-1 text-[#f0ede8]">
              <path d="M12 2v20M12 24l-5-5M12 24l5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            <div className="bg-[#111111] border-2 border-white/20 p-2 md:p-3 shadow-[6px_6px_0px_rgba(232,37,26,0.3)] md:shadow-[10px_10px_0px_rgba(232,37,26,0.3)] w-full sm:w-auto relative z-20">
              <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-8 font-disp text-xl md:text-2xl font-bold italic px-2 md:px-6">
                <li>
                  <Link to="/" className="bg-[#e8251a] text-white not-italic font-ui text-sm uppercase tracking-wider px-4 md:px-5 py-1 block hover:scale-[1.03] transition-transform shadow-[2px_2px_0px_rgba(255,255,255,0.2)] border border-white/20">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#f0ede8] hover:text-[#e8251a] transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/work" className="text-[#f0ede8] hover:text-[#e8251a] transition-colors">Work</Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#f0ede8] hover:text-[#e8251a] transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#f0ede8] hover:text-[#e8251a] transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
    </section>
  );
}