import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Services from '../components/Services';
import Work from '../components/Work';

export default function Home() {
  const { onOpenBooking } = useOutletContext();
  
  return (
    <>
      <Hero onOpenBooking={onOpenBooking} />
      <Story />
      <Services preview={true} onOpenBooking={onOpenBooking} />
      <Work preview={true} onOpenBooking={onOpenBooking} />
    </>
  );
}
