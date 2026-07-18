import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Work({ onOpenBooking, preview = false }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="section section-dark" id="work" style={{ padding: preview ? '80px 0' : '120px 0' }}>
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="label">Portfolio</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">Recent Work</motion.h2>

        <div className="work-grid">
          <motion.a variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} href="https://muzaffarpurbangles.netlify.app" target="_blank" rel="noreferrer" className="work-card">
            <div className="work-img" style={{ backgroundImage: "url('/ml.png')" }}>
              <div className="work-hover"><span>View Live ↗</span></div>
            </div>
            <div className="work-info">
              <span className="work-tag client">Client</span>
              <h4>Muzaffarpur Lahathi</h4>
              <p>Local business demo — multi-page, mobile-first</p>
            </div>
          </motion.a>

          <motion.a variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }} href="https://landing-page-one-psi-78.vercel.app" target="_blank" rel="noreferrer" className="work-card">
            <div className="work-img" style={{ backgroundImage: "url('/EL.png')" }}>
              <div className="work-hover"><span>View Live ↗</span></div>
            </div>
            <div className="work-info">
              <span className="work-tag client">Client</span>
              <h4>Shoe Business Landing Page</h4>
              <p>Real client project — Delhi</p>
            </div>
          </motion.a>

          <motion.a variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }} href="https://portfolio-three-kappa-s7zhcqjn04.vercel.app" target="_blank" rel="noreferrer" className="work-card">
            <div className="work-img" style={{ backgroundImage: "url('/ss.png')" }}>
              <div className="work-hover"><span>View Live ↗</span></div>
            </div>
            <div className="work-info">
              <span className="work-tag">Portfolio</span>
              <h4>Personal Portfolio Website</h4>
              <p>Built for freelancing & internship applications</p>
            </div>
          </motion.a>

          <motion.a variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.3 }} href="https://noidle.vercel.app" target="_blank" rel="noreferrer" className="work-card">
            <div className="work-img" style={{ backgroundImage: "url('/ds.png')" }}>
              <div className="work-hover"><span>View Code ↗</span></div>
            </div>
            <div className="work-info">
              <span className="work-tag client">Client</span>
              <h4>Noidle - Discord</h4>
              <p>Tech Community Server with 100+ members</p>
            </div>
          </motion.a>

          <motion.a variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.4 }} href="https://sa50tyam11.github.io/BCA-grade-calculator/" target="_blank" rel="noreferrer" className="work-card">
            <div className="work-img" style={{ backgroundImage: "url('assets/grade.png')" }}>
              <div className="work-hover"><span>View Live ↗</span></div>
            </div>
            <div className="work-info">
              <span className="work-tag academic">Academic</span>
              <h4>Grade / CGPA Calculator</h4>
              <p>Pure JS calculation engine for BCA students</p>
            </div>
          </motion.a>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.5 }} className="work-card work-cta-card">
            <p>Got something in mind?</p>
            <button className="btn-red" onClick={onOpenBooking}>Start a Project →</button>
            <span className="work-cta-note">Free consultation · No commitment</span>
          </motion.div>
        </div>

        {preview && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/work" className="btn-ghost-hero" style={{ padding: '16px 32px', fontSize: '1rem', display: 'inline-block' }}>
              See more work →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}