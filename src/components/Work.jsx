import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

const caseStudies = [
  {
    href:    'https://muzaffarpurbangles.netlify.app',
    img:     '/ml.png',
    title:   'Muzaffarpur Lahathi',
    category: 'E-Commerce / Local Business',
    desc:    'A modern, mobile-first e-commerce platform built for a local traditional business to expand their digital footprint. Engineered with high performance and seamless user experience in mind.',
    metrics: [
      { label: 'Performance', value: '98/100' },
      { label: 'Increase in reach', value: '300%' },
    ],
    tech: ['React', 'Tailwind CSS', 'Vite'],
    cta:     'View Live Site ↗',
  },
  {
    href:    'https://landing-page-one-psi-78.vercel.app',
    img:     '/EL.png',
    title:   'Shoe Business Platform',
    category: 'Landing Page Optimization',
    desc:    'A high-conversion landing page designed for a premium shoe retailer in Delhi. Focused on visual storytelling, micro-animations, and maximizing click-through rates.',
    metrics: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Load Time', value: '< 1.2s' },
    ],
    tech: ['React', 'Framer Motion', 'Tailwind'],
    cta:     'View Live Site ↗',
  }
];

const projects = [
  {
    href:    'https://portfolio-three-kappa-s7zhcqjn04.vercel.app',
    img:     '/ss.png',
    tag:     'Portfolio',
    tagType: 'portfolio',
    title:   'Personal Portfolio',
    desc:    'Built for freelancing & internship applications',
    cta:     'View Live ↗',
  },
  {
    href:    'https://noidle.vercel.app',
    img:     '/ds.png',
    tag:     'Client',
    tagType: 'client',
    title:   'Noidle Discord Site',
    desc:    'Tech community server with 100+ members',
    cta:     'View Code ↗',
  },
  {
    href:    'https://sa50tyam11.github.io/BCA-grade-calculator/',
    img:     'assets/grade.png',
    tag:     'Academic',
    tagType: 'academic',
    title:   'Grade Calculator',
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
  const visibleProjects = preview ? projects.slice(0, 1) : projects;
  const visibleCaseStudies = preview ? caseStudies.slice(0, 1) : caseStudies;

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
            {preview ? 'Featured Work' : 'Case Studies & Projects'}
          </h2>
        </motion.div>

        {/* Featured Case Studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '80px' }}>
          {visibleCaseStudies.map((study, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE }}
                className={`case-study-container ${isEven ? 'row-normal' : 'row-reverse'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '48px',
                }}
              >
                {/* Image Section */}
                <a
                  href={study.href}
                  target="_blank"
                  rel="noreferrer"
                  className="case-study-image"
                  style={{
                    flex: '1.2',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: '#111',
                    aspectRatio: '16/10',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className="case-study-img-inner"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url('${study.img}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  <div
                    className="case-study-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(6,4,4,0.75)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.4)',
                      padding: '12px 24px',
                      borderRadius: '4px',
                    }}>{study.cta}</span>
                  </div>
                </a>

                {/* Content Section */}
                <div className="case-study-content" style={{ flex: '1', padding: '20px 0' }}>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--red-glow)',
                    marginBottom: '16px',
                  }}>
                    {study.category}
                  </span>
                  <h3 className="typo-section-h3" style={{ marginBottom: '20px', fontSize: '2rem' }}>
                    {study.title}
                  </h3>
                  <p className="typo-body" style={{ marginBottom: '32px', color: 'var(--text-dim)' }}>
                    {study.desc}
                  </p>
                  
                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
                    {study.metrics.map(metric => (
                      <div key={metric.label}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                          {metric.value}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    {study.tech.map(t => (
                      <span key={t} style={{
                        padding: '6px 12px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: 'var(--text-dim)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={study.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-red"
                    style={{ padding: '12px 28px', fontSize: '0.8rem', display: 'inline-flex', borderRadius: '4px', textDecoration: 'none' }}
                  >
                    {study.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="typo-section-h3" style={{ marginBottom: '32px', fontSize: '1.5rem', color: 'var(--text-dim)' }}>
            Other Selected Works
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {visibleProjects.map((p, i) => (
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
            transition={{ duration: 0.6, ease: EASE, delay: visibleProjects.length * 0.07 }}
            className="cta-card-hover"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(225, 29, 72, 0.3)',
              background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.1) 0%, rgba(10, 10, 12, 0.8) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px 36px',
              minHeight: '280px',
              gap: '24px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(225, 29, 72, 0.05)',
            }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at 50% 0%, rgba(225, 29, 72, 0.15), transparent 60%)',
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <p className="typo-section-h3" style={{ margin: 0, fontSize: '1.8rem', color: '#fff' }}>
                Ready to build something <span style={{ color: 'var(--red-glow)' }}>extraordinary?</span>
              </p>
              <button
                className="btn-red"
                onClick={onOpenBooking}
                style={{ fontSize: '0.85rem', padding: '14px 32px', borderRadius: '6px', cursor: 'pointer', border: 'none', outline: 'none' }}
              >
                Start a Project →
              </button>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}>
                Free consultation · No commitment
              </span>
            </div>
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
              className="btn-ghost-hero"
              style={{ display: 'inline-flex', padding: '12px 32px', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none' }}
            >
              See All Projects & Case Studies →
            </Link>
          </motion.div>
        )}
      </div>

      {/* Hover effects & Responsive styles via style injection */}
      <style>{`
        .case-study-image:hover .case-study-img-inner { transform: scale(1.04); }
        .case-study-image:hover .case-study-overlay   { opacity: 1 !important; }
        
        a:hover .work-img-inner { transform: scale(1.06); }
        a:hover .work-overlay   { opacity: 1 !important; }

        .cta-card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .cta-card-hover:hover { transform: translateY(-4px); box-shadow: 0 15px 50px rgba(225, 29, 72, 0.12) !important; }

        @media (max-width: 968px) {
          .case-study-container {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .case-study-content {
            padding: 0 !important;
          }
        }
        
        @media (min-width: 969px) {
          .case-study-container.row-reverse {
            flex-direction: row-reverse;
          }
        }
      `}</style>
    </section>
  );
}