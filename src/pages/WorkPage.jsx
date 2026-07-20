import { useOutletContext } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Work from '../components/Work';

export default function WorkPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <PageHeader 
        title="Selected Works" 
        description="A curated collection of our finest projects, demonstrating our commitment to quality, performance, and cutting-edge design."
        badge="Our Portfolio"
      />
      <div style={{ background: 'var(--bg)' }}>
        <Work preview={false} onOpenBooking={onOpenBooking} />
      </div>
    </>
  );
}
