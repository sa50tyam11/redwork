import { useOutletContext } from 'react-router-dom';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';

export default function ServicesPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Services onOpenBooking={onOpenBooking} />
      <WorkProcess />
    </div>
  );
}
