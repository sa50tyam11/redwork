import { useState, useEffect } from 'react';

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const firstDayOfMonth = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  
  const handlePrevMonth = () => {
    if (calMonth === 0) { setCalYear(calYear - 1); setCalMonth(11); } 
    else { setCalMonth(calMonth - 1); }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) { setCalYear(calYear + 1); setCalMonth(0); } 
    else { setCalMonth(calMonth + 1); }
  };

  const handleConfirm = () => {
    const dateStr = date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const msg = `Hi Seno! 👋\n\n📋 *Booking Request*\nService: ${service}\nDate: ${dateStr}\nTime: ${time}\n\n👤 *My Details*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n📝 *Project Details*\n${formData.note}`;
    window.open(`https://wa.me/917667261838?text=${encodeURIComponent(msg)}`, '_blank');
    setStep(4);
  };

  const resetAndClose = () => {
    setStep(1); setService(null); setDate(null); setTime(null);
    setFormData({ name: '', email: '', phone: '', note: '' });
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop open" onClick={resetAndClose}></div>
      <div className="modal open">
        <button className="modal-close" onClick={resetAndClose}>✕</button>

        {step < 4 && (
          <>
            <div className="step-indicator">
              <div className={`step-dot ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>1</div>
              <div className={`step-line ${step > 1 ? 'done' : ''}`}></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}`}>2</div>
              <div className={`step-line ${step > 2 ? 'done' : ''}`}></div>
              <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <div className="step-labels">
              <span>Service</span><span>Date</span><span>Confirm</span>
            </div>
          </>
        )}

        {step === 1 && (
          <div className="modal-step active">
            <h2 className="modal-title">What do you need?</h2>
            <div className="service-options">
              {['Web Development', 'UI/UX Design', 'Full-Stack Solutions', 'Deployment & Scaling'].map((opt) => (
                <button 
                  key={opt}
                  className={`service-option ${service === opt ? 'selected' : ''}`}
                  onClick={() => setService(opt)}
                >
                  <span className="so-label">{opt}</span>
                </button>
              ))}
            </div>
            <button className="modal-next" disabled={!service} onClick={() => setStep(2)}>Continue →</button>
          </div>
        )}

        {step === 2 && (
          <div className="modal-step active">
            <h2 className="modal-title">Pick a date</h2>
            <div className="calendar">
              <div className="calendar-header">
                <button className="cal-nav" onClick={handlePrevMonth}>‹</button>
                <span className="cal-month-title">{MONTH_NAMES[calMonth]} {calYear}</span>
                <button className="cal-nav" onClick={handleNextMonth}>›</button>
              </div>
              <div className="cal-weekdays">
                {DAY_NAMES.map(d => <span key={d}>{d}</span>)}
              </div>
              <div className="cal-days">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} className="cal-day empty" />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const d = i + 1;
                  const cellDate = new Date(calYear, calMonth, d);
                  const isPast = cellDate < new Date(today.setHours(0,0,0,0));
                  const isSun = cellDate.getDay() === 0;
                  const isSelected = date?.getDate() === d && date?.getMonth() === calMonth && date?.getFullYear() === calYear;

                  return (
                    <button 
                      key={d}
                      disabled={isPast || isSun}
                      className={`cal-day ${isPast || isSun ? 'past' : ''} ${isSelected ? 'selected' : ''}`}
                      onClick={() => { setDate(cellDate); setTime(null); }}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="time-slots">
              <p className="slots-label">Available time slots</p>
              <div className="slots-grid">
                {TIME_SLOTS.map(slot => (
                  <button 
                    key={slot}
                    className={`time-slot ${time === slot ? 'selected' : ''}`}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-nav" style={{marginTop: '20px'}}>
              <button className="modal-back" onClick={() => setStep(1)}>← Back</button>
              <button className="modal-next" disabled={!date || !time} onClick={() => setStep(3)}>Continue →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="modal-step active">
            <h2 className="modal-title">Almost there!</h2>
            <div className="booking-summary">
              <div><span style={{color:'var(--text-mute)'}}>Service:</span> <strong>{service}</strong></div>
              <div><span style={{color:'var(--text-mute)'}}>Date:</span> <strong>{date?.toLocaleDateString()}</strong></div>
              <div><span style={{color:'var(--text-mute)'}}>Time:</span> <strong>{time}</strong></div>
            </div>
            <div className="contact-fields">
              <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Your email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <input type="tel" placeholder="WhatsApp number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <textarea placeholder="Tell me about your project" rows="3" value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})} />
            </div>
            <div className="modal-nav">
              <button className="modal-back" onClick={() => setStep(2)}>← Back</button>
              <button className="modal-next confirm-btn" onClick={handleConfirm}>Send via WhatsApp ↗</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="modal-step active" style={{textAlign: 'center', padding: '40px 0'}}>
            <div className="success-icon">✓</div>
            <h2>Booking Sent!</h2>
            <p>Opening WhatsApp to connect you with SENO.</p>
            <button className="modal-next" onClick={resetAndClose} style={{marginTop: '24px'}}>Done</button>
          </div>
        )}
      </div>
    </>
  );
}