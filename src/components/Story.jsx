import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';
import Antigravity from './Antigravity';

export default function Story() {
    const containerRef = useRef(null);
    
    // Track scroll through the section (400vh height means start start to end end works well)
    const { scrollYProgress } = useScroll({ 
        target: containerRef, 
        offset: ["start start", "end end"] 
    });
    
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Dynamic Speed State for 3D Background
    const [particleSpeed, setParticleSpeed] = useState(0.4);
    const [particleRotation, setParticleRotation] = useState(0.5);

    // Listen to scroll progress and update speeds
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        setParticleSpeed(0.4 + (latest * 2.5));
        setParticleRotation(0.5 + (latest * 3.0));
    });

    // Parallax effect for the bento grid itself
    const yBento = useTransform(smoothProgress, [0, 1], [100, -100]);

    // SEQUENTIAL TIMING LOGIC
    // Block 1 (Business): active 0-25%, fades out 25-35%
    const opacity1 = useTransform(smoothProgress, [0, 0.05, 0.25, 0.35], [0, 1, 1, 0]);
    const y1 = useTransform(smoothProgress, [0, 0.05, 0.25, 0.35], [20, 0, 0, -20]);

    // Block 2 (Student): active 35-60%, fades out 60-70%
    const opacity2 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [20, 0, 0, -20]);

    // Block 3 (Bot/Discord): active 70-100%, stays visible at 100%
    const opacity3 = useTransform(smoothProgress, [0.6, 0.7, 1], [0, 1, 1]);
    const y3 = useTransform(smoothProgress, [0.6, 0.7, 1], [20, 0, 0]);

    return (
        <section ref={containerRef} className="section" style={{ height: '400vh', position: 'relative', background: 'var(--bg)' }}>
            
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* --- 3D ANTIGRAVITY BACKGROUND --- */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.6,
                    pointerEvents: 'none'
                }}>
                    <Antigravity
                        count={250}
                        magnetRadius={6}
                        ringRadius={7}
                        waveSpeed={particleSpeed}
                        waveAmplitude={1}
                        particleSize={1.5}
                        lerpSpeed={0.05}
                        color="#D93A2B"
                        autoAnimate={true}
                        particleVariance={1}
                        rotationSpeed={particleRotation}
                    />
                </div>

                {/* --- FOREGROUND BENTO --- */}
                <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <motion.div 
                        className="bento-grid"
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                            gap: '24px',
                            y: yBento 
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        
                        {/* LEFT COLUMN: THE REALITY */}
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '60px 48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            transition: 'background 0.3s ease, transform 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-card)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                            {/* Absolute container for the overlapping sequential lines */}
                            <div style={{ position: 'relative', height: '260px', width: '100%', marginBottom: '24px' }}>
                                
                                {/* Block 1 */}
                                <motion.h2 
                                    className="typo-section-h2" 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', margin: 0, opacity: opacity1, y: y1 }}
                                >
                                    A professional web presence<br />
                                    for your business <br />
                                    <span style={{ color: 'var(--text-mute)' }}>— built for real growth.</span>
                                </motion.h2>

                                {/* Block 2 */}
                                <motion.h2 
                                    className="typo-section-h2" 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', margin: 0, opacity: opacity2, y: y2 }}
                                >
                                    A final-year project<br />
                                    that earns a real grade <br />
                                    <span style={{ color: 'var(--text-mute)' }}>— not a suspicious one.</span>
                                </motion.h2>

                                {/* Block 3 */}
                                <motion.h2 
                                    className="typo-section-h2" 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', margin: 0, opacity: opacity3, y: y3 }}
                                >
                                    A custom Discord server<br />
                                    that finally <br />
                                    <span style={{ color: 'var(--text-mute)' }}>runs itself.</span>
                                </motion.h2>
                            </div>

                            <p className="typo-body">
                                That's what we build. No agency retainer, no six-week timelines.<br />
                                Just working products, delivered properly.
                            </p>
                        </div>

                        {/* RIGHT COLUMN: BUILT. NOT BORROWED. */}
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '60px 48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'background 0.3s ease, transform 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-card)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                            <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                            
                            <p className="typo-badge" style={{ color: 'var(--red)', marginBottom: '16px' }}>The Standard</p>
                            
                            <h3 className="typo-section-h2" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                                Built. <br />Not <br /><span style={{ color: 'var(--red)' }}>Borrowed.</span>
                            </h3>
                            
                            <p className="typo-body">
                                Whether it's a bot, a project, or your business's<br />
                                first website — we build it <strong style={{ color: 'var(--text)', fontWeight: 600 }}>properly</strong>, explain how<br />
                                it works, and stick around after delivery.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}