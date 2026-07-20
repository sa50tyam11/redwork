import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <PageHeader 
        title="Transparent Pricing" 
        description="Clear, upfront, and designed to scale with your business. No hidden fees or surprise agency retainers."
        badge="Investment"
      />
      <div style={{ background: 'var(--bg)' }}>
        <Pricing onOpenBooking={onOpenBooking} />
      </div>
    </>
  );
}
