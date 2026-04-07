'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Our Reach', href: '/reach' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
        background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(10,25,47,0.9), transparent)'
      }}>
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            <Image
              src="/sjm_logo.png"
              alt="SJM Infrastructure Logo"
              width={44}
              height={44}
              className="nav-logo-img"
              priority
            />
            <div className="nav-logo-text">
              <span className="nav-logo-main">SJM Infrastructure</span>
              <span className="nav-logo-sub">Sri Lakshmi Foundations</span>
            </div>
          </Link>

          <div className="nav-links">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-link nav-cta">
              Get Quote
            </Link>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
            style={pathname === item.href ? { color: 'var(--gold)' } : {}}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ marginTop: '12px', justifyContent: 'center' }}
        >
          Get Free Quote
        </Link>
      </div>
    </>
  );
}
