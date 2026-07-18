import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "BCA Student",
      text: "Helped me finish my major project on time. Code was clean and they explained how it worked so I could answer viva questions easily."
    },
    {
      name: "Anita V.",
      role: "Clinic Owner",
      text: "Got a website for my dental clinic. Patients can now message us directly on WhatsApp from the site. Very fast turnaround."
    },
    {
      name: "Karan M.",
      role: "Discord Community Manager",
      text: "The custom Discord bot handles our server verification and ticketing perfectly. Support is always fast when we need updates."
    }
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="label">Reviews</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">What people say</motion.h2>

        <div className="testimonials-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '60px'
        }}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', color: 'var(--navy)', marginBottom: '16px' }}>
                ★★★★★
              </div>
              <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t.name}</h4>
                <p style={{ margin: 0, color: 'var(--text-mute)', fontSize: '0.9rem', marginTop: '4px' }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
