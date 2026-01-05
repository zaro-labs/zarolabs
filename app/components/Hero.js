"use client";

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Tech. Reliability. <span className="gradient-text">Future.</span>
        </h1>
        <p className="hero-subtitle">
          Web, Mobile, AI & Mixed Reality specialists.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Inquire <ArrowRight size={20} />
          </button>
          <button onClick={() => scrollToSection('services')} className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}