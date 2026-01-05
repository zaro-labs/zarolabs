"use client";

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,        // Replace with your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,       // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY         // Replace with your Public Key
      );

      setSubmitted(true);
      
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setSending(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again.');
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contact" className="section section-dark">
        <div className="center-content">
          <h2 className="section-title">Ready to build something amazing?</h2>
          <p className="section-subtitle">
            Let's discuss your project and bring your vision to life.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary" 
            style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}
          >
            Get in Touch <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            
            {!submitted ? (
              <>
                <h2 className="modal-title">Let's Talk</h2>
                <p className="modal-subtitle">Tell us about your project</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="error-message">
                      {error}
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      disabled={sending}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      disabled={sending}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your project..."
                      disabled={sending}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%' }}
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Message Sent!</h2>
                <p>We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          animation: slideUp 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: #fff;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .modal-subtitle {
          color: #9ca3af;
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #fff;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #9333ea;
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6b7280;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: #ef4444;
          font-size: 0.875rem;
        }

        .success-message {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(to right, #10b981, #059669);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: #fff;
          margin: 0 auto 1.5rem;
          animation: scaleIn 0.5s ease-out;
        }

        .success-message h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .success-message p {
          color: #9ca3af;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 1.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}