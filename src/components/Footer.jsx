import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <div className="w-8 h-8 bg-[var(--red)] rounded-[8px] flex items-center justify-center">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z" fill="white" />
      <path d="M4 20L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

const FooterCard = () => {
  const socials = [
    { name: 'LinkedIn', icon: FaLinkedin },
    { name: 'Twitter', icon: FaTwitter },
    { name: 'Instagram', icon: FaInstagram },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-[var(--bg-1)] rounded-[48px] border border-[var(--glass-border)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="bg-[var(--bg-2)] rounded-[40px] m-2 shadow-sm border border-[var(--glass-border)]">
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[26px] font-bold tracking-tight text-[var(--text)]" style={{ fontFamily: 'var(--font-disp)' }}>
                  RED<em className="text-[var(--red)] not-italic">WORK</em>
                </span>
              </div>
              <p className="text-[var(--text-dim)] leading-relaxed text-[16px] font-normal max-w-[320px]">
                Bots, Projects & Small Business Websites. Premium strategic solutions designed to elevate your brand presence.
              </p>
              <p className="text-[14px] text-[var(--text-mute)] max-w-[320px]">
                Maintained and managed by our main website,{' '}
                <a href="https://senostudio.in" target="_blank" rel="noreferrer" className="text-[var(--text-dim)] hover:text-[var(--red)] underline transition-colors">
                  senostudio.in
                </a>.
              </p>
              <div className="flex gap-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button key={idx} className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--bg-1)] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[var(--glass)] transition-all active:scale-95 group">
                      <Icon className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[var(--text-mute)] uppercase tracking-wider">Pages</h4>
              <ul className="space-y-4">
                {['Services', 'Work', 'Pricing', 'Testimonials'].map(link => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-[15px] font-medium text-[var(--text-dim)] hover:text-[var(--red)] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[var(--text-mute)] uppercase tracking-wider">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/how-we-work" className="text-[15px] font-medium text-[var(--text-dim)] hover:text-[var(--red)] transition-colors">How We Work</Link></li>
                <li><Link to="/contact" className="text-[15px] font-medium text-[var(--text-dim)] hover:text-[var(--red)] transition-colors">Contact</Link></li>
                <li><a href="https://senostudio.in" target="_blank" rel="noreferrer" className="text-[15px] font-medium text-[var(--text-dim)] hover:text-[var(--red)] transition-colors">Seno Studio</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[var(--text-mute)] uppercase tracking-wider">Connect</h4>
              <div className="pt-2">
                <a href="https://wa.me/917667261838" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[var(--red-dim)] border border-[rgba(232,37,26,0.3)] text-[var(--red)] px-5 py-3 rounded-xl hover:bg-[rgba(232,37,26,0.25)] hover:border-[rgba(232,37,26,0.4)] hover:-translate-y-1 transition-all duration-200">
                  <FaWhatsapp className="w-5 h-5" />
                  <span className="font-semibold text-[15px]">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          <p className="text-[var(--text-mute)] font-medium">© {new Date().getFullYear()} Redwork. All rights reserved.</p>
          <div className="flex flex-row gap-8 text-[var(--text-mute)] font-medium items-center">
            <a href="#" className="hover:text-[var(--text)] transition-colors">Legal Center</a>
            <div className="w-[1px] h-4 bg-[var(--glass-border)]" />
            <a href="#" className="hover:text-[var(--text)] transition-colors">User Agreement</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const GlassText = () => (
  <div className="relative w-full flex items-center justify-center select-none pt-0">
    <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <defs>
        <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.8" result="outer-shadow"/>
          <feComponentTransfer in="SourceAlpha" result="alpha"><feFuncA type="linear" slope="1" /></feComponentTransfer>
          <feOffset in="alpha" dx="0" dy="4" result="offset-white" />
          <feGaussianBlur in="offset-white" stdDeviation="4" result="blur-white" />
          <feComposite in="alpha" in2="blur-white" operator="out" result="inner-white-mask" />
          <feFlood floodColor="#ffffff" floodOpacity="0.25" result="white-fill" />
          <feComposite in="white-fill" in2="inner-white-mask" operator="in" result="inner-white-final" />
          <feGaussianBlur in="alpha" stdDeviation="6" result="blur-black" />
          <feComposite in="alpha" in2="blur-black" operator="out" result="inner-black-mask" />
          <feFlood floodColor="#000000" floodOpacity="0.5" result="black-fill" />
          <feComposite in="black-fill" in2="inner-black-mask" operator="in" result="inner-black-final" />
          <feMerge>
            <feMergeNode in="outer-shadow" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="inner-white-final" />
            <feMergeNode in="inner-black-final" />
          </feMerge>
        </filter>
      </defs>
    </svg>
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} className="relative">
      <h1 className="text-[min(20vw,320px)] font-bold tracking-tighter leading-none select-none px-4" style={{ filter: 'url(#glass-effect)', fontFamily: 'var(--font-disp)' }}>
        <span className="text-white">red</span><span className="text-[var(--red)]">work</span>
      </h1>
    </motion.div>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-0 bg-[var(--bg)] pt-8 p-4 font-sans antialiased mt-12">
      <FooterCard />
      <GlassText />
    </footer>
  );
}