'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const socials = [
  {
    label: 'Facebook', href: 'https://facebook.com',
    color: '#1877F2', shadow: 'rgba(24,119,242,0.4)',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    label: 'Instagram', href: 'https://instagram.com',
    color: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', shadow: 'rgba(220,39,67,0.4)',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    label: 'LinkedIn', href: 'https://linkedin.com',
    color: '#0A66C2', shadow: 'rgba(10,102,194,0.4)',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: 'YouTube', href: 'https://youtube.com',
    color: '#FF0000', shadow: 'rgba(255,0,0,0.35)',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
];

const footerLinks = {
  Services: [
    { label: 'Building Plan & Layout', href: '/services' },
    { label: 'CMDA Approvals', href: '/services' },
    { label: 'DTCP Approvals', href: '/services' },
    { label: 'Structural Design', href: '/services' },
    { label: '3D Drawings & Elevation', href: '/services' },
    { label: 'Estimation & Valuation', href: '/services' },
    { label: 'Housing Loan Assistance', href: '/services' },
    { label: 'Highway / PWD / GCC', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Project Portfolio', href: '/projects' },
    { label: 'National Reach', href: '/reach' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Admin Portal', href: '/admin' },
  ],
};

const certs = ['A-Class PWD', 'GCC Approved', 'CMDA Panel', 'DTCP Licensed'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#030D1B', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ padding: '80px 24px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 2fr) 1fr 1fr 1.2fr', gap: '48px' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                width: '44px', height: '44px', background: 'linear-gradient(135deg, var(--gold), var(--gold-deep))',
                borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--navy-dark)', flexShrink: 0,
              }}>SJM</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.1rem', lineHeight: 1 }}>Infrastructure</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '3px' }}>Sri Lakshmi Foundations</div>
              </div>
            </Link>

            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '6px', fontStyle: 'italic' }}>
              &ldquo;Dream Home of You &bull; We Build&rdquo;
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: '290px', marginBottom: '20px' }}>
              Traditional building contractor &amp; A-Class civil contractor in Kundrathur, Chennai.
              Trusted by 200+ families &amp; government departments since 2010.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
              {certs.map(c => (
                <span key={c} style={{
                  padding: '4px 10px', borderRadius: '999px',
                  background: 'rgba(255,180,0,0.07)', color: 'rgba(255,180,0,0.75)',
                  border: '1px solid rgba(255,180,0,0.15)',
                  fontSize: '0.65rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{c}</span>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)', transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${s.shadow}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>{col}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}
                      style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', display: 'inline-block', transition: 'color 0.2s', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '20px' }}>Reach Us</h4>

            <div style={{ marginBottom: '8px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              S. Jeevanantham &mdash; Proprietor
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.9rem', lineHeight: 1.6, flexShrink: 0 }}><MapPin size={16} className="lucide-icon" /> </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                  No.1093, Metro Grand City,<br />Kundrathur, Chennai &ndash; 600 069
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', flexShrink: 0 }}><Phone size={16} className="lucide-icon" /> </span>
                <div>
                  <a href="tel:+917010196927" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', display: 'block', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >70101 96927</a>
                  <a href="tel:+917010394507" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', display: 'block', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >70103 94507</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', flexShrink: 0 }}><Mail size={16} className="lucide-icon" /> </span>
                <a href="mailto:sjminfras@gmail.com" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >sjminfras@gmail.com</a>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,180,0,0.05)',
              border: '1px solid rgba(255,180,0,0.1)', borderRadius: '10px', padding: '14px 16px', marginBottom: '16px',
            }}>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Office Hours</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM<br />Sunday: By Appointment
              </div>
            </div>

            <a href="https://wa.me/917010196927" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)',
                borderRadius: '8px', padding: '12px',
                color: '#25D366', fontSize: '0.82rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us: 70101 96927
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>
            &copy; {year} SJM Infrastructure (Sri Lakshmi Foundations), Kundrathur, Chennai. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
