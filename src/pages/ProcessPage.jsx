import PageHeader from '../components/shared/PageHeader';
import WorkProcess from '../components/WorkProcess';

export default function ProcessPage() {
  return (
    <>
      <PageHeader 
        title="How We Work" 
        description="A streamlined, transparent process designed to get you from concept to launch without the typical agency delays."
        badge="Our Process"
      />
      <div style={{ background: 'var(--bg)' }}>
        <WorkProcess />
      </div>
    </>
  );
}
