import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

const SERVICES = [
  {
    num: '01',
    tag: 'Discord',
    tagType: 'outline',
    icon: '🤖',
    title: 'Discord Bot',
    short: 'A custom Discord bot built for your server.',
    full: "Custom bots for moderation, welcome messages, leveling systems, ticket support, or fully custom commands. We handle setup, hosting guidance, and a walkthrough so you're never stuck.",
    highlight: false,
  },
  {
    num: '02',
    tag: 'Most Popular',
    tagType: 'solid',
    icon: '🎓',
    title: 'Student Project',
    short: 'End-to-end mini and major college projects.',
    full: 'Clean, working code, full documentation, a presentation deck, and dedicated viva prep — so you understand your own project inside out.',
    highlight: true,
  },
  {
    num: '03',
    tag: 'Local Business',
    tagType: 'outline',
    icon: '🏪',
    title: 'Business Website',
    short: 'Fast, mobile-first websites for local businesses.',
    full: 'A simple, fast website for your gym, shop, or local service. Mobile-first, WhatsApp button built in, Google Maps embed, and a contact form that actually works — live in days.',
    highlight: false,
  },
  {
    num: '04',
    tag: 'Launch',
    tagType: 'outline',
    icon: '🚀',
    title: 'Landing Page',
    short: 'A focused single-page site for a launch or brand.',
    full: 'A focused single-page site for a launch, offer, or personal brand. Built fast, loads fast, and gets straight to the point.',
    highlight: false,
  },
];

export default function Services({ onOpenBooking, preview = false }) {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        zIndex: 11,
        background: '#0d0d0f',
        color: '#f5f5f7',
        padding: '120px 0 140px',
      }}
    >
      {/* Subtle red ambient top-right glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '50vw', height: '60%',
        background: 'radial-gradient(ellipse at top right, rgba(232,37,26,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* ── Section heading — LEFT aligned, editorial ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ display: 'block', width: '32px', height: '1px', background: '#e8251a' }} />
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#e8251a', margin: 0,
            }}>Our Expertise</p>
          </div>
          <h2 className="typo-section-h2" style={{ margin: '0 0 20px' }}>
            Digital<br />
            <span style={{ color: 'var(--red)' }}>Solutions.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-ui)', fontSize: '1.05rem',
            color: 'rgba(245,245,247,0.45)', lineHeight: 1.75,
            maxWidth: '440px', margin: 0,
          }}>
            Everything you need built, delivered fast — with real support at every step.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.num}
              service={svc}
              index={i}
              preview={preview}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>

        {/* ── Preview CTA ── */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '72px' }}
          >
            <Link
              to="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(245,245,247,0.65)', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px',
                padding: '14px 32px',
                transition: 'color 0.25s, border-color 0.25s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(245,245,247,0.65)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              See all services & pricing →
            </Link>
          </motion.div>
        )}
      </div>

      {/* Mobile single-col */}
      <style>{`
        @media (max-width: 680px) {
          #services .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index, preview, onOpenBooking }) {
  const { num, tag, tagType, icon, title, short, full, highlight } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = highlight ? 'rgba(232,37,26,0.55)' : 'rgba(232,37,26,0.3)';
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = highlight ? 'rgba(232,37,26,0.3)' : 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      style={{
        position: 'relative', overflow: 'hidden',
        padding: '44px 40px',
        borderRadius: '8px',
        background: highlight ? 'rgba(232,37,26,0.05)' : 'rgba(255,255,255,0.025)',
        border: `1px solid ${highlight ? 'rgba(232,37,26,0.3)' : 'rgba(255,255,255,0.07)'}`,
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Highlight card corner glow */}
      {highlight && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '200px', height: '200px',
          background: 'radial-gradient(circle at top right, rgba(232,37,26,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Top row: tag + number */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          padding: '5px 12px', borderRadius: '3px',
          ...(tagType === 'solid'
            ? { background: '#e8251a', color: '#fff', border: '1px solid #e8251a' }
            : { background: 'transparent', color: '#e8251a', border: '1px solid rgba(232,37,26,0.45)' }),
        }}>
          {tag}
        </span>
        <span style={{
          fontFamily: 'var(--font-disp)', fontStyle: 'italic',
          fontSize: '3.5rem', fontWeight: 900, lineHeight: 1,
          color: '#f5f5f7', opacity: 0.07, userSelect: 'none', pointerEvents: 'none',
        }}>
          {num}
        </span>
      </div>

      {/* Icon circle */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', marginBottom: '20px', flexShrink: 0,
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="typo-card-title" style={{ margin: '0 0 14px' }}>
        {title}
      </h3>

      {/* Body */}
      <p className="typo-body" style={{ margin: `0 0 ${preview ? '0' : '36px'}`, flexGrow: 1 }}>
        {preview ? short : full}
      </p>

      {/* CTA */}
      {!preview && (
        <button
          onClick={onOpenBooking}
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '11px 24px', borderRadius: '4px',
            border: '1px solid rgba(232,37,26,0.4)',
            background: 'transparent', color: '#e8251a', cursor: 'pointer',
            transition: 'background 0.22s, color 0.22s, border-color 0.22s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#e8251a';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = '#e8251a';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#e8251a';
            e.currentTarget.style.borderColor = 'rgba(232,37,26,0.4)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Get Started ↗
        </button>
      )}

      {/* Subtle bottom red line for highlight card */}
      {highlight && (
        <div style={{
          position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,37,26,0.6), transparent)',
        }} />
      )}
    </motion.div>
  );
}