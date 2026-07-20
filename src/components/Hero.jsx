import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Hero.css';

export default function Hero({ onOpenBooking }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-anim', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="rw-hero" aria-label="Hero" ref={containerRef}>
      <div className="rw-hero__bg" aria-hidden="true" />

      <div className="rw-hero__content-wrapper">
        <div className="rw-hero__content">
          <div className="rw-hero__eyebrow gsap-anim">
            Websites, Bots & Student Projects
          </div>
          
          <h1 className="rw-hero__headline gsap-anim">
            Get it built.<br />
            Get it right.
          </h1>

          <p className="rw-hero__desc gsap-anim">
            Discord bots, final-year projects, and websites for small businesses —<br />
            delivered in days, with real people to talk to along the way.
          </p>

          <div className="rw-hero__actions gsap-anim">
            <button
              type="button"
              className="rw-hero__btn-primary"
              onClick={onOpenBooking}
            >
              Book Free Consult
            </button>
            <Link to="/work" className="rw-hero__btn-secondary">
              See Our Work &darr;
            </Link>
          </div>
        </div>

        <div className="rw-hero__stats">
          <div className="rw-hero__stat-card gsap-anim">
            <div className="rw-hero__stat-num">48<sup>Hr</sup></div>
            <div className="rw-hero__stat-label">AVG.<br />RESPONSE</div>
          </div>

          <div className="rw-hero__stat-card gsap-anim">
            <div className="rw-hero__stat-num">50<sup>+</sup></div>
            <div className="rw-hero__stat-label">PROJECTS<br />DELIVERED</div>
          </div>
        </div>
      </div>
    </section>
  );
}