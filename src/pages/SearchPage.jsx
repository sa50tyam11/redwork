import { useOutletContext } from 'react-router-dom';
import AiSearch from '../components/AiSearch';

export default function SearchPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div style={{ paddingTop: '80px' }}>
      <AiSearch onOpenBooking={onOpenBooking} />
    </div>
  );
}
