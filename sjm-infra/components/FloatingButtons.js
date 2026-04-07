'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingButtons() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [email, setEmail] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Only show exit intent logic once per session
    if (sessionStorage.getItem('sjm_exit_shown')) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
        sessionStorage.setItem('sjm_exit_shown', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Also trigger after 45s if they haven't left
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('sjm_exit_shown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('sjm_exit_shown', 'true');
      }
    }, 45000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [pathname]);

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    const leads = JSON.parse(localStorage.getItem('sjm_leads') || '[]');
    leads.push({ 
      email, 
      source: 'exit-popup', 
      date: new Date().toISOString(),
      name: 'Anonymous (Popup)',
      projectType: 'General'
    });
    localStorage.setItem('sjm_leads', JSON.stringify(leads));
    setShowExitPopup(false);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 900
      }}>
        <a 
          href="/assets/docs/corporate-profile.pdf" 
          download
          className="float-btn float-doc"
          title="Download Corporate Profile"
        >
          📄
        </a>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="float-btn float-wa"
          title="WhatsApp Us"
        >
          💬
        </a>
      </div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && setShowExitPopup(false)} style={{ zIndex: 1000}}>
          <div className="modal-box" style={{ maxWidth: '440px', padding: '40px', textAlign: 'center' }}>
            <button 
              onClick={() => setShowExitPopup(false)}
              style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--grey-500)' }}
            >×</button>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏗️</div>
            <h3 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Wait! Don't Miss Out.</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Subscribe to get notified about our latest government tender wins, private project availability, and free consultation offers.
            </p>
            <form onSubmit={handlePopupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="form-input"
                style={{ textAlign: 'center' }}
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Keep Me Updated
              </button>
            </form>
            <p style={{ fontSize: '0.75rem', color: 'var(--grey-400)', marginTop: '16px' }}>
              No spam. Just quality infra updates.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
