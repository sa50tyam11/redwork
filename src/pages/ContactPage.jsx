import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Get In Touch" 
        description="Ready to build something extraordinary? Drop us a line and let's turn your vision into reality."
        badge="Contact Us"
      />
      <div style={{ background: 'var(--bg)' }}>
        <ContactForm />
      </div>
    </>
  );
}
