import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';

export default function ContactForm() {
  return (
    <section id="contact" className="section" style={{ padding: '80px 0', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: '60px 48px',
            backdropFilter: 'blur(12px)'
          }}
        >
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label className="typo-badge" style={{ color: 'var(--text-mute)' }}>Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label className="typo-badge" style={{ color: 'var(--text-mute)' }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>

            {/* Project Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label className="typo-badge" style={{ color: 'var(--text-mute)' }}>Project Type</label>
              <select 
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  outline: 'none',
                  appearance: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--red)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <option value="discord" style={{ background: '#111114' }}>Discord Bot</option>
                <option value="business" style={{ background: '#111114' }}>Business Website</option>
                <option value="student" style={{ background: '#111114' }}>Student Project</option>
                <option value="other" style={{ background: '#111114' }}>Other</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label className="typo-badge" style={{ color: 'var(--text-mute)' }}>Message</label>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--red)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              ></textarea>
            </div>

            {/* Submit */}
            <button 
              type="submit"
              className="flex items-center justify-center gap-2"
              style={{
                background: 'var(--red)',
                color: '#fff',
                fontFamily: 'var(--font-ui)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '16px',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#c41a11'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--red)'}
            >
              Send Message <GoArrowUpRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
