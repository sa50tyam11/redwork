import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
// Adjust this import path depending on where the CLI/you saved it!
import Antigravity from './Antigravity';

export default function Story() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // --- NEW: Dynamic Speed State for 3D Background ---
    const [particleSpeed, setParticleSpeed] = useState(0.4);
    const [particleRotation, setParticleRotation] = useState(0.5);

    // Listen to scroll progress and update speeds
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        // Maps scroll progress (0 to 1) to a speed range (0.4 to 2.5)
        setParticleSpeed(0.4 + (latest * 2.1));
        // Maps scroll progress (0 to 1) to a rotation range (0.5 to 3.0)
        setParticleRotation(0.5 + (latest * 2.5));
    });

    // STRICT SEQUENTIAL TIMING: Fades out fully before next line starts
    // Line 1: Active 0% - 25%, Dead 25% - 35%
    const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(smoothProgress, [0, 0.1, 0.2, 0.25], [20, 0, 0, -20]);

    // Line 2: Active 35% - 60%, Dead 60% - 70%
    const opacity2 = useTransform(smoothProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(smoothProgress, [0.35, 0.45, 0.55, 0.6], [20, 0, 0, -20]);

    // Line 3: Active 70% - 100%
    const opacity3 = useTransform(smoothProgress, [0.7, 0.8, 1, 1], [0, 1, 1, 1]);
    const y3 = useTransform(smoothProgress, [0.7, 0.8, 1, 1], [20, 0, 0, 0]);

    return (
        <section ref={containerRef} className="story-section" style={{ height: '400vh', position: 'relative', background: 'var(--bg-hero)' }}>
            <div style={{ position: 'sticky', top: 0, height: '100dvh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

                {/* --- 3D ANTIGRAVITY BACKGROUND --- */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.4,
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

                {/* --- FOREGROUND CONTENT --- */}
                <div className="container responsive-grid story-grid" style={{ width: '100%', position: 'relative', zIndex: 1 }}>

                    {/* LEFT SIDE: SCROLL REVEAL STORY */}
                    <div className="story-left" style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center' }}>
                        <motion.h2 style={{
                            opacity: opacity1, y: y1, position: 'absolute',
                            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontFamily: 'var(--font-disp)', fontWeight: 900, lineHeight: 1.1
                        }}>
                            Most student projects are copy-pasted.<br />
                            <span style={{ color: 'var(--text-on-hero-mute)' }}>Most small businesses never</span> <br />
                            get a website at all.
                        </motion.h2>

                        <motion.h2 style={{
                            opacity: opacity2, y: y2, position: 'absolute',
                            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontFamily: 'var(--font-disp)', fontWeight: 900, lineHeight: 1.1
                        }}>
                            Your Discord server deserves better than a broken bot.<br />
                            <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>Your final year project deserves to actually work.</span>
                        </motion.h2>

                        <motion.h2 style={{
                            opacity: opacity3, y: y3, position: 'absolute',
                            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontFamily: 'var(--font-disp)', fontWeight: 900, lineHeight: 1.1
                        }}>
                            You don't need an agency retainer.<br />
                            You need it <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>built, working, and delivered.</em>
                        </motion.h2>
                    </div>

                    {/* RIGHT SIDE: PUNCHY EYE-CATCHING LINE */}
                    <div className="story-right" style={{
                        borderLeft: '1px solid var(--glass-border)',
                        paddingLeft: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        backdropFilter: 'blur(4px)',
                        background: 'rgba(8, 8, 8, 0.3)',
                        padding: '30px 40px',
                        borderRadius: '20px'
                    }}>
                        <p className="label" style={{ margin: 0 }}>The Hard Truth</p>
                        <h3 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontFamily: 'var(--font-disp)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.04em'
                        }}>
                            Built. <br />Not <br /><span style={{ color: 'var(--red)', textShadow: '0 0 30px rgba(217,58,43,0.3)' }}>Borrowed.</span>
                        </h3>
                        <p style={{ color: 'var(--text-on-hero-dim)', fontSize: '0.9rem', maxWidth: '280px', marginTop: '10px' }}>
                            We build real, working products — fast — for people who need <strong>results</strong>, not just a portfolio piece.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}