"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Smartphone, Brain, Box } from 'lucide-react';

export default function ZaroLabs() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s;
        }

        .nav-scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #a855f7;
        }

        .nav-btn {
          background: #9333ea;
          border: none;
          color: #fff;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s;
        }

        .nav-btn:hover {
          background: #7e22ce;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .mobile-menu {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 1.5rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(59, 130, 246, 0.2) 100%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          text-align: center;
          animation: fadeIn 1s ease-out;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #9333ea;
          border: none;
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #7e22ce;
          transform: scale(1.05);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.05);
        }

        /* Section Styles */
        .section {
          padding: 6rem 1.5rem;
        }

        .section-dark {
          background: linear-gradient(180deg, #000 0%, rgba(76, 29, 149, 0.2) 100%);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          text-align: center;
          margin-bottom: 3rem;
        }

        /* Grid Layouts */
        .grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .grid-2 {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }

        /* Cards */
        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s;
        }

        .card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(168, 85, 247, 0.5);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          transition: color 0.3s;
        }

        .card:hover .card-title {
          color: #a855f7;
        }

        .card-desc {
          color: #9ca3af;
        }

        /* Service Cards */
        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          height: 100%;
          transition: all 0.3s;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(168, 85, 247, 0.5);
        }

        .icon-wrapper {
          display: inline-block;
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .icon-blue {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
        }

        .icon-purple {
          background: linear-gradient(to right, #9333ea, #ec4899);
        }

        .icon-green {
          background: linear-gradient(to right, #10b981, #059669);
        }

        .icon-orange {
          background: linear-gradient(to right, #f97316, #ef4444);
        }

        .service-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .service-desc {
          color: #9ca3af;
          font-size: 1.125rem;
        }

        /* Tech Tags */
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .tech-tag {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          transition: all 0.3s;
          cursor: default;
        }

        .tech-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(168, 85, 247, 0.5);
        }

        /* Footer */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 1.5rem;
          background: #000;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: #6b7280;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 5rem;
          }

          .hero-subtitle {
            font-size: 1.875rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Navigation */}
        <nav className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
          <div className="nav-content">
            <div className="logo">ZaroLabs®</div>
            
            <div className="nav-links">
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('technologies')} className="nav-link">Technologies</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-links">
                <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                <button onClick={() => scrollToSection('technologies')} className="nav-link">Technologies</button>
                <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                <button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
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

        {/* Value Props */}
        <section className="section section-dark">
          <div className="section-title">Engineering solutions for ambitious teams.</div>
          <p className="section-subtitle">Scalable, maintainable tech for web, mobile, AI, and AR.</p>

          <div className="grid grid-3">
            {[
              { title: 'Reliable systems', desc: 'Production-grade applications built for uptime and trust.' },
              { title: 'Scalable architectures', desc: 'Solutions that grow with your team and product needs.' },
              { title: 'Maintainable code', desc: 'Long-term value via clean, easy-to-evolve codebases.' }
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <h2 className="section-title">Our Specializations</h2>
          
          <div className="grid grid-2">
            {[
              { 
                icon: <Code size={48} />, 
                title: 'Web Development',
                desc: 'Responsive, secure web applications with performance and maintainability at the core—architected for real-world teams and products.',
                colorClass: 'icon-blue'
              },
              { 
                icon: <Smartphone size={48} />, 
                title: 'Mobile Development',
                desc: 'Native and cross-platform mobile apps for iOS and Android, using analytics and growth workflows for launch and beyond.',
                colorClass: 'icon-purple'
              },
              { 
                icon: <Brain size={48} />, 
                title: 'AI Solutions',
                desc: 'End-to-end custom AI solutions, plus immersive AR experiences powered by Zlslam engine for next-gen visualization.',
                colorClass: 'icon-green'
              },
              { 
                icon: <Box size={48} />, 
                title: 'Mixed Reality (Zlslam)',
                desc: 'Our proprietary engine for AR and mixed reality across mobile and web, enabling real-time 3D tracking, product visualization, and unforgettable interactive experiences.',
                colorClass: 'icon-orange'
              }
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className={`icon-wrapper ${service.colorClass}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section id="technologies" className="section section-dark">
          <h2 className="section-title">Technologies We Master</h2>
          <p className="section-subtitle">
            From cutting-edge frameworks to proven architectures, we leverage the best tools to build exceptional digital experiences.
          </p>
          <div className="tech-tags">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Swift', 'Kotlin', 'TensorFlow', 'WebGL', 'Three.js', 'AWS', 'Docker'].map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">About ZaroLabs</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              We're a team of passionate engineers and designers dedicated to crafting exceptional digital experiences that push the boundaries of what's possible.
            </p>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              With expertise spanning web, mobile, AI, and mixed reality, we partner with ambitious teams to turn visionary ideas into production-ready products.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-dark">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Ready to build something amazing?</h2>
            <p className="section-subtitle">Let's discuss your project and bring your vision to life.</p>
            <button className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
              Get in Touch <ArrowRight size={24} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Studio</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
                <li><span className="footer-link">Careers</span></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><span className="footer-link">Web</span></li>
                <li><span className="footer-link">Mobile</span></li>
                <li><span className="footer-link">AI</span></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><span className="footer-link">Inquire</span></li>
                <li><span className="footer-link">Email</span></li>
                <li><span className="footer-link">LinkedIn</span></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="logo">ZaroLabs®</div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '1rem' }}>
                Building the future, one line at a time.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ZaroLabs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}