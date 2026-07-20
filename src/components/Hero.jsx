import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const roles = ['Discord Bots', 'Business Websites', 'Student Projects', 'Automation Tools'];
const EASE  = [0.16, 1, 0.3, 1];

export default function Hero({ onOpenBooking }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="rw-hero" aria-label="Hero — Redwork Studio">

      {/* ── Photo layer ─────────────────────────────────────── */}
      <div className="rw-hero__photo" aria-hidden="true" />

      {/* ── Gradient overlays ───────────────────────────────── */}
      <div className="rw-hero__glow"   aria-hidden="true" />
      <div className="rw-hero__vignette" aria-hidden="true" />
      <div className="rw-hero__fade"   aria-hidden="true" />

      {/* ── Scan lines texture ──────────────────────────────── */}
      <div className="rw-hero__scanlines" aria-hidden="true" />

      {/* ══════════════════════════════════════════════════════
          CONTENT — bottom-anchored, left-aligned
      ══════════════════════════════════════════════════════ */}
      <div className="rw-hero__content">

        {/* ── Eyebrow ─────────────────────────────────────── */}
        <motion.div
          className="rw-hero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        >
          <span className="rw-hero__dot" aria-hidden="true" />
          Open for Projects
          <span className="rw-hero__divider" aria-hidden="true">|</span>
          Est. 2024
        </motion.div>

        {/* ── Headline ────────────────────────────────────── */}
        <motion.h1
          className="typo-hero-h1"
          style={{ marginBottom: '24px', fontStyle: 'normal' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.38 }}
        >
          Get it built.<br />
          <em className="rw-hero__h1-em" style={{ fontStyle: 'normal' }}>Get it right.</em>
        </motion.h1>

        {/* ── Ticker ──────────────────────────────────────── */}
        <motion.div
          className="rw-hero__ticker"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.56 }}
          aria-live="polite"
          aria-label={`We build ${roles[roleIndex]}`}
        >
          <span className="rw-hero__ticker-prefix">We build&nbsp;</span>
          <span className="rw-hero__ticker-window">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="rw-hero__ticker-word"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%',   opacity: 1 }}
                exit={{    y: '-110%', opacity: 0 }}
                transition={{ duration: 0.42, ease: EASE }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* ── Description ─────────────────────────────────── */}
        <motion.p
          className="typo-body"
          style={{ maxWidth: '500px', marginBottom: '44px' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.72 }}
        >
          Discord bots, final-year projects, and business websites —<br className="rw-hero__br" />
          delivered in days with real people to talk to along the way.
        </motion.p>

        {/* ── CTAs ────────────────────────────────────────── */}
        <motion.div
          className="rw-hero__ctas"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.88 }}
        >
          <button
            type="button"
            className="rw-btn rw-btn--primary"
            onClick={onOpenBooking}
            aria-label="Book a free consultation"
          >
            Book Free Consult
          </button>

          <Link to="/work" className="rw-btn rw-btn--ghost">
            View Our Work&nbsp;↗
          </Link>
        </motion.div>

        {/* ── Horizontal Stats Bar (Replaces floating chips) ── */}
        <motion.div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '12px',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '8px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)'
          }}>
            <strong style={{ fontSize: '1.5rem', color: 'var(--text)', fontFamily: 'var(--font-disp)' }}>48<span style={{ fontSize: '0.8rem', opacity: 0.6 }}>hr</span></strong>
            <span className="typo-badge" style={{ color: 'var(--text-mute)', fontSize: '0.7rem' }}>Avg. Response</span>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '8px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)'
          }}>
            <strong style={{ fontSize: '1.5rem', color: 'var(--text)', fontFamily: 'var(--font-disp)' }}>10<span style={{ fontSize: '0.8rem', color: 'var(--red)' }}>+</span></strong>
            <span className="typo-badge" style={{ color: 'var(--text-mute)', fontSize: '0.7rem' }}>Projects Delivered</span>
          </div>
        </motion.div>
      </div>

      {/* ── Red accent line ─────────────────────────────────── */}
      <motion.div
        className="rw-hero__line"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 1.5 }}
      />
    </section>
  );
}