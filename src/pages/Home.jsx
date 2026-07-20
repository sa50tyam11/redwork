import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Services from '../components/Services';
import AiSearch from '../components/AiSearch';
import Work from '../components/Work';
import MarqueeBand from '../components/MarqueeBand';

export default function Home() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <Hero onOpenBooking={onOpenBooking} />
      <MarqueeBand />
      <Story />
      <Services preview={true} onOpenBooking={onOpenBooking} />
      <AiSearch />
      <Work preview={true} onOpenBooking={onOpenBooking} />
    </>
  );
}
