import PageHeader from '../components/shared/PageHeader';
import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader 
        title="Client Success" 
        description="Don't just take our word for it. See what our partners say about the speed and quality of our execution."
        badge="Reviews"
      />
      <div style={{ background: 'var(--bg)' }}>
        <Testimonials />
      </div>
    </>
  );
}
