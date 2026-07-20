import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

const projects = [
  {
    href:    'https://muzaffarpurbangles.netlify.app',
    img:     '/ml.png',
    tag:     'Client',
    tagType: 'client',
    title:   'Muzaffarpur Lahathi',
    desc:    'Local business — multi-page, mobile-first',
    cta:     'View Live ↗',
  },
  {
    href:    'https://landing-page-one-psi-78.vercel.app',
    img:     '/EL.png',
    tag:     'Client',
    tagType: 'client',
    title:   'Shoe Business Landing Page',
    desc:    'Real client project — Delhi',
    cta:     'View Live ↗',
  },
  {
    href:    'https://portfolio-three-kappa-s7zhcqjn04.vercel.app',
    img:     '/ss.png',
    tag:     'Portfolio',
    tagType: 'portfolio',
    title:   'Personal Portfolio Website',
    desc:    'Built for freelancing & internship applications',
    cta:     'View Live ↗',
  },
  {
    href:    'https://noidle.vercel.app',
    img:     '/ds.png',
    tag:     'Client',
    tagType: 'client',
    title:   'Noidle — Discord Community',
    desc:    'Tech community server with 100+ members',
    cta:     'View Code ↗',
  },
  {
    href:    'https://sa50tyam11.github.io/BCA-grade-calculator/',
    img:     'assets/grade.png',
    tag:     'Academic',
    tagType: 'academic',
    title:   'Grade / CGPA Calculator',
    desc:    'Pure JS calculation engine for BCA students',
    cta:     'View Live ↗',
  },
];

const tagColors = {
  client:    { bg: 'rgba(232,37,26,0.12)', color: '#e8251a', border: 'rgba(232,37,26,0.3)' },
  portfolio: { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: 'rgba(255,255,255,0.12)' },
  academic:  { bg: 'rgba(100,160,255,0.1)', color: '#88b4ff', border: 'rgba(100,160,255,0.25)' },
};

export default function Work({ onOpenBooking, preview = false }) {
  const visible = preview ? projects.slice(0, 4) : projects;

  return (
    <section
      id="work"
      style={{
        padding: preview ? '100px 0' : '120px 0',
        background: '#0d0d0f',
        color: '#fff',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section header */}
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: '72px' }}
        >
          <p className="typo-badge" style={{ color: 'var(--red)', marginBottom: '16px' }}>
            Portfolio
          </p>
          <h2 className="typo-section-h2" style={{ margin: 0 }}>
            Recent Work
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {visible.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s ease, transform 0.35s ease, box-shadow 0.35s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,37,26,0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div style={{
                aspectRatio: '16/9',
                overflow: 'hidden',
                position: 'relative',
                background: '#111',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${p.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s ease',
                }} className="work-img-inner" />
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(6,4,4,0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }} className="work-overlay">
                  <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.4)',
                    padding: '10px 22px',
                    borderRadius: '4px',
                  }}>{p.cta}</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '24px 28px' }}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: '3px',
                  marginBottom: '12px',
                  ...tagColors[p.tagType],
                  border: `1px solid ${tagColors[p.tagType].border}`,
                }}>
                  {p.tag}
                </span>
                <h4 className="typo-card-title" style={{ margin: '0 0 6px' }}>
                  {p.title}
                </h4>
                <p className="typo-body" style={{ margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            </motion.a>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: visible.length * 0.07 }}
            style={{
              borderRadius: '6px',
              border: '1px solid rgba(232,37,26,0.2)',
              background: 'rgba(232,37,26,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              padding: '36px',
              minHeight: '200px',
              gap: '16px',
            }}
          >
            <p className="typo-card-title" style={{ margin: 0 }}>
              Got something<br />in mind?
            </p>
            <button
              className="rw-btn rw-btn--primary"
              onClick={onOpenBooking}
              style={{ fontSize: '0.68rem', padding: '12px 24px' }}
            >
              Start a Project →
            </button>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
            }}>
              Free consultation · No commitment
            </span>
          </motion.div>
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <Link
              to="/work"
              className="rw-btn rw-btn--ghost"
              style={{ display: 'inline-flex' }}
            >
              See More Work →
            </Link>
          </motion.div>
        )}
      </div>

      {/* Hover effects via style injection */}
      <style>{`
        a:hover .work-img-inner { transform: scale(1.06); }
        a:hover .work-overlay   { opacity: 1 !important; }
      `}</style>
    </section>
  );
}