import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Grab all the data from the form inputs
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.from_name || !data.message) {
      setStatus({ type: 'error', msg: '⚠ Please fill in your name and message.' });
      return;
    }

    setStatus({ type: '', msg: '' });

    // Format WhatsApp message
    const phoneNumber = '917667261838';
    const text = `Hi, I'm ${data.from_name}.
    
*Service Needed:* ${data.service || 'Not specified'}
*Email:* ${data.from_email || 'Not provided'}
*Phone:* ${data.phone || 'Not provided'}

*Message:*
${data.message}`;

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(waLink, '_blank');
    
    setStatus({ type: 'success', msg: '✓ Redirecting to WhatsApp...' });
    // e.target.reset(); // Keep form data in case they close the tab by mistake
  };

  return (
    <section className="section" id="contact">
      <div className="container container-narrow">
        <p className="label stagger-on-view in-view">Get In Touch</p>
        <h2 className="section-title stagger-on-view in-view">Contact Us</h2>
        <p className="section-sub stagger-on-view in-view">
          Tell me about your project and let's get it built. Fast.
        </p>

        <form className="contact-form stagger-on-view in-view" onSubmit={handleSubmit} noValidate>
          <div className="cf-row">
            <div className="cf-field">
              <label htmlFor="cf-name">Your Name</label>
              <input type="text" id="cf-name" name="from_name" placeholder="Rahul Sharma" required />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-email">Email Address</label>
              <input type="email" id="cf-email" name="from_email" placeholder="rahul@email.com" />
            </div>
          </div>
          <div className="cf-row">
            <div className="cf-field">
              <label htmlFor="cf-phone">WhatsApp Number</label>
              <input type="tel" id="cf-phone" name="phone" placeholder="+91 98765 43210" />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-service">Service Needed</label>
              <select id="cf-service" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="Discord Bot">Discord Bot</option>
                <option value="Student Project">Student Project</option>
                <option value="Business Website">Business Website</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
            </div>
          </div>
          <div className="cf-field">
            <label htmlFor="cf-message">Project Details</label>
            <textarea 
              id="cf-message" 
              name="message" 
              rows="5"
              placeholder="Describe your project — what you need, your timeline, any references..."
              required
            ></textarea>
          </div>
          <div className="cf-footer">
            <p className="cf-note">You will be redirected to WhatsApp to send this message directly.</p>
            <button type="submit" className="btn-red cf-submit">
              <span>Send via WhatsApp ↗</span>
            </button>
          </div>
          
          {/* Status Message Display */}
          {status.msg && (
            <div className={`cf-status cf-status--${status.type}`} style={{ display: 'block' }}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}