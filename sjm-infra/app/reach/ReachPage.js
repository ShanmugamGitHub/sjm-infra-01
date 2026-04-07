'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const mapData = [
  { id: 'chennai', name: 'Chennai', top: '12%', left: '76%', projects: 85, govt: 48, pvt: 37, types: ['GCC', 'PWD', 'Residential', 'Commercial', 'CMDA'] },
  { id: 'kanchipuram', name: 'Kanchipuram', top: '20%', left: '69%', projects: 14, govt: 8, pvt: 6, types: ['Industrial', 'DTCP', 'Highway'] },
  { id: 'villupuram', name: 'Villupuram', top: '33%', left: '58%', projects: 18, govt: 16, pvt: 2, types: ['Highway', 'PWD', 'NABARD'] },
  { id: 'salem', name: 'Salem', top: '38%', left: '38%', projects: 22, govt: 15, pvt: 7, types: ['Municipality', 'PWD'] },
  { id: 'coimbatore', name: 'Coimbatore', top: '52%', left: '20%', projects: 19, govt: 6, pvt: 13, types: ['Commercial', 'Residential'] },
  { id: 'madurai', name: 'Madurai', top: '68%', left: '48%', projects: 26, govt: 12, pvt: 14, types: ['DTCP', 'Residential'] },
  { id: 'tirunelveli', name: 'Tirunelveli', top: '83%', left: '38%', projects: 8, govt: 6, pvt: 2, types: ['PWD', 'Highway'] },
  { id: 'tiruvannamalai', name: 'Tiruvannamalai', top: '28%', left: '54%', projects: 11, govt: 9, pvt: 2, types: ['TWAD', 'Highway'] },
  { id: 'cuddalore', name: 'Cuddalore', top: '27%', left: '68%', projects: 7, govt: 6, pvt: 1, types: ['PWD', 'GCC'] },
  { id: 'dharmapuri', name: 'Dharmapuri', top: '42%', left: '32%', projects: 9, govt: 8, pvt: 1, types: ['NABARD', 'Highway'] },
];

const districtList = [
  'Chennai', 'Kanchipuram', 'Tiruvallur', 'Chengalpattu', 'Villupuram', 'Cuddalore',
  'Salem', 'Namakkal', 'Dharmapuri', 'Krishnagiri', 'Tiruvannamalai', 'Vellore',
  'Coimbatore', 'Tiruppur', 'Erode', 'Madurai', 'Dindigul', 'Tirunelveli',
];

export default function ReachPage() {
  const [activeRegion, setActiveRegion] = useState(mapData[0]);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
        paddingTop: '160px', paddingBottom: '100px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 80%, rgba(255,180,0,0.06) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Active Coverage</div>
          <h1 style={{ color: 'var(--white)', marginBottom: '20px' }}>
            18+ Districts. <span className="text-gradient">One Team.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 48px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            SJM Infrastructure operates across Tamil Nadu &mdash; click any district pin to explore our project presence there.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { val: '18+', label: 'Districts' },
              { val: '200+', label: 'Projects' },
              { val: '30+', label: 'Years' },
              { val: '3', label: 'States' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.8rem', color: 'var(--gold)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP SECTION */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>

            {/* MAP */}
            <ScrollReveal>
              <div style={{
                position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden',
                background: 'var(--navy-card)', border: '1px solid var(--border-glass)',
                minHeight: '560px', padding: '32px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.08)', letterSpacing: '0.2em',
                  position: 'absolute', top: '24px', left: '32px',
                }}>TAMIL NADU</div>

                {/* SVG-style grid background */}
                <div style={{
                  position: 'absolute', inset: 0, opacity: 0.04,
                  backgroundImage: 'linear-gradient(rgba(255,180,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,180,0,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />

                {/* Map pins */}
                <div style={{ position: 'relative', height: '500px' }}>
                  {mapData.map(loc => {
                    const isActive = activeRegion.id === loc.id;
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setActiveRegion(loc)}
                        style={{
                          position: 'absolute',
                          top: loc.top, left: loc.left,
                          transform: 'translate(-50%, -50%)',
                          background: 'none', border: 'none', cursor: 'pointer',
                          zIndex: isActive ? 10 : 1, padding: 0,
                        }}
                        aria-label={`View ${loc.name} projects`}
                      >
                        {/* Pulse ring */}
                        {isActive && (
                          <span style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '44px', height: '44px', borderRadius: '50%',
                            border: '2px solid rgba(255,180,0,0.4)',
                            animation: 'goldPulse 2s ease-out infinite',
                          }} />
                        )}
                        {/* Dot */}
                        <span style={{
                          display: 'block', position: 'relative',
                          width: isActive ? '20px' : '14px',
                          height: isActive ? '20px' : '14px',
                          borderRadius: '50%',
                          background: isActive ? 'var(--gold)' : 'rgba(255,180,0,0.4)',
                          border: isActive ? '3px solid var(--navy-dark)' : '2px solid rgba(255,180,0,0.3)',
                          transition: 'all 0.3s ease',
                          boxShadow: isActive ? '0 0 20px rgba(255,180,0,0.5)' : 'none',
                        }} />
                        {/* Label */}
                        <span style={{
                          position: 'absolute', bottom: '130%', left: '50%',
                          transform: 'translateX(-50%)',
                          background: isActive ? 'var(--gold)' : 'rgba(10,25,47,0.95)',
                          color: isActive ? 'var(--navy-dark)' : 'rgba(255,255,255,0.8)',
                          padding: '4px 10px', borderRadius: '6px',
                          fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                          whiteSpace: 'nowrap', pointerEvents: 'none',
                          border: `1px solid ${isActive ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                          transition: 'all 0.3s ease',
                        }}>
                          {loc.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div style={{ display: 'flex', gap: '20px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                    Selected District
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,180,0,0.4)', display: 'inline-block' }} />
                    Active District
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* INFO PANEL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '100px' }}>
              <ScrollReveal delay={100}>
                <div style={{
                  background: 'var(--navy-card)', border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--r-xl)', overflow: 'hidden',
                }}>
                  {/* Gold top bar */}
                  <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold), var(--gold-deep))' }} />
                  <div style={{ padding: '32px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: 'var(--white)', marginBottom: '4px' }}>
                      {activeRegion.name}
                    </h2>
                    <p style={{ color: 'var(--text-soft)', fontSize: '0.82rem', fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>
                      Operational District
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                      {[
                        { label: 'Total Projects', val: activeRegion.projects, color: 'var(--gold)' },
                        { label: 'Status', val: 'Active', color: '#34d399' },
                        { label: 'Govt Projects', val: activeRegion.govt, color: '#60a5fa' },
                        { label: 'Private Projects', val: activeRegion.pvt, color: '#a78bfa' },
                      ].map(s => (
                        <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-md)', padding: '14px' }}>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{s.label}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: s.color, lineHeight: 1 }}>{s.val}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Capabilities Deployed</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {activeRegion.types.map(t => (
                          <span key={t} className="badge badge-navy" style={{ fontSize: '0.68rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Start a Project in {activeRegion.name}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRICT LIST */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Coverage</div>
              <h2 className="section-title">Across <em>Tamil Nadu</em> & Beyond.</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {districtList.map((d, i) => (
              <ScrollReveal key={d} delay={i * 30}>
                <div style={{
                  padding: '10px 22px', borderRadius: 'var(--r-full)',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-heading)', fontWeight: 500,
                  transition: 'all 0.2s ease', cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,180,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,180,0,0.25)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                >{d}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

