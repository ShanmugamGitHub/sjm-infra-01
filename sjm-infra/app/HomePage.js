'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterNumber from '@/components/CounterNumber';

const services = [
  { icon: '🛣️', title: 'Highway Construction', desc: 'State & National highway projects with stringent quality norms.', link: '/services#govt', img: '/project_road.png' },
  { icon: '🏛️', title: 'PWD & GCC Works', desc: 'Government buildings, storm water drains, and municipal works.', link: '/services#govt', img: '/project_road.png' },
  { icon: '📋', title: 'CMDA/DTCP Approvals', desc: 'End-to-end liaison and approval for residential and commercial layouts.', link: '/services#consult', img: '/project_building.png' },
  { icon: '🏗️', title: 'Structural Design', desc: 'Safe, optimized, and Vastu-compliant structural engineering solutions.', link: '/services#consult', img: '/project_building.png' },
  { icon: '🌆', title: '3D Elevation', desc: 'High-fidelity architectural renderings and modern facade designs.', link: '/services#consult', img: '/project_building.png' },
  { icon: '🔨', title: 'Full Construction', desc: 'Turnkey building solutions from conceptual design to final handover.', link: '/services#consult', img: '/project_building.png' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. SEC: SPLIT-HERO */}
      <section className="hero-split">
        {/* Left: Govt Infra */}
        <div className="hero-panel hero-left">
          <Image src="/hero_highway.png" alt="Highway Infrastructure" fill style={{ objectFit: 'cover' }} priority />
          <div className="hero-overlay layer-navy" />
          <div className="hero-content">
            <div className="badge badge-gold mb-16">Government Contracts</div>
            <h2>Building the Nation's<br />Infrastructure</h2>
            <p className="hero-p">A-Class contractors for Highways, PWD, and GCC works.</p>
            <div className="hero-actions">
              <Link href="/services#govt" className="btn btn-primary">Tender Capabilities</Link>
              <Link href="/projects#govt" className="btn btn-ghost-gold" id="btn-hero-projects-govt">Govt Projects</Link>
            </div>
          </div>
        </div>

        {/* Right: Private Consultancy */}
        <div className="hero-panel hero-right">
          <Image src="/hero_building.png" alt="Building Design" fill style={{ objectFit: 'cover' }} priority />
          <div className="hero-overlay layer-gold" />
          <div className="hero-content">
            <div className="badge badge-navy mb-16">Private Consultancy</div>
            <h2>Architecting Modern<br />Spaces</h2>
            <p className="hero-p" style={{ color: 'var(--navy)' }}>CMDA/DTCP Approvals, Structural Design, and Construction.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-navy">Get a Plan Quote</Link>
              <Link href="/services#consult" className="btn btn-ghost-navy" id="btn-hero-services-private">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEC: STATS BAR */}
      <section style={{ background: 'var(--gold)', padding: '40px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { val: 30, suffix: '+', label: 'Years of Engineered Trust' },
              { val: 200, suffix: '+', label: 'Projects Delivered' },
              { val: 18, suffix: '+', label: 'Districts Served in TN' },
              { val: 1, prefix: 'Class-', label: 'PWD Registration' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>
                  {stat.prefix}
                  {typeof stat.val === 'number' ? <CounterNumber end={stat.val} duration={2000} /> : stat.val}
                  {stat.suffix}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(10,25,47,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEC: WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="section-label">Our Legacy</div>
              <h2 className="section-title">Zero Compromises since 1993.</h2>
              <p style={{ maxWidth: 640, margin: '0 auto', color: 'var(--text-secondary)' }}>
                Founded by industry veterans, Sri Lakshmi Foundations (SJM Infrastructure) has built a reputation for delivering complex engineering projects on time and within budget.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { icon: '🏆', title: 'A-Class Certification', desc: 'Officially recognized by state authorities for largescale public works.' },
              { icon: '⏱️', title: 'Uncompromising Timelines', desc: 'Precision planning ensures we never miss a critical project deadline.' },
              { icon: '💼', title: 'End-to-End Solutions', desc: 'From initial CMDA approval to final paint coat, we handle it all.' }
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card glass-card" style={{ height: '100%', padding: '40px 30px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEC: BENTO SERVICES */}
      <section className="section-pad" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginBottom: '40px', flexWrap: 'wrap', gap: '20px'
            }}>
              <div>
                <div className="section-label">Expertise</div>
                <h2 className="section-title" style={{ margin: 0 }}>Comprehensive Services.</h2>
              </div>
              <Link href="/services" className="btn btn-ghost-navy">View All Capabilities →</Link>
            </div>
          </ScrollReveal>

          <div className="bento-grid">
            {services.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} className={`bento-item ${i === 0 || i === 5 ? 'large' : ''}`}>
                <Link href={item.link} className="bento-card" style={{ display: 'block', height: '100%' }}>
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  <div className="bento-overlay" />
                  <div className="bento-content">
                    <div style={{ fontSize: '1.8rem', marginBottom: '12px', opacity: 0.9 }}>{item.icon}</div>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
                    <div style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600, marginTop: '16px', letterSpacing: '0.05em' }}>
                      EXPLORE →
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEC: REACH CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #112a4d 100%)',
        padding: '120px 0', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', right: '-10%', top: '-20%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(255,180,0,0.1) 0%, transparent 70%)'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <div className="badge badge-gold mb-16">Expanding Horizons</div>
                <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '24px' }}>
                  A growing footprint across <span style={{ color: 'var(--gold)' }}>Tamil Nadu</span>.
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  From the highways of Villupuram to commercial complexes in Chennai and individual villas in Madurai, our reach is continually expanding. Explore our interactive project map to see our impact.
                </p>
                <Link href="/reach" className="btn btn-primary btn-lg">Explore National Map</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-2xl)', padding: '40px', position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: 20, right: 30, fontSize: '3rem', opacity: 0.2 }}>🗺️</div>
                <h3 style={{ color: 'var(--gold)', fontSize: '3.5rem', marginBottom: '10px' }}>18+</h3>
                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>Districts Active</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {['Chennai', 'Madurai', 'Coimbatore', 'Salem', 'Villupuram', '+13 more'].map(d => (
                    <span key={d} style={{
                      background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)',
                      padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem'
                    }}>{d}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </>
  );
}
