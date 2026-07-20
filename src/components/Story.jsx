import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';
import Antigravity from './Antigravity';

export default function Story() {
    const containerRef = useRef(null);
    
    // Track scroll through the section
    const { scrollYProgress } = useScroll({ 
        target: containerRef, 
        offset: ["start end", "end start"] 
    });
    
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Dynamic Speed State for 3D Background
    const [particleSpeed, setParticleSpeed] = useState(0.4);
    const [particleRotation, setParticleRotation] = useState(0.5);

    // Listen to scroll progress and update speeds
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        // Maps scroll progress (0 to 1) to a speed range
        setParticleSpeed(0.4 + (latest * 2.5));
        setParticleRotation(0.5 + (latest * 3.0));
    });

    // Parallax effect for the bento grid itself
    const yBento = useTransform(smoothProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="section" style={{ position: 'relative', padding: '160px 0', background: 'var(--bg)', overflow: 'hidden' }}>
            
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
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                        <h2 className="typo-section-h2" style={{ marginBottom: '24px' }}>
                            Most student projects are copy-pasted.<br />
                            <span style={{ color: 'var(--text-mute)' }}>Most businesses never get a website at all.</span>
                        </h2>
                        <p className="typo-body">
                            Your Discord server deserves better than a broken bot. Your final year project deserves to actually work. You don't need an agency retainer. You need it built, working, and delivered.
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
                        
                        <p className="typo-badge" style={{ color: 'var(--red)', marginBottom: '16px' }}>The Hard Truth</p>
                        
                        <h3 className="typo-section-h2" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                            Built. <br />Not <br /><span style={{ color: 'var(--red)' }}>Borrowed.</span>
                        </h3>
                        
                        <p className="typo-body">
                            We build real, working products — fast — for people who need <strong style={{ color: 'var(--text)', fontWeight: 600 }}>results</strong>, not just a portfolio piece.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}