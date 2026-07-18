import { useOutletContext } from 'react-router-dom';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Pricing onOpenBooking={onOpenBooking} />
    </div>
  );
}
