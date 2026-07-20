import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const plans = {
  student: [
    {
      badge: 'Mini Project',
      badgeType: 'dim',
      name: 'Basic Project',
      price: '₹799',
      features: ['1 mini project', 'Clean source code', 'Basic documentation'],
      highlight: false,
    },
    {
      badge: '⭐ Popular',
      badgeType: 'red',
      name: 'Pro Project',
      price: '₹1,499',
      features: ['Advanced project', 'Proper logic & structure', 'Docs + PPT + Viva prep'],
      highlight: true,
    },
  ],
  business: [
    {
      badge: 'Starter',
      badgeType: 'dim',
      name: 'Starter Website',
      price: '₹3,999',
      features: ['3–4 pages', 'Mobile responsive', 'WhatsApp integration'],
      highlight: false,
    },
    {
      badge: '⭐ Best Value',
      badgeType: 'red',
      name: 'Business Website',
      price: '₹7,999',
      features: ['6–8 pages', 'Custom UI design', 'Lead-focused layout'],
      highlight: true,
    },
  ],
};

export default function Pricing({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <>
      {/* ── Bold red banner ─────────────────────────────────── */}
      <div style={{
        background: '#e8251a',
        padding: '64px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 20,
        overflow: 'hidden',
      }}>
        {/* Noise texture on banner */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }} />
        <h2 style={{
          position: 'relative',
          fontFamily: 'var(--font-disp)',
          fontSize: 'clamp(2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          fontStyle: 'italic',
          letterSpacing: '-0.03em',
          color: '#fff',
          lineHeight: 1.05,
          margin: 0,
          textShadow: '0 4px 24px rgba(0,0,0,0.25)',
        }}>
          No hidden fees.<br />No retainers.
        </h2>
      </div>

      {/* ── Pricing section ─────────────────────────────────── */}
      <section
        id="pricing"
        style={{ background: '#0d0d0f', color: '#fff', padding: '100px 0' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: '56px' }}
          >
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#e8251a',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#e8251a', opacity: 0.7 }} />
              Estimates
            </p>
            <h2 style={{
              fontFamily: 'var(--font-disp)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.035em',
              color: '#fff',
              margin: '0 0 16px',
            }}>
              Starting Rates
            </h2>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.75,
              margin: 0,
            }}>
              These are <strong style={{ color: 'rgba(255,255,255,0.7)' }}>base estimates only</strong> — final price is quoted after understanding your requirements.
            </p>
          </motion.div>

          {/* Tab toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px',
              padding: '4px',
              marginBottom: '48px',
            }}
          >
            {[['student', 'Student Projects'], ['business', 'Business Websites']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
                  background: activeTab === id ? '#e8251a' : 'transparent',
                  color: activeTab === id ? '#fff' : 'rgba(255,255,255,0.45)',
                  boxShadow: activeTab === id ? '0 4px 20px rgba(232,37,26,0.3)' : 'none',
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {plans[activeTab].map((plan, i) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
                style={{
                  background: plan.highlight ? 'rgba(232,37,26,0.04)' : 'rgba(255,255,255,0.025)',
                  border: `1px solid ${plan.highlight ? 'rgba(232,37,26,0.3)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '6px',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.55)' }}
              >
                {/* Corner glow for highlight card */}
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '120px', height: '120px',
                    background: 'radial-gradient(circle at top right, rgba(232,37,26,0.18) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* Badge */}
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '3px',
                  marginBottom: '24px',
                  background: plan.badgeType === 'red' ? 'rgba(232,37,26,0.15)' : 'rgba(255,255,255,0.05)',
                  color: plan.badgeType === 'red' ? '#e8251a' : 'rgba(255,255,255,0.45)',
                  border: `1px solid ${plan.badgeType === 'red' ? 'rgba(232,37,26,0.35)' : 'rgba(255,255,255,0.1)'}`,
                }}>
                  {plan.badge}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-disp)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#fff',
                  margin: '0 0 8px',
                  letterSpacing: '-0.02em',
                }}>
                  {plan.name}
                </h3>

                <div style={{
                  fontFamily: 'var(--font-disp)',
                  fontSize: '3rem',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: '#fff',
                  lineHeight: 1,
                  margin: '20px 0 24px',
                  letterSpacing: '-0.04em',
                }}>
                  {plan.price}
                  <sup style={{ fontSize: '1.2rem', color: '#e8251a', fontStyle: 'normal' }}>+</sup>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.6)',
                      paddingLeft: '18px',
                      position: 'relative',
                      lineHeight: 1.5,
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#e8251a',
                        fontWeight: 700,
                      }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenBooking}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '13px 24px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: plan.highlight ? '#e8251a' : 'transparent',
                    color: plan.highlight ? '#fff' : 'rgba(255,255,255,0.65)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: plan.highlight ? '#e8251a' : 'rgba(255,255,255,0.15)',
                    transition: 'background 0.25s, box-shadow 0.25s, transform 0.2s, color 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = plan.highlight ? '#c41a11' : 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    if (plan.highlight) e.currentTarget.style.boxShadow = '0 0 28px rgba(232,37,26,0.45)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = plan.highlight ? '#e8251a' : 'transparent';
                    e.currentTarget.style.color = plan.highlight ? '#fff' : 'rgba(255,255,255,0.65)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Get a Quote →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}