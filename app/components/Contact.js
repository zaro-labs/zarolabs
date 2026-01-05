import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="center-content">
        <h2 className="section-title">Ready to build something amazing?</h2>
        <p className="section-subtitle">
          Let's discuss your project and bring your vision to life.
        </p>
        <button className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
          Get in Touch <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}