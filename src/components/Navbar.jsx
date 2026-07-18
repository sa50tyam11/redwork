import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link className="wordmark" to="/">RED<em>WORK</em></Link>
        <ul className="nav-links">
          <li><Link to="/services" className="nav-pill">Services</Link></li>
          <li><Link to="/work" className="nav-pill">Work</Link></li>
          <li><Link to="/" className="nav-pill">Home</Link></li>
          <li><Link to="/contact" className="nav-pill">Contact</Link></li>
          <li><Link to="/search" className="nav-pill">Search</Link></li>
        </ul>
        <button className="nav-cta" onClick={onOpenBooking}>Get Free Consult</button>
        <button className={`hamburger ${isMobileOpen ? 'open' : ''}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <span></span><span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <Link to="/services" onClick={() => setIsMobileOpen(false)}>Services</Link>
        <Link to="/work" onClick={() => setIsMobileOpen(false)}>Work</Link>
        <Link to="/pricing" onClick={() => setIsMobileOpen(false)}>Pricing</Link>
        <Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link>
        <button className="nav-cta" onClick={() => { onOpenBooking(); setIsMobileOpen(false); }}>Get Free Consult</button>
      </div>
    </nav>
  );
}