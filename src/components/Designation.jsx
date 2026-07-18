import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. "Beautiful Content" for a high-end Web Studio
const principles = [
    {
        id: '01',
        title: 'MISSION',
        text: 'To engineer high-performance digital engines that bridge the gap between creative aesthetics and relentless conversion. We transform static web presence into dynamic business assets through strategic mobile-first architecture.',
        // Technical coding environment visual
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
        id: '02',
        title: 'VISION',
        text: 'To redefine the industry standard by proving that extreme speed, pixel-perfect design, and quantifiable lead-generation can coexist flawlessly in every deployment. We strive to become the tactical partner for growth-focused brands.',
        // Modern UI/UX architecture visual
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80'
    },
    {
        id: '03',
        title: 'APPROACH',
        text: 'We employ a military-grade development stack focusing on core web vitals, mobile responsiveness, and intuitive UX. Every project is engineered using scalable architectures that can adapt as quickly as your business expands.',
        // Workspace visual
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    }
];

export default function Designation() {
    const [index, setIndex] = useState(0);

    // 2. AUTOMATION: Cycles through every 5.5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % principles.length);
        }, 5500);
        return () => clearInterval(timer); // Cleanup timer on unmount
    }, []);

    return (
        <section
            style={{
                padding: '120px 0', // Compact padding
                background: 'var(--bg-1)', // Dark background token
                minHeight: '80vh', // Reasonable height, not massive
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="container">
                {/* 3. Balanced side-by-side grid */}
                <div className="responsive-grid designation-grid" style={{ width: '100%' }}>

                    {/* LEFT: FIXED TITLE SECTION (Previously scroll-accordion, now static) */}
                    <div className="designation-left" style={{ paddingRight: '20px', borderRight: '1px solid var(--glass-border)' }}>
                        <p className="label" style={{ color: 'var(--red)', fontSize: '0.65rem' }}>Core DNA</p>
                        <h2 style={{
                            fontSize: '2.5rem', // Size reduced for compactness
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            lineHeight: 1.1,
                            margin: '8px 0 30px 0',
                            fontFamily: 'var(--font-disp)'
                        }}>
                            Our <br /> Designation
                        </h2>

                        {/* Tactical Indicator Bars */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {principles.map((_, i) => (
                                <div key={i} style={{
                                    width: '40px', height: '2px',
                                    background: i === index ? 'var(--red)' : 'var(--glass-border)',
                                    transition: '0.3s ease-out'
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: ANIMATED CONTENT SECTION (Cross-fading Automated Carousel) */}
                    <div style={{ position: 'relative' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} // Snappy yet elegant ease
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px',
                                    maxWidth: '650px'
                                }}
                            >
                                {/* Header: Number [01] + Title (MISSION) */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)', fontSize: '0.75rem' }}>
                                        [{principles[index].id}]
                                    </span>
                                    <h3 style={{
                                        fontSize: '1.6rem', // Size reduced for compactness
                                        fontWeight: 800,
                                        margin: 0,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        {principles[index].title}
                                    </h3>
                                </div>

                                {/* "Beautiful Content" Paragraph */}
                                <p style={{
                                    color: 'var(--text-dim)',
                                    fontSize: '0.95rem', // size kept clear for reading
                                    lineHeight: 1.7,
                                    margin: 0,
                                    maxWidth: '580px',
                                    fontFamily: 'var(--font-ui)'
                                }}>
                                    {principles[index].text}
                                </p>

                                {/* Smaller, Elegant Image Container (IMAGE IS BELOW CONTENT) */}
                                <div style={{
                                    width: '100%',
                                    height: '280px', // COMPACT IMAGE HEIGHT
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--glass-border)', // Tactical border
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.4)', // Sophisticated depth
                                    background: '#000',
                                    position: 'relative'
                                }}>

                                    {/* Subtle Scan-line texture effect */}
                                    <motion.div
                                        animate={{ y: [-280, 280] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'var(--red)', boxShadow: '0 0 10px var(--red)', zIndex: 2, opacity: 0.3 }} />

                                    <img
                                        src={principles[index].image}
                                        alt={`${principles[index].title} Visual`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: 'grayscale(15%) contrast(1.05)'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}