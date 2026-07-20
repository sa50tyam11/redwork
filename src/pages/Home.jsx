import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Services from '../components/Services';
import AiSearch from '../components/AiSearch';
import Work from '../components/Work';
import MarqueeBand from '../components/MarqueeBand';
import WorkProcess from '../components/WorkProcess';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <Hero onOpenBooking={onOpenBooking} />
      <MarqueeBand />
      <Story />
      <Services onOpenBooking={onOpenBooking} />
      <AiSearch />
      <Work onOpenBooking={onOpenBooking} />
      <WorkProcess />
      <Pricing />
      <Testimonials />
      <ContactForm />
    </>
  );
}
