import { useState } from 'react';

export default function Pricing({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <>
      <div className="w-full bg-[#e8251a] py-16 text-center shadow-[0_0_40px_rgba(232,37,26,0.2)] relative z-20">
        <h2 className="font-disp text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          No hidden fees. <br className="md:hidden" />No retainers.
        </h2>
      </div>
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
              <div className="pricing-card glass-card">
                <div className="pricing-badge card-tag academic">Mini Project</div>
                <h3 className="font-disp font-bold text-2xl text-white">Basic Project</h3>
                <div className="pricing-price font-disp font-black text-4xl text-white my-4">₹799<sup className="text-[#e8251a] text-xl">+</sup></div>
                <ul className="pricing-list card-list">
                  <li>1 mini project</li><li>Clean source code</li><li>Basic documentation</li>
                </ul>
                <button className="pricing-cta card-cta w-full mt-6" onClick={onOpenBooking}>Get a Quote →</button>
              </div>
               <div className="pricing-card glass-card highlight-card relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e8251a]/10 blur-[20px] rounded-full pointer-events-none"></div>
                <div className="pricing-badge card-tag popular">⭐ Popular</div>
                <h3 className="font-disp font-bold text-2xl text-white">Pro Project</h3>
                <div className="pricing-price font-disp font-black text-4xl text-white my-4">₹1,499<sup className="text-[#e8251a] text-xl">+</sup></div>
                <ul className="pricing-list card-list">
                  <li>Advanced project</li><li>Proper logic & structure</li><li>Documentation + PPT</li>
                </ul>
                <button className="pricing-cta btn-red w-full mt-6" onClick={onOpenBooking}>Get a Quote →</button>
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="pricing-grid">
              <div className="pricing-card glass-card">
                <div className="pricing-badge card-tag">Starter</div>
                <h3 className="font-disp font-bold text-2xl text-white">Starter Website</h3>
                <div className="pricing-price font-disp font-black text-4xl text-white my-4">₹3,999<sup className="text-[#e8251a] text-xl">+</sup></div>
                <ul className="pricing-list card-list">
                  <li>3–4 pages</li><li>Mobile responsive</li><li>WhatsApp integration</li>
                </ul>
                <button className="pricing-cta card-cta w-full mt-6" onClick={onOpenBooking}>Get a Quote →</button>
              </div>
               <div className="pricing-card glass-card highlight-card relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e8251a]/10 blur-[20px] rounded-full pointer-events-none"></div>
                <div className="pricing-badge card-tag popular">⭐ Best Value</div>
                <h3 className="font-disp font-bold text-2xl text-white">Business Website</h3>
                <div className="pricing-price font-disp font-black text-4xl text-white my-4">₹7,999<sup className="text-[#e8251a] text-xl">+</sup></div>
                <ul className="pricing-list card-list">
                  <li>6–8 pages</li><li>Custom UI design</li><li>Lead-focused layout</li>
                </ul>
                <button className="pricing-cta btn-red w-full mt-6" onClick={onOpenBooking}>Get a Quote →</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}