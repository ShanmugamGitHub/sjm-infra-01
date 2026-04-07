'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectModal({ modal, setModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling on body when modal is open
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modal]);

  if (!modal) return null;

  // If the modal data only has one image, we'll create a mock array for demonstration
  const defaultImages = [
    modal.img,
    modal.img.replace('.png', '_alt1.png'),
    modal.img.replace('.png', '_alt2.png')
  ];
  const images = modal.images || defaultImages;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => e.target === e.currentTarget && setModal(null)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0', // Remove padding for full-screen feel on mobile
        background: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="modal-box" style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        height: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        
        {/* Close Button */}
        <button
          onClick={() => setModal(null)}
          style={{
            position: 'absolute', top: '24px', right: '24px',
            background: 'var(--navy)', color: '#fff',
            border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%',
            width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1.4rem',
            zIndex: '1000', transition: 'all 0.2s ease',
            boxShadow: 'var(--shadow-lg)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = 'var(--navy)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--navy)';
            e.currentTarget.style.color = '#fff';
          }}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Carousel Area */}
        <div style={{ position: 'relative', flex: '1', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Main Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={images[currentImageIndex]}
              alt={`${modal.title} - Image ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }} // Contain to see whole image without cropping
            />
            {/* Gradient overlay at bottom for better text readability if we had text overlay */}
             <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,25,47,0.7) 0%, transparent 40%)',
                pointerEvents: 'none'
              }} />
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevImage} style={navArrowStyle('left')}>
            &#10094;
          </button>
          <button onClick={nextImage} style={navArrowStyle('right')}>
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
            {images.map((_, idx) => (
              <div 
                key={idx} 
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                style={{
                  width: idx === currentImageIndex ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentImageIndex ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
          
          <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
            <span className="badge badge-gold" style={{ fontSize: '0.8rem', padding: '6px 14px', boxShadow: 'var(--shadow-md)' }}>
              {modal.type}
            </span>
          </div>
        </div>

        {/* Details Area */}
        <div style={{ 
          padding: '32px 40px', 
          backgroundColor: '#fff', 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '40px',
          maxHeight: '40%', // Allow it to take up to 40% of modal height
          overflowY: 'auto' // Make details scrollable if needed
        }}>
          
          {/* Left info */}
          <div style={{ flex: '2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{modal.title}</h2>
              <span className={`badge ${modal.status === 'Ongoing' ? 'badge-green' : 'badge-navy'}`} style={{ fontSize: '0.85rem' }}>
                {modal.status}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px', fontSize: '1.05rem' }}>{modal.desc}</p>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              Enquire About Similar Projects →
            </Link>
          </div>

          {/* Right Data Grid */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              {[
                { label: 'Location', val: modal.location, icon: '📍' },
                { label: 'Scale Details', val: modal.scale, icon: '📐' },
                { label: 'Value', val: modal.value, icon: '💰' },
                { label: 'Completion Year', val: modal.year, icon: '📅' },
                { label: 'Client', val: modal.client, icon: '👤' },
              ].map(d => (
                <div key={d.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  borderBottom: '1px solid var(--grey-200)', paddingBottom: '12px'
                }}>
                  <div style={{ fontSize: '1.4rem' }}>{d.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--grey-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {d.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>{d.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper style for navigation arrows
const navArrowStyle = (direction) => ({
  position: 'absolute',
  top: '50%',
  [direction]: '24px',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  border: '2px solid rgba(255,255,255,0.2)',
  borderRadius: '50%',
  width: '56px',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  transition: 'all 0.2s ease',
  zIndex: 10,
  backdropFilter: 'blur(4px)',
  fontFamily: 'sans-serif'
});
