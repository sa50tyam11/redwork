import { motion } from 'motion/react';
import { Music2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* Immersive Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col flex-1 justify-between">
        {/* Upper CTA Placeholder to push footer to the bottom */}
        <div className="mt-32 text-center">
        </div>

        {/* The Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64 mb-8"
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="var(--red)">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-disp)' }}>RED<em className="text-[var(--red)] not-italic">WORK</em></span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Bots, Projects & Business Websites. Premium strategic solutions designed to elevate your brand presence. Maintained by <a href="https://senostudio.in" target="_blank" rel="noreferrer" className="text-white hover:text-[var(--red)] transition-colors underline">senostudio.in</a>.
              </p>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Pages</h3>
                <ul className="text-xs space-y-2">
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/work" className="hover:text-white transition-colors">Work</a></li>
                  <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Company</h3>
                <ul className="text-xs space-y-2">
                  <li><a href="/how-we-work" className="hover:text-white transition-colors">How We Work</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="https://senostudio.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Seno Studio</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Connect</h3>
                <ul className="text-xs space-y-2">
                  <li><a href="https://wa.me/917667261838" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">Chat on WhatsApp</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Legal Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">User Agreement</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">© {new Date().getFullYear()} Redwork. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Join the Journey:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white"><Music2 size={16} /></a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white"><FaFacebook size={16} /></a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white"><FaTwitter size={16} /></a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white"><FaYoutube size={16} /></a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white"><FaInstagram size={16} /></a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}