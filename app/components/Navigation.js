"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
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
    <nav className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">ZaroLabs®</div>
        
        <div className="nav-links">
          <button onClick={() => scrollToSection('services')} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection('technologies')} className="nav-link">
            Technologies
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-btn">
            Contact
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('technologies')} className="nav-link">
              Technologies
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-btn">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}