import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';

export default function ServicesPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <PageHeader 
        title="Premium Services" 
        description="We craft high-performance digital solutions, ranging from custom Discord bots to full-stack web applications tailored to your brand."
        badge="What We Do"
      />
      <div style={{ background: 'var(--bg)' }}>
        <Services onOpenBooking={onOpenBooking} />
        <WorkProcess />
      </div>
    </>
  );
}
