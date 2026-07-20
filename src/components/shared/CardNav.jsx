import { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './CardNav.css';

export default function CardNav({ items, onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef(null);
  const itemEls = useRef([]);
  const footerRef = useRef(null);
  const tlRef = useRef(null);
  const location = useLocation();

  /* ── Scroll ──────────────────────────────────────────────── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* ── Body scroll lock ────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ── Close on route change ───────────────────────────────── */
  useEffect(() => {
    if (isOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  /* ── Escape key ──────────────────────────────────────────── */
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen]); // eslint-disable-line

  /* ── Build GSAP timeline ─────────────────────────────────── */
  const buildTl = useCallback(() => {
    const overlay = overlayRef.current;
    const inner = document.querySelector('.pnav-overlay-inner');
    const els = itemEls.current.filter(Boolean);
    const footer = footerRef.current;
    if (!overlay || !inner) return null;

    const tl = gsap.timeline({ paused: true });

    /* Backdrop fade in */
    tl.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );

    /* Sidebar slide in from right */
    tl.fromTo(
      inner,
      { x: '100%' },
      { x: '0%', duration: 0.6, ease: 'power4.inOut' },
      0
    );

    /* Stagger nav items */
    if (els.length) {
      tl.fromTo(
        els,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.05 },
        '-=0.3'
      );
    }

    /* Footer slides up */
    if (footer) {
      tl.fromTo(
        footer,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );
    }

    return tl;
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    const tl = buildTl();
    tlRef.current = tl;
    tl?.play();
  }, [buildTl]);

  const closeMenu = useCallback(() => {
    const tl = tlRef.current;
    if (tl) {
      tl.reverse().then(() => setIsOpen(false));
    } else {
      setIsOpen(false);
    }
  }, []);

  const toggle = useCallback(() => {
    isOpen ? closeMenu() : openMenu();
  }, [isOpen, openMenu, closeMenu]);

  /* ── Flatten links ───────────────────────────────────────── */
  const allLinks = (items || []).flatMap(g => g.links || []);

  return (
    <>
      {/* ═══ TOP BAR ═══════════════════════════════════════════ */}
      <header
        className={`pnav-bar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
        role="banner"
      >
        {/* Logo */}
        <Link to="/" className="pnav-logo" aria-label="Redwork home">
          <span className="pnav-logo-red">RED</span>
          <span className="pnav-logo-work">WORK</span>
        </Link>

        {/* Desktop Links (Center) */}
        <nav className="pnav-desktop" aria-label="Desktop navigation">
          {allLinks.slice(0, 5).map((lnk, i) => (
            <a key={i} href={lnk.href} className="pnav-desktop-link">{lnk.label}</a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="pnav-right">
          {!isOpen && (
            <button
              type="button"
              className="pnav-cta"
              onClick={onOpenBooking}
              aria-label="Book a free consultation"
            >
              Free Consult
            </button>
          )}

          <button
            type="button"
            className={`pnav-toggle ${isOpen ? 'is-open' : ''}`}
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="pnav-overlay"
          >
            <span className="pnav-toggle-label">{isOpen ? 'Close' : 'Menu'}</span>
            <span className="pnav-burger" aria-hidden="true">
              <span className="pnav-burger-line" />
              <span className="pnav-burger-line" />
            </span>
          </button>
        </div>
      </header>

      {/* ═══ FULLSCREEN OVERLAY ════════════════════════════════ */}
      <nav
        id="pnav-overlay"
        ref={overlayRef}
        className={`pnav-overlay ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        aria-label="Main navigation"
        onClick={closeMenu}
      >
        <div className="pnav-overlay-inner" onClick={(e) => e.stopPropagation()}>

          {/* ── Nav links ─────────────────────────────────────── */}
          <ul className="pnav-items" role="list">
            {allLinks.map((lnk, i) => (
              <li key={`${lnk.href}-${i}`} style={{ listStyle: 'none' }}>
                <a
                  href={lnk.href}
                  className="pnav-item"
                  aria-label={lnk.ariaLabel}
                  ref={el => { if (el) itemEls.current[i] = el; }}
                  onClick={closeMenu}
                >
                  <span className="pnav-item-num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="pnav-item-label">{lnk.label}</span>
                  <GoArrowUpRight className="pnav-item-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Footer strip ──────────────────────────────────── */}
          <div className="pnav-footer" ref={footerRef}>
            {/* Left: tagline + live status */}
            <div>
              <div className="pnav-footer-tagline">
                <strong>Redwork Studio</strong>
                Websites · Bots · Student Projects<br />
                Built fast. Delivered right.
              </div>
              <div className="pnav-status" style={{ marginTop: '12px' }}>
                <span className="pnav-status-dot" aria-hidden="true" />
                Available for new projects
              </div>
            </div>

            {/* Right: CTA + socials */}
            <div className="pnav-footer-right">
              <a
                href="https://wa.me/917667261838"
                target="_blank"
                rel="noreferrer"
                className="pnav-contact-pill"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp Us ↗
              </a>

              <div className="pnav-socials" aria-label="Social links">
                <a href="#" className="pnav-social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="pnav-social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="pnav-social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="pnav-social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}
