import React from 'react';
import CardNav from './shared/CardNav';

const items = [
  {
    label: "About Us",
    bgColor: "#1B1722",
    textColor: "#fff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Home Page" },
      { label: "Services", href: "/services", ariaLabel: "Our Services" },
      { label: "Pricing", href: "/pricing", ariaLabel: "Pricing Plans" }
    ]
  },
  {
    label: "Work", 
    bgColor: "#2F293A",
    textColor: "#fff",
    links: [
      { label: "Our Work", href: "/work", ariaLabel: "Our Portfolio" },
      { label: "Search", href: "/search", ariaLabel: "Search Projects" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#111111", 
    textColor: "#fff",
    links: [
      { label: "Contact Us", href: "/contact", ariaLabel: "Contact Form" }
    ]
  }
];

export default function Navbar({ onOpenBooking }) {
  return (
    <CardNav
      items={items}
      baseColor="#111111"
      menuColor="#e8251a"
      buttonBgColor="#e8251a"
      buttonTextColor="#fff"
      ease="power3.out"
      onOpenBooking={onOpenBooking}
    />
  );
}