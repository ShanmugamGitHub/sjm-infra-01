'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterNumber from '@/components/CounterNumber';
import { Building2, Waypoints, SunMedium, ClipboardSignature, Hammer, Ruler, FolderOpen, Home } from 'lucide-react';

const services = [
  {
    icon: <Waypoints size={22} className="lucide-icon" />, title: 'Highway Construction',
    desc: 'State & national highway widening, new road construction, flyovers, and expressways.',
    link: '/services', img: '/project_road.png', size: 'wide'
  },
  {
    icon: <Building2 size={22} className="lucide-icon" />, title: 'PWD & GCC Contracts',
    desc: 'Government buildings, municipal infrastructure, and turnkey public works.',
    link: '/services', img: '/project_building.png', size: 'tall'
  },
  {
    icon: <ClipboardSignature size={22} className="lucide-icon" />, title: 'CMDA / DTCP Approvals',
    desc: 'Complete approval liaison for Chennai Metropolitan and panchayat areas.',
    link: '/services', img: '/project_building.png', size: 'regular'
  },
  {
    icon: <Ruler size={22} className="lucide-icon" />, title: 'Structural Engineering',
    desc: 'RCC design, soil analysis, safe structural drawings for all building types.',
    link: '/services', img: '/project_building.png', size: 'regular'
  },
  {
    icon: <SunMedium size={22} className="lucide-icon" />, title: '3D Elevation Design',
    desc: 'Photorealistic 3D architectural renders and modern facade designs.',
    link: '/services', img: '/project_building.png', size: 'small'
  },
  {
    icon: <Hammer size={22} className="lucide-icon" />, title: 'Full Construction',
    desc: 'Turnkey building from design to handover. Quality at every step.',
    link: '/services', img: '/project_building.png', size: 'small'
  },
];

const bentoClasses = {
  wide: 'bento-item-wide',
  tall: 'bento-item-tall',
  regular: 'bento-item-regular',
  small: 'bento-item-small',
  medium: 'bento-item-medium',
};

const testimonials = [
  {
    name: 'Rajesh Murugan',
    initials: 'RM',
    role: 'NRI Client',
    location: 'Madurai',
    project: 'Villa Construction + DTCP',
    tag: 'Private Client',
    tagColor: '#a78bfa',
    quote: 'SJM handled our entire DTCP approval and villa construction remotely. Outstanding coordination, zero delays. Would recommend to every NRI looking to build in Tamil Nadu.',
    stars: 5,
    rating: 100,
    avatarBg: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
  },
  {
    name: 'V. Suresh Kumar',
    initials: 'VS',
    role: 'Private Developer',
    location: 'Chennai',
    project: 'G+3 Apartment &mdash; CMDA to Handover',
    tag: 'Developer',
    tagColor: '#34d399',
    quote: 'From CMDA approval to structural design to handing over the keys &mdash; professional team, transparent billing, and excellent quality. My third project with SJM.',
    stars: 5,
    rating: 100,
    avatarBg: 'linear-gradient(135deg, #34d399, #059669)',
  },
  {
    name: 'Ravi Chandrasekaran',
    initials: 'RC',
    role: 'Partner Contractor',
    location: 'Salem',
    project: 'NABARD District Road &mdash; 22 km',
    tag: 'Government',
    tagColor: '#60a5fa',
    quote: "Partnered on a NABARD district road project. SJM's site management and quality control helped us win a follow-on contract. Highly capable team.",
    stars: 5,
    rating: 98,
    avatarBg: 'linear-gradient(135deg, #60a5fa, #2563eb)',
  },
  {
    name: 'Dr. Anitha Selvam',
    initials: 'AS',
    role: 'Hospital Administrator',
    location: 'Coimbatore',
    project: 'Hospital Extension Block',
    tag: 'Commercial',
    tagColor: '#fb923c',
    quote: 'They delivered a complex hospital extension with full regulatory compliance and zero compromise on quality. Timeline adherence was exceptional.',
    stars: 5,
    rating: 99,
    avatarBg: 'linear-gradient(135deg, #fb923c, #ea580c)',
  },
  {
    name: 'S. Parthasarathy',
    initials: 'SP',
    role: 'PWD Engineer (Rtd.)',
    location: 'Villupuram',
    project: 'SH-36 Highway Inspection',
    tag: 'Government',
    tagColor: '#60a5fa',
    quote: "I have inspected hundreds of highway projects. SJM's workmanship on the SH-36 widening was among the best I have seen &mdash; proper sub-base, grading, and drain work.",
    stars: 5,
    rating: 97,
    avatarBg: 'linear-gradient(135deg, #f472b6, #db2777)',
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO &mdash; SPLIT ENTRY
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="hero-split" aria-label="Hero section">
        {/* Left &mdash; Government */}
        <div className="hero-panel hero-left">
          <Image
            src="/hero_highway.png"
            alt="SJM Infrastructure &mdash; Government highway construction"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
          />
          <div className="hero-overlay layer-navy" />
          <div className="hero-content animate-fade-up">
            <div className="badge badge-gold mb-4" style={{ marginBottom: '20px' }}>
              Government Contracts
            </div>
            <h2>Building India's<br />Infrastructure.</h2>
            <p className="hero-p">
              A-Class registered contractor for Highways, PWD, GCC & Municipality works
              across Tamil Nadu.
            </p>
            <div className="hero-actions">
              <Link href="/services#govt" className="btn btn-primary" id="hero-btn-tender">
                Tender Capabilities
              </Link>
              <Link href="/projects" className="btn btn-ghost-white" id="hero-btn-projects">
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hero-divider" aria-hidden="true" />

        {/* Right &mdash; Private */}
        <div className="hero-panel hero-right">
          <Image
            src="/hero_building.png"
            alt="SJM Infrastructure &mdash; Private building consultancy"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
          />
          <div className="hero-overlay layer-gold" />
          <div className="hero-content animate-fade-up delay-200">
            <div className="badge mb-4" style={{
              marginBottom: '20px',
              background: 'rgba(10,25,47,0.15)',
              color: 'var(--navy-dark)',
              border: '1px solid rgba(10,25,47,0.25)'
            }}>
              Private Consultancy
            </div>
            <h2 style={{ color: 'var(--navy-dark)' }}>Designing Your<br />Dream Space.</h2>
            <p className="hero-p" style={{ color: 'rgba(10,25,47,0.75)' }}>
              CMDA/DTCP approvals, structural design, stunning 3D elevations,
              and complete building services.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-navy" id="hero-btn-quote">
                Get Free Quote
              </Link>
              <Link href="/services#consult" className="btn" style={{
                background: 'rgba(10,25,47,0.15)',
                color: 'var(--navy-dark)',
                borderColor: 'rgba(10,25,47,0.3)'
              }} id="hero-btn-consult">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          TICKER / MARQUEE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-inner">
          {[...Array(2)].map((_, ri) =>
            ['Highway Construction', 'CMDA Approvals', 'DTCP Consultancy', 'PWD Contracts', 'GCC Works', 'Structural Design', '3D Elevation', 'Building Construction', 'Valuation Reports', 'Loan Facilitation', 'National Expansion'].map((item, i) => (
              <div key={`${ri}-${i}`} className="marquee-item">
                <span className="marquee-dot" />
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          STATS BAR
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="stats-bar" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid">
            {[
              { end: 30, suffix: '+', label: 'Years of Legacy', prefix: '' },
              { end: null, suffix: '', label: 'PWD Registration', prefix: 'A-Class' },
              { end: 200, suffix: '+', label: 'Projects Delivered', prefix: '' },
              { end: 18, suffix: '+', label: 'Districts in Tamil Nadu', prefix: '' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">
                  {s.prefix && <span style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>{s.prefix}</span>}
                  {s.end !== null && <CounterNumber end={s.end} duration={2200} />}
                  {s.suffix && <span>{s.suffix}</span>}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          OUR PRINCIPLES &mdash; INNOVATIVE DESIGN
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden', paddingBottom: 0 }}>
        {/* Diagonal accent */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '38%',
          background: 'linear-gradient(160deg, rgba(255,180,0,0.03) 0%, rgba(255,180,0,0.07) 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 10% 50%, rgba(255,180,0,0.04) 0%, transparent 55%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '80px' }}>
            <ScrollReveal>
              <div>
                <div className="section-eyebrow">Our Principles</div>
                <h2 className="section-title">Zero Compromises.<br /><em>Every Contract.</em></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Since 1993, Sri Lakshmi Foundations has built an unbroken record of quality,
                  transparency, and on-time delivery &mdash; across both government
                  infrastructure and private building services.
                </p>
              </div>
            </ScrollReveal>
            {/* Big metric */}
            <ScrollReveal delay={150}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                {[
                  { n: '200+', label: 'Projects Delivered', accent: 'var(--gold)' },
                  { n: '30+', label: 'Years Experience', accent: '#60a5fa' },
                  { n: '18+', label: 'Districts Active', accent: '#34d399' },
                  { n: '0', label: 'Delays Excused', accent: '#f472b6' },
                ].map((m, i) => (
                  <div key={i} style={{
                    padding: '32px 24px',
                    borderLeft: `3px solid ${m.accent}`,
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
                    transition: 'background 0.3s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = `${m.accent}08`}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)'}
                  >
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.8rem', color: m.accent, lineHeight: 1, marginBottom: '6px' }}>{m.n}</div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Principles &mdash; horizontal scroll cards with big ordinal numbers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              {
                num: '01', color: '#FFB400',
                title: 'A-Class Registration',
                desc: 'Tamil Nadu PWD\'s highest contractor classification. No monetary cap on tender bids. Fully credentialed for state and national government projects.',
              },
              {
                num: '02', color: '#60a5fa',
                title: 'On-Time Delivery',
                desc: '100% on-time track record across 200+ projects. Our proactive site management identifies bottlenecks weeks before they become delays.',
              },
              {
                num: '03', color: '#34d399',
                title: 'End-to-End Ownership',
                desc: 'One senior engineer oversees your project from day one to handover. No responsibility gaps, no subcontractor blame-shifting.',
              },
              {
                num: '04', color: '#a78bfa',
                title: 'Statewide Network',
                desc: '18+ Tamil Nadu districts with established government relationships, local material sourcing, and trusted sub-vendor networks.',
              },
              {
                num: '05', color: '#f472b6',
                title: 'Precision Engineering',
                desc: 'In-house structural engineers, CAD designers, and rigorous quality-control protocols. Precision is the baseline, not a premium.',
              },
              {
                num: '06', color: '#fb923c',
                title: 'Transparent Billing',
                desc: 'Itemised estimates, milestone-based payment schedules, and real-time cost tracking. No surprises, no hidden extras.',
              },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  style={{
                    padding: '44px 36px',
                    background: 'var(--navy)',
                    position: 'relative', overflow: 'hidden',
                    transition: 'background 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `color-mix(in srgb, ${p.color} 4%, var(--navy))`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)'; }}
                >
                  {/* Big ghost number */}
                  <div style={{
                    position: 'absolute', top: '-10px', right: '20px',
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '7rem', lineHeight: 1, color: p.color,
                    opacity: 0.06, userSelect: 'none', pointerEvents: 'none',
                    transition: 'opacity 0.3s ease',
                  }}>{p.num}</div>
                  {/* Colored top line */}
                  <div style={{ width: '32px', height: '3px', background: p.color, borderRadius: '2px', marginBottom: '20px' }} />
                  <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: p.color, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>
                    {p.num}
                  </div>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.05rem', marginBottom: '14px', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SERVICES BENTO GRID
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <div className="section-eyebrow">What We Do</div>
                <h2 className="section-title">Comprehensive<br /><em>Service Suite.</em></h2>
              </div>
              <Link href="/services" className="btn btn-ghost-gold">All Services <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg></Link>
            </div>
          </ScrollReveal>

          <div className="bento-grid">
            {services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 80} className={`bento-item ${bentoClasses[svc.size]}`}>
                <Link href={svc.link} className="bento-card">
                  <div className="bento-bg-img">
                    <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="bento-overlay" />
                  <div className="bento-content">
                    <span className="bento-icon">{svc.icon}</span>
                    <div className="bento-title">{svc.title}</div>
                    <p className="bento-desc">{svc.desc}</p>
                    <div className="bento-arrow">Explore <span>&rarr;</span></div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          FEATURED PROJECTS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Portfolio</div>
              <h2 className="section-title">Featured <em>Milestones.</em></h2>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '24px', alignItems: 'stretch' }}>
            {[
              {
                img: '/project_road.png',
                badge: 'Government',
                badgeClass: 'badge-blue',
                title: 'SH-36 Highway Widening',
                sub: 'Villupuram District &bull; 2023',
                value: 'Rs.18.5 Cr',
                details: ['14.5 km, 4-lane widening', 'Tamil Nadu PWD client', 'Completed ahead of schedule'],
              },
              {
                img: '/project_building.png',
                badge: 'Private',
                badgeClass: 'badge-gold',
                title: 'Lakshmi Residency Phase 2',
                sub: 'Kundrathur, Chennai &bull; 2024',
                value: 'Rs.3.8 Cr',
                details: ['12 units, G+3 RCC Frame', 'Full CMDA Approval handled', 'Delivered 3 weeks early'],
              },
            ].map((proj, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div style={{
                  background: 'var(--navy-card)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  transition: 'all var(--t-base)',
                  height: '100%',
                }}>
                  <div style={{ position: 'relative', height: '280px' }}>
                    <Image src={proj.img} alt={proj.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,14,26,0.9) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                      <span className={`badge ${proj.badgeClass}`}>{proj.badge}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{proj.sub}</div>
                      <h4 style={{ color: 'var(--white)', fontSize: '1.25rem' }}>{proj.title}</h4>
                    </div>
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Contract Value</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', fontSize: '1.3rem' }}>{proj.value}</span>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {proj.details.map((d, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span> {d}
                        </li>
                      ))}
                    </ul>
                    <Link href="/projects" className="btn btn-outline-gold btn-sm w-full">
                      View Full Project <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/projects" className="btn btn-ghost-gold btn-lg">View Full Portfolio <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg></Link>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          CLIENT STORIES &mdash; INNOVATIVE CARD WALL
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: 'var(--navy-dark)', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(255,180,0,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative' }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
            <ScrollReveal>
              <div>
                <div className="section-eyebrow">Client Stories</div>
                <h2 className="section-title" style={{ margin: 0 }}>Trusted by Builders,<br /><em>Praised by Clients.</em></h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '2px',
                  background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.2)',
                  borderRadius: 'var(--r-full)', padding: '10px 16px',
                }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: 'var(--gold)', display: 'inline-flex' }}><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ display: 'inline-block' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>)}
                  <span style={{ marginLeft: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--gold)' }}>5.0</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)' }}>200+ reviews</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Testimonial cards &mdash; masonry-style 3-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <article style={{
                  background: i % 3 === 1 ? 'rgba(255,180,0,0.04)' : 'var(--navy-card)',
                  border: `1px solid ${i % 3 === 1 ? 'rgba(255,180,0,0.12)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 'var(--r-xl)', padding: '32px',
                  position: 'relative', overflow: 'hidden',
                  marginTop: i === 1 ? '32px' : '0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {/* Big quotation mark */}
                  <div style={{
                    position: 'absolute', top: '12px', right: '20px',
                    fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1,
                    color: t.tagColor, opacity: 0.12, userSelect: 'none', pointerEvents: 'none',
                  }}>&quot;</div>

                  {/* Project tag */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '4px 12px', borderRadius: 'var(--r-full)',
                    background: `${t.tagColor}12`, border: `1px solid ${t.tagColor}25`,
                    marginBottom: '20px',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.tagColor, display: 'inline-block' }} />
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: t.tagColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.tag}</span>
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: '28px', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Project label */}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)', marginBottom: '16px', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-xs)', borderLeft: `3px solid ${t.tagColor}` }}>
                    <FolderOpen size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', opacity: 0.7 }} />{t.project}
                  </div>

                  {/* Avatar + name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                      background: t.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#fff',
                    }}>{t.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--white)', marginBottom: '2px' }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>{t.role} · {t.location}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(s => <span key={s} style={{ color: 'var(--gold)', display: 'inline-flex' }}><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ display: 'inline-block' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>)}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          NATIONAL REACH CTA
      ======================================================================== */}
      <section className="section-pad" style={{
        background: 'linear-gradient(160deg, var(--navy) 0%, #0D2B50 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,180,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <div className="section-eyebrow">National Expansion</div>
                <h2 className="section-title">Growing Across<br /><em>Tamil Nadu.</em></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  From capital Chennai to Tirunelveli in the south, our project footprint spans 18+ districts.
                  Explore our interactive district map to see where we have built.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/reach" className="btn btn-primary btn-lg">Explore Project Map</Link>
                  <Link href="/contact" className="btn btn-ghost-white">Start Your Project</Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Districts Active', value: '18+', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, color: '#FFB400' },
                  { label: 'Govt Projects', value: '120+', icon: '🏛️', color: '#60a5fa' },
                  { label: 'Private Projects', value: '80+', icon: <Home size={16} className="lucide-icon" />, color: '#34d399' },
                  { label: 'States Covered', value: '3', icon: '🗺️', color: '#a78bfa' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 'var(--r-lg)', padding: '24px 20px',
                    transition: 'border-color 0.3s',
                  }}>
                    <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: s.color, lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* KUNDRATHUR LOCAL SEO SECTION */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Kundrathur &bull; Chennai South</div>
              <h2 className="section-title">Looking for a <em>Builder in Kundrathur?</em></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.9 }}>
                SJM Infrastructure is located at Metro Grand City, Kundrathur, Chennai 600069.
                Trusted building contractor in Kundrathur, Tambaram, Pallavaram, Pammal, Chromepet.
                Call us at <a href="tel:+917010196927" style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>70101 96927</a>.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { headline: 'Building Plan & Layout', body: 'CMDA and DTCP approved building plans for Kundrathur. We handle full submission and follow-up with authorities.', color: 'var(--gold)', num: '01' },
              { headline: 'CMDA & DTCP Approvals', body: 'Smooth building approval in Kundrathur. All documentation and government liaison handled for you.', color: '#60a5fa', num: '02' },
              { headline: 'Full House Construction', body: 'Turnkey house construction in Kundrathur. Fixed-price contracts, transparent billing, foundation to finish.', color: '#34d399', num: '03' },
              { headline: 'Structural Design', body: 'RCC structural design and certified structural drawings for G+1 to G+4 buildings in Kundrathur.', color: '#a78bfa', num: '04' },
              { headline: 'Valuation & Housing Loan', body: 'Bank-certified valuation reports for housing loan applications. We work with all major banks in Chennai south.', color: '#fb923c', num: '05' },
              { headline: '3D Drawings & Elevation', body: 'Photorealistic 3D renders and modern elevation designs. Visualise your home before construction begins.', color: '#f472b6', num: '06' },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 60}>
                <article style={{
                  padding: '32px 28px', borderRadius: 'var(--r-lg)',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${item.color}`, transition: 'background 0.25s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: item.color, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '10px' }}>{item.num}</div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>{item.headline}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{item.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginRight: '16px' }}>
                Call 70101 96927 -- Free Site Visit
              </Link>
              <a href="https://wa.me/917010196927" target="_blank" rel="noopener noreferrer"
                className="btn btn-lg" style={{ background: '#25D366', color: '#fff', borderColor: '#1DA851' }}>
                WhatsApp Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section style={{ background: 'var(--gold)', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ color: 'var(--navy-dark)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Dream Home of You - We Build.
            </h2>
            <p style={{ color: 'rgba(10,25,47,0.65)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 32px' }}>
              S. Jeevanantham and team in Kundrathur respond to every enquiry within 4 business hours.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-navy btn-lg">Get Free Consultation</Link>
              <a href="https://wa.me/917010196927" className="btn btn-lg"
                style={{ background: '#25D366', color: '#fff', borderColor: '#1DA851' }}
                target="_blank" rel="noopener noreferrer">
                WhatsApp 70101 96927
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}