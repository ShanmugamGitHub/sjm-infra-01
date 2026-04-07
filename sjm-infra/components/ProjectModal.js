'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banknote, User, MapPin, Ruler } from 'lucide-react';

export default function ProjectModal({ modal, setModal }) {
  const [imgIdx, setImgIdx] = useState(0);

  const images = modal ? (modal.images?.length > 0 ? modal.images : [modal.img]) : [];

  // Reset slide index when modal changes
  useEffect(() => {
    setImgIdx(0);
  }, [modal]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  const prev = useCallback((e) => {
    e?.stopPropagation();
    setImgIdx(i => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback((e) => {
    e?.stopPropagation();
    setImgIdx(i => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!modal) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modal, prev, next, setModal]);

  if (!modal) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={e => e.target === e.currentTarget && setModal(null)}
      role="dialog"
      aria-modal="true"
      aria-label={`Project: ${modal.title}`}
    >
      <div className="modal-box" style={{
        width: '95vw', maxWidth: '1100px',
        maxHeight: '92vh',
        display: 'flex', flexDirection: 'column',
        background: '#0B1624',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>

        {/* -- CAROUSEL --------------------------- */}
        <div style={{ position: 'relative', flexShrink: 0, height: '52%', minHeight: '280px', background: '#000' }}>
          {/* Image */}
          <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <Image
              key={imgIdx}
              src={images[imgIdx]}
              alt={`${modal.title} &mdash; image ${imgIdx + 1}`}
              fill
              style={{ objectFit: 'cover', transition: 'opacity 0.4s ease' }}
              priority
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(11,22,36,0.85) 0%, rgba(11,22,36,0.1) 40%, transparent 100%)',
            }} />
          </div>

          {/* Prev / Next arrows &mdash; only if multiple images */}
          {images.length > 1 && (
            <>
              <button onClick={prev} style={arrowStyle('left')} aria-label="Previous image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={next} style={arrowStyle('right')} aria-label="Next image">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '8px', zIndex: 5
              }}>
                {images.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }} style={{
                    width: i === imgIdx ? '28px' : '10px', height: '10px',
                    borderRadius: '5px', background: i === imgIdx ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                    border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                    padding: 0,
                  }} aria-label={`Image ${i + 1}`} />
                ))}
              </div>
            </>
          )}

          {/* Top-left badge */}
          <div style={{ position: 'absolute', top: '20px', left: '24px', zIndex: 5 }}>
            <span className="badge badge-gold">{modal.type}</span>
          </div>

          {/* Image counter */}
          {images.length > 1 && (
            <div style={{
              position: 'absolute', top: '20px', right: '70px', zIndex: 5,
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
              borderRadius: '20px', padding: '4px 12px',
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--font-heading)', fontWeight: 600
            }}>
              {imgIdx + 1} / {images.length}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => setModal(null)}
            style={{
              position: 'absolute', top: '16px', right: '16px', zIndex: 10,
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '1.3rem', transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* -- CONTENT --------------------------- */}
        <div style={{ padding: '32px 40px', overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', marginBottom: '6px' }}>
                {modal.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                <MapPin size={14} className="lucide-icon" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                {modal.location} &middot; {modal.year}
              </p>
            </div>
            <span style={{
              padding: '6px 16px', borderRadius: '999px', fontSize: '0.75rem',
              fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0,
              background: modal.status === 'Ongoing' ? 'rgba(52,211,153,0.12)' : 'rgba(255,180,0,0.1)',
              color: modal.status === 'Ongoing' ? '#34d399' : 'var(--gold)',
              border: `1px solid ${modal.status === 'Ongoing' ? 'rgba(52,211,153,0.25)' : 'rgba(255,180,0,0.2)'}`,
            }}>{modal.status}</span>
          </div>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.95rem' }}>
            {modal.desc}
          </p>

          {/* Project Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '28px' }}>
            {[
              { label: 'Contract Value', val: modal.value, icon: <Banknote size={16} className="lucide-icon" /> },
              { label: 'Scale', val: modal.scale, icon: <Ruler size={16} className="lucide-icon" /> },
              { label: 'Client', val: modal.client, icon: <User size={16} className="lucide-icon" /> },
            ].map(d => (
              <div key={d.label} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 'var(--r-md)', padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1rem' }}>{d.icon}</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {d.label}
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>{d.val}</div>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Enquire About a Similar Project &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%', [side]: '20px',
  transform: 'translateY(-50%)',
  width: '48px', height: '48px',
  borderRadius: '50%',
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.85)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', zIndex: 5,
  transition: 'all 0.2s ease',
});

