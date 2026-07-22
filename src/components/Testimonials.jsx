import { motion } from 'framer-motion';

/* ─── animation variants ────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── testimonial data ──────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Rahul S.',
    role: 'BCA Student',
    text: 'Helped me finish my major project on time. Code was clean and they explained how it worked so I could answer viva questions easily.',
    rating: 5,
  },
  {
    name: 'Anita V.',
    role: 'Clinic Owner',
    text: 'Got a website for my dental clinic. Patients can now message us directly on WhatsApp from the site. Very fast turnaround. Great communication throughout.',
    rating: 4,
  },
  {
    name: 'Karan M.',
    role: 'Discord Community Manager',
    text: 'The custom Discord bot handles our server verification and ticketing perfectly. Support is always fast when we need updates.',
    rating: 5,
  },
];

/* ─── styles ─────────────────────────────────────────────────────────────── */
const S = {
  section: {
    background: '#0d0d0f',
    color: '#f5f5f7',
    padding: '128px 0',
  },
  container: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 32px',
  },
  labelRow: {
    marginBottom: '72px',
    textAlign: 'center',
  },
  label: {
    display: 'inline-block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#e8251a',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-disp)',
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
    color: '#f5f5f7',
    lineHeight: 1.1,
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  card: {
    position: 'relative',
    padding: '36px',
    borderRadius: '6px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
  },
  quoteMark: {
    display: 'block',
    fontFamily: 'var(--font-disp)',
    fontSize: '5rem',
    color: 'rgba(232,37,26,0.2)',
    lineHeight: 0,
    marginBottom: '28px',
    paddingTop: '20px',
    userSelect: 'none',
  },
  stars: {
    display: 'block',
    fontSize: '1rem',
    letterSpacing: '2px',
    color: '#e8251a',
    marginBottom: '16px',
  },
  reviewText: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.65)',
    fontStyle: 'italic',
    lineHeight: 1.75,
    margin: '0 0 28px',
    flexGrow: 1,
  },
  divider: {
    width: '32px',
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
    marginBottom: '20px',
    border: 'none',
  },
  authorName: {
    fontFamily: 'var(--font-disp)',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#f5f5f7',
    margin: '0 0 6px',
  },
  authorRole: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    margin: 0,
  },
};

/* ─── TestimonialCard ───────────────────────────────────────────────────── */
function TestimonialCard({ testimonial }) {
  const { name, role, text, rating = 5 } = testimonial;

  const solidStars = '★'.repeat(Math.floor(rating));
  const emptyStars = '☆'.repeat(5 - Math.floor(rating));

  return (
    <motion.div
      variants={cardVariants}
      style={S.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'rgba(232,37,26,0.25)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Large decorative quote mark */}
      <span style={S.quoteMark} aria-hidden="true">"</span>

      {/* Star rating */}
      <span style={S.stars} aria-label={`${rating} stars`}>{solidStars}{emptyStars}</span>

      {/* Review text */}
      <p style={S.reviewText}>{text}</p>

      {/* Subtle rule */}
      <hr style={S.divider} />

      {/* Author */}
      <p style={S.authorName}>{name}</p>
      <p style={S.authorRole}>{role}</p>
    </motion.div>
  );
}

/* ─── Testimonials (default export) ─────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section id="testimonials" style={S.section}>
      <div style={S.container}>

        {/* ── Section heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headingVariants}
          style={S.labelRow}
        >
          <p style={S.label}>Reviews</p>
          <h2 style={S.sectionTitle}>What people say</h2>
        </motion.div>

        {/* ── 3-col testimonial grid ── */}
        <motion.div
          style={S.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Responsive collapse */}
      <style>{`
        @media (max-width: 900px) {
          #testimonials > div > div[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          #testimonials > div > div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
