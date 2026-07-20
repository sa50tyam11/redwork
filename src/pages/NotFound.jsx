import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const [scaleY, setScaleY] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  useEffect(() => {
    function updateScale() {
      if (textRef.current) {
        const height = textRef.current.offsetHeight;
        if (height > 0) {
          setScaleY(window.innerHeight / height);
        }
      }
    }
    updateScale();
    setTimeout(updateScale, 100);
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'OUR WORK', href: '/#work' },
    { label: 'PRICING', href: '/#pricing' },
    { label: 'HOW WE WORK', href: '/#how-we-work' }
  ];

  return (
    <div 
      className="w-full h-screen overflow-hidden flex flex-col relative"
      style={{
        backgroundColor: '#0d0d0f',
        fontFamily: "var(--font-ui), sans-serif"
      }}
    >
      {/* BACKGROUND 404 TEXT EFFECT */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40"
        style={{
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)'
        }}
      >
        <div className="relative flex items-center justify-center">
          <div 
            ref={textRef}
            className="font-black leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              color: '#e8251a',
              fontFamily: 'var(--font-disp)',
              fontSize: 'clamp(200px, 48vw, 800px)',
              transform: `scale(1.15, ${scaleY * 1.4})`,
              transformOrigin: 'center'
            }}
          >
            404
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="relative z-20 flex flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-5 sm:py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {/* Logo */}
        <a href="/" className="flex items-center" style={{ fontFamily: 'var(--font-disp)', fontSize: '1.4rem', letterSpacing: '-0.04em' }}>
          <span className="text-white italic font-black">RED</span>
          <span className="italic font-black" style={{ color: '#e8251a' }}>WORK</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(item => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest text-white hover:text-[#e8251a] transition-colors"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/#contact"
            className="ml-4 px-6 py-2.5 text-xs font-bold tracking-widest text-white rounded bg-[#e8251a] hover:bg-white hover:text-[#e8251a] transition-all"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            FREE CONSULT
          </a>
        </div>

        {/* Mobile Menu button */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center px-4 py-2 rounded text-white bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-[#111111] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 sm:p-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center" style={{ fontFamily: 'var(--font-disp)', fontSize: '1.4rem', letterSpacing: '-0.04em' }}>
              <span className="text-white italic font-black">RED</span>
              <span className="italic font-black" style={{ color: '#e8251a' }}>WORK</span>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-8 flex flex-col gap-6 mt-12">
            {navLinks.map((item, i) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-xl font-bold tracking-widest text-white hover:text-[#e8251a] transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ fontFamily: 'var(--font-disp)', transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto p-8">
            <a 
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className={`flex justify-center items-center w-full py-4 rounded text-white font-bold tracking-widest text-sm bg-[#e8251a] hover:bg-white hover:text-[#e8251a] transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: 'var(--font-mono)', transitionDelay: menuOpen ? '400ms' : '0ms' }}
            >
              FREE CONSULT
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-30 mt-auto pb-16 sm:pb-24 flex flex-col items-center text-center px-4">
        <h1 
          className="text-white font-bold mb-6"
          style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
        >
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 max-w-md text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded text-white font-bold text-xs tracking-widest border border-white/20 hover:border-[#e8251a] hover:bg-[#e8251a] transition-all"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO HOME
        </a>
      </div>
    </div>
  );
}
