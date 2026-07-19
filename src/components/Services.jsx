import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services({ onOpenBooking, preview = false }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section" id="services" style={{ position: 'relative', zIndex: 11, background: '#151112', color: '#ffffff', padding: '120px 0' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p className="label" style={{ marginBottom: '16px' }}>Our Expertise</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff' }}>Digital Solutions</h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

          {/* Card 1 */}
          <motion.div
            variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="glass-card"
            style={{ padding: '48px', position: 'relative', overflow: 'hidden', background: '#3B1A24', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="card-tag" style={{ background: 'transparent', border: '1px solid var(--blue-tag)', color: 'var(--blue-tag)' }}>DISCORD</div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-disp)', margin: '20px 0', color: '#ffffff' }}>Discord Bot</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: preview ? '0' : '32px' }}>
              {preview
                ? 'A custom Discord bot built for your server.'
                : 'A custom Discord bot built for your server — moderation, welcome messages, leveling systems, ticket support, or fully custom commands. We handle setup, hosting guidance, and a walkthrough so you\'re never stuck.'}
            </p>
            {!preview && (
              <button className="btn-ghost-hero" onClick={onOpenBooking} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Get Started ↗</button>
            )}
          </motion.div>

          {/* Card 2 (Highlight) */}
          <motion.div
            variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
            className="glass-card highlight-card"
            style={{ background: 'linear-gradient(145deg, #4A1B28 0%, #3B1A24 100%)', padding: '48px', position: 'relative', overflow: 'hidden', border: '1px solid var(--red-dim)' }}
          >
            <div className="card-tag" style={{ background: 'var(--red)', color: '#fff', border: 'none' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-disp)', margin: '20px 0', color: '#ffffff' }}>Student / Academic Project</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: preview ? '0' : '32px' }}>
              {preview
                ? 'End-to-end mini and major college projects.'
                : 'End-to-end mini and major college projects. Clean, working code, full documentation, a presentation deck, and dedicated viva prep — so you understand your own project inside out.'}
            </p>
            {!preview && (
              <button className="btn-red" onClick={onOpenBooking} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Get Started ↗</button>
            )}
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="glass-card"
            style={{ padding: '48px', position: 'relative', overflow: 'hidden', background: '#3B1A24', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="card-tag" style={{ background: 'transparent', border: '1px solid var(--text-mute)', color: 'var(--text-dim)' }}>LOCAL BUSINESS</div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-disp)', margin: '20px 0', color: '#ffffff' }}>Business Website</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: preview ? '0' : '32px' }}>
              {preview
                ? 'A simple, fast website for your gym, shop, or local service.'
                : 'A simple, fast website for your gym, shop, or local service. Mobile-first, WhatsApp button built in, Google Maps embed, and a contact form that actually works — live in days.'}
            </p>
            {!preview && (
              <button className="btn-ghost-hero" onClick={onOpenBooking} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Get Started ↗</button>
            )}
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
            className="glass-card"
            style={{ padding: '48px', position: 'relative', overflow: 'hidden', background: '#3B1A24', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="card-tag" style={{ background: 'transparent', border: '1px solid var(--blue-tag)', color: 'var(--blue-tag)' }}>LAUNCH</div>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-disp)', margin: '20px 0', color: '#ffffff' }}>Landing Page</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: preview ? '0' : '32px' }}>
              {preview
                ? 'A focused single-page site for a launch, offer, or personal brand.'
                : 'A focused single-page site for a launch, offer, or personal brand. Built fast, loads fast, and gets straight to the point.'}
            </p>
            {!preview && (
              <button className="btn-ghost-hero" onClick={onOpenBooking} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Get Started ↗</button>
            )}
          </motion.div>

        </div>

        {preview && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/services" className="btn-ghost-hero" style={{ padding: '16px 32px', fontSize: '1rem', display: 'inline-block' }}>
              See all services & pricing →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}