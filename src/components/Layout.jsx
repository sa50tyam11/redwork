import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BookingModal from './BookingModal';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onOpenBooking = () => setIsModalOpen(true);

  return (
    <main style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {pathname !== '/' && <Navbar onOpenBooking={onOpenBooking} />}
      <Outlet context={{ onOpenBooking }} />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
