import React from 'react';
import CardNav from './shared/CardNav';

// Flat list of nav links — displayed as large editorial items in the overlay
const items = [
  {
    label: 'Navigation',
    links: [
      { label: 'Home',         href: '/',             ariaLabel: 'Go to Home page' },
      { label: 'Services',     href: '/services',     ariaLabel: 'View our Services' },
      { label: 'Our Work',     href: '/work',         ariaLabel: 'See our Portfolio' },
      { label: 'Pricing',      href: '/pricing',      ariaLabel: 'View Pricing Plans' },
      { label: 'How We Work',  href: '/how-we-work',  ariaLabel: 'Our Process' },
      { label: 'Testimonials', href: '/testimonials', ariaLabel: 'Client Reviews' },
      { label: 'Contact',      href: '/contact',      ariaLabel: 'Get in Touch' },
    ],
  },
];

export default function Navbar({ onOpenBooking }) {
  return <CardNav items={items} onOpenBooking={onOpenBooking} />;
}