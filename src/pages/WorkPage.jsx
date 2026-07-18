import { useOutletContext } from 'react-router-dom';
import Work from '../components/Work';

export default function WorkPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Work onOpenBooking={onOpenBooking} />
    </div>
  );
}
