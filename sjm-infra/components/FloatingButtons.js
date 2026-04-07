'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hammer } from 'lucide-react';

/* --- REAL SVG ICONS ------------------------------- */
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

export default function FloatingButtons() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('sjm_popup_shown')) return;
    let shown = false;
    const showIt = () => {
      if (!shown) { shown = true; setShowPopup(true); sessionStorage.setItem('sjm_popup_shown', '1'); }
    };
    const onLeave = (e) => { if (e.clientY <= 5) showIt(); };
    document.addEventListener('mouseleave', onLeave);
    const timer = setTimeout(showIt, 45000);
    return () => { document.removeEventListener('mouseleave', onLeave); clearTimeout(timer); };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem('sjm_leads') || '[]');
    leads.push({ name, email, source: 'exit-popup', date: new Date().toISOString(), projectType: 'General' });
    localStorage.setItem('sjm_leads', JSON.stringify(leads));
    setSubmitted(true);
  };

  const fabBase = {
    width: '52px', height: '52px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', textDecoration: 'none', border: '2px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    flexShrink: 0,
  };

  return (
    <>
      {/* Floating Buttons */}
      <div style={{ position: 'fixed', bottom: '28px', right: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 800 }}>

        {/* Expanded social buttons */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
          maxHeight: expanded ? '290px' : '0', overflow: 'hidden', padding: '0px 0.5rem',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}>
          {/* Download */}
          <a href="/assets/docs/sjm-corporate-profile.pdf" download aria-label="Download Corporate Profile"
            style={{ ...fabBase, background: 'var(--gold)', color: 'var(--navy-dark)', boxShadow: '0 4px 16px rgba(255,180,0,0.35)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,180,0,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,180,0,0.35)'; }}
          ><IconDownload /></a>

          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            style={{ ...fabBase, background: '#FF0000', color: '#fff', boxShadow: '0 4px 16px rgba(255,0,0,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          ><IconYouTube /></a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            style={{ ...fabBase, background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#fff', boxShadow: '0 4px 16px rgba(220,39,67,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          ><IconInstagram /></a>

          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            style={{ ...fabBase, background: '#1877F2', color: '#fff', boxShadow: '0 4px 16px rgba(24,119,242,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          ><IconFacebook /></a>
        </div>

        {/* Toggle social */}
        <button onClick={() => setExpanded(p => !p)} aria-label="Toggle social links"
          style={{
            ...fabBase, width: '42px', height: '42px',
            background: expanded ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)',
            fontSize: '1.1rem', fontWeight: 300,
            transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease, background 0.2s ease',
          }}>
          +
        </button>

        {/* WhatsApp &mdash; always visible with pulse */}
        <a href="https://wa.me/917010196927" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          style={{ ...fabBase, background: '#25D366', color: '#fff', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', animation: 'goldPulse 2.5s ease-out infinite' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; }}
        ><IconWhatsApp /></a>
      </div>

      {/* Exit-Intent Popup */}
      {showPopup && (
        <div className="modal-overlay active" onClick={e => e.target === e.currentTarget && setShowPopup(false)} style={{ zIndex: 9999 }}>
          <div className="modal-box" style={{ maxWidth: '440px', width: '100%', background: 'var(--navy)' }}>
            <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold), var(--gold-deep))' }} />
            <div style={{ padding: '40px 36px', textAlign: 'center' }}>
              <button onClick={() => setShowPopup(false)} style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%', width: 32, height: 32, color: 'rgba(255,255,255,0.5)',
                fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }} aria-label="Close">&times;</button>

              {!submitted ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--gold)' }}>
                    <Hammer size={48} className="lucide-icon" />
                  </div>
                  <div className="badge badge-gold" style={{ marginBottom: '16px' }}>Limited Consultation Slots</div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '12px', lineHeight: 1.2 }}>
                    Don't Miss Your Free<br />Project Consultation.
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Get notified about CMDA approval updates, tender openings, and free consultation slots.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="form-input" style={{ textAlign: 'center' }} />
                    <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} className="form-input" required style={{ textAlign: 'center' }} />
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Me Updates &rarr;</button>
                  </form>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-soft)', marginTop: '14px' }}>No spam. Unsubscribe anytime.</p>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--gold)' }}>
                    <Hammer size={40} className="lucide-icon" style={{ opacity: 0.7 }} />
                  </div>
                  <h3 style={{ color: 'var(--white)', marginBottom: '12px' }}>You're on the list!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>We'll be in touch with updates and consult slots.</p>
                  <button onClick={() => setShowPopup(false)} className="btn btn-primary">Continue Exploring</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

