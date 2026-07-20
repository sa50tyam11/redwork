import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle, FiCode, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B0C10] text-white pt-24 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Logo & Intro */}
          <div className="col-span-1 md:col-span-4 pr-0 md:pr-10">
            <a href="/" className="flex items-center gap-1.5 mb-6" style={{ fontFamily: 'var(--font-disp)', fontSize: '1.5rem', letterSpacing: '-0.04em' }}>
              <span className="text-white italic font-black">RED</span>
              <span className="italic font-black text-[#e8251a]">WORK</span>
              <span className="text-[10px] font-sans font-medium text-white/50 uppercase tracking-widest mt-1 ml-2">Web Studio</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
              Engineering elite digital experiences. We architect uncompromising software for world-class brands.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xl mb-6 font-serif italic text-white/90 font-medium">Services</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="/#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Full-Stack Solutions</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Deployment & Scaling</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl mb-6 font-serif italic text-white/90 font-medium">Quick Links</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="/#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/404" className="hover:text-white transition-colors">404 Page Demo</a></li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  Start a Project
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8251a]"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xl mb-6 font-serif italic text-white/90 font-medium">Get In Touch</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-[#e8251a]" />
                <a href="mailto:senowebstudio@gmail.com" className="hover:text-white transition-colors">senowebstudio@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-[#e8251a]" />
                <a href="tel:+917667261838" className="hover:text-white transition-colors">+91 76672 61838</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="w-4 h-4 text-[#e8251a]" />
                <span>Operating across India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-xs font-medium pb-8 md:pb-0 z-20">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><FiMessageCircle className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><FiCode className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><FiExternalLink className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><FiGlobe className="w-4 h-4" /></a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-right">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Security</a>
            </div>
            <span>© 2026 REDWORK. All rights reserved. REDWORK is maintained by <a href="https://senostudio.in" target="_blank" rel="noreferrer" className="hover:text-white underline underline-offset-2 transition-colors">senostudio.in</a> main website.</span>
          </div>
        </div>

      </div>

      {/* Giant REDWORK Background Text */}
      <div className="w-full overflow-hidden flex justify-center mt-[-40px] md:mt-[-60px] relative z-0 pointer-events-none select-none">
        <h1 
          className="font-black text-transparent leading-none"
          style={{ 
            fontFamily: 'var(--font-disp)',
            fontSize: 'clamp(60px, 13.5vw, 250px)',
            WebkitTextStroke: '1px rgba(232, 37, 26, 0.4)',
            whiteSpace: 'nowrap',
            transform: 'translateY(25%)'
          }}
        >
          REDWORK
        </h1>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917667261838" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A2E23] border border-[#25D366]/20 rounded-full pl-5 pr-1.5 py-1.5 hover:bg-[#1f382a] transition-all group shadow-2xl"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase hidden sm:block">Chat With Us</span>
        <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
          <svg className="w-5 h-5 text-white ml-[1px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>

    </footer>
  );
}