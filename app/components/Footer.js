"use client";

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Studio</h4>
          <ul className="footer-links">
            <li>
              <button onClick={() => scrollToSection('home')} className="footer-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="footer-link">
                About
              </button>
            </li>
            <li>
              {/* <span className="footer-link">Careers</span> */}
            </li>
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
            {/* <li><span className="footer-link">Inquire</span></li> */}
            {/* <li><span className="footer-link">Email</span></li> */}
            <li><span className="footer-link">LinkedIn</span></li>
          </ul>
        </div>
        <div className="footer-section">
          <img
            src="/logo.png"
            alt="Zaro Labs"
            style={{
              height: '28px',
              opacity: 1.0,
            }}
          />
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '1rem' }}>
            Building the future, one line at a time.
          </p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 ZaroLabs. All rights reserved.</p>
      </div>
    </footer>
  );
}