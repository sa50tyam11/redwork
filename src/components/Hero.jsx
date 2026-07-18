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



        <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 md:px-12 pt-16">
          {/* Content removed per user request */}
        </div>
    </section>
  );
}