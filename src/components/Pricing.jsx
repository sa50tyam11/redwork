import { useState } from 'react';

export default function Pricing({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <section className="section" id="pricing">
      <div className="container">
        <p className="label stagger-on-view in-view">Estimates</p>
        <h2 className="section-title stagger-on-view in-view">Starting Rates</h2>
        <p className="section-sub stagger-on-view in-view">These are <strong>base estimates only</strong> — final price is quoted after understanding your requirements.</p>
        
        <div className="pricing-toggle stagger-on-view in-view">
          <button className={`toggle-btn ${activeTab === 'student' ? 'active' : ''}`} onClick={() => setActiveTab('student')}>Student Projects</button>
          <button className={`toggle-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>Business Websites</button>
        </div>

        {activeTab === 'student' && (
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Mini Project</div>
              <h3>Basic Project</h3>
              <div className="pricing-price">₹799<sup>+</sup></div>
              <ul className="pricing-list">
                <li>1 mini project</li><li>Clean source code</li><li>Basic documentation</li>
              </ul>
              <button className="pricing-cta" onClick={onOpenBooking}>Get a Quote →</button>
            </div>
             <div className="pricing-card popular-card">
              <div className="pricing-badge popular">⭐ Popular</div>
              <h3>Pro Project</h3>
              <div className="pricing-price">₹1,499<sup>+</sup></div>
              <ul className="pricing-list">
                <li>Advanced project</li><li>Proper logic & structure</li><li>Documentation + PPT</li>
              </ul>
              <button className="pricing-cta" onClick={onOpenBooking}>Get a Quote →</button>
            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Starter</div>
              <h3>Starter Website</h3>
              <div className="pricing-price">₹3,999<sup>+</sup></div>
              <ul className="pricing-list">
                <li>3–4 pages</li><li>Mobile responsive</li><li>WhatsApp integration</li>
              </ul>
              <button className="pricing-cta" onClick={onOpenBooking}>Get a Quote →</button>
            </div>
             <div className="pricing-card popular-card">
              <div className="pricing-badge popular">⭐ Best Value</div>
              <h3>Business Website</h3>
              <div className="pricing-price">₹7,999<sup>+</sup></div>
              <ul className="pricing-list">
                <li>6–8 pages</li><li>Custom UI design</li><li>Lead-focused layout</li>
              </ul>
              <button className="pricing-cta" onClick={onOpenBooking}>Get a Quote →</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}