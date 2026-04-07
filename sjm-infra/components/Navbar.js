'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/reach', label: 'National Reach' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Brand */}
          <Link href="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <div className="nav-brand-mark">SJM</div>
            <div className="nav-brand-text">
              <span className="nav-brand-main">Infrastructure</span>
              <span className="nav-brand-sub">Sri Lakshmi Foundations</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`nav-link${pathname === item.href ? ' active' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/contact" className="nav-cta-btn" style={{ display: 'none' }}
              id="nav-cta-desktop" aria-label="Get a free consultation">
              Get Quote
            </Link>
            <style>{`@media(min-width:900px){#nav-cta-desktop{display:inline-flex}}`}</style>

            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div style={{
          position: 'absolute', top: 20, right: 24,
          width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '1.8rem'
        }} onClick={() => setMenuOpen(false)}>&times;</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div className="nav-brand-mark" style={{ opacity: 0.9 }}>SJM</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ color: pathname === item.href ? 'var(--gold)' : undefined }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="btn btn-primary btn-lg"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: '32px' }}
        >
          Get Free Consultation
        </Link>
      </div>
    </>
  );
}

