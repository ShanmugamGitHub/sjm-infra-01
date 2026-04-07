'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { Building2, SunMedium, ClipboardSignature, FileCheck, Droplets, Landmark } from 'lucide-react';

const timeline = [
  { year: '1993', title: 'Foundation laid', desc: 'Sri Lakshmi Foundations established in Chennai with a focus on residential building construction.' },
  { year: '1998', title: 'Government vertical launch', desc: 'First PWD contract secured. Commenced government civil works in Villupuram district.' },
  { year: '2004', title: 'A-Class registration', desc: 'Upgraded to A-Class PWD contractor status, enabling bids for large-scale state highway projects.' },
  { year: '2009', title: 'GCC empanelment', desc: 'Added to the approved contractor list for Greater Chennai Corporation works.' },
  { year: '2014', title: 'CMDA consultancy wing', desc: 'Launched dedicated building approval division &mdash; CMDA/DTCP processing and structural design.' },
  { year: '2018', title: '100th project milestone', desc: 'Completed 100th project &mdash; a 22 km district road in Dharmapuri under NABARD funding.' },
  { year: '2021', title: 'TWAD & municipal works', desc: 'Expanded into water supply and municipal infrastructure through TWAD board empanelment.' },
  { year: '2024', title: 'National expansion phase', desc: 'Active in 18 districts. Targeting 38 districts and 3-state coverage by 2027.' },
];

const team = [
  { name: 'S. Murugan', role: 'Founder & Managing Director', exp: '32 years', img: '/about_team.png' },
  { name: 'L. Ananthi', role: 'Director &mdash; Building Consultancy', exp: '24 years', img: '/about_team.png' },
  { name: 'A. Kathirvel', role: 'Chief Site Engineer', exp: '20 years', img: '/about_team.png' },
];

const certs = [
  { label: 'A-Class PWD', icon: <Building2 size={28} className="lucide-icon" />, desc: 'Tamil Nadu Public Works Dept' },
  { label: 'GCC Approved', icon: <SunMedium size={28} className="lucide-icon" />, desc: 'Greater Chennai Corporation' },
  { label: 'CMDA Panel', icon: <ClipboardSignature size={28} className="lucide-icon" />, desc: 'Chennai Metropolitan Dev. Auth.' },
  { label: 'DTCP Licensed', icon: <FileCheck size={28} className="lucide-icon" />, desc: 'Directorate of Town & Country Planning' },
  { label: 'TWAD Empanelled', icon: <Droplets size={28} className="lucide-icon" />, desc: 'Tamil Nadu Water & Drainage Board' },
  { label: 'NABARD Projects', icon: <Landmark size={28} className="lucide-icon" />, desc: 'National Bank funded rural works' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
        paddingTop: '120px',
      }}>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%',
          opacity: 0.25,
        }}>
          <Image src="/about_team.png" alt="SJM team at site" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60%', background: 'linear-gradient(to right, var(--navy-dark) 0%, transparent 100%)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(255,180,0,0.06) 0%, transparent 60%)'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="section-eyebrow">Our Legacy</div>
            <h1 style={{ color: 'var(--white)', marginBottom: '24px' }}>
              30+ Years of<br /><span className="text-gradient">Engineered Trust.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '560px' }}>
              Founded in 1993 in Chennai, Sri Lakshmi Foundations (SJM Infrastructure) has grown
              from a local building contractor to a statewide A-Class civil contractor and building
              consultancy firm serving 18+ districts across Tamil Nadu.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { val: '30+', label: 'Year Legacy' },
                { val: '200+', label: 'Projects Completed' },
                { val: 'A-Class', label: 'PWD Registration' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <div className="section-eyebrow">Our Story</div>
                <h2 className="section-title">Built on Hard Work<br />&amp; <em>Integrity.</em></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                    Sri Lakshmi Foundations was established in 1993 by S. Murugan, a first-generation civil engineer
                    from Chennai, with a vision to bring professional-grade building services to individual homeowners
                    at fair prices.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                    Through the 2000s, as Tamil Nadu expanded its road network, we pivoted to government infrastructure
                    contracts &mdash; winning our first PWD tender in 1998 and achieving the coveted A-Class certification
                    by 2004.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                    Today, SJM Infrastructure simultaneously manages complex government highway projects and
                    private building consultancy &mdash; a rare dual-expertise that gives our clients a partner
                    who understands both worlds.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', height: '480px', position: 'relative' }}>
                  <Image src="/about_team.png" alt="SJM team" fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(5,14,26,0.6) 100%)' }} />
                </div>
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '-20px',
                  background: 'var(--gold)', borderRadius: 'var(--r-lg)',
                  padding: '20px 24px', boxShadow: 'var(--shadow-gold)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', color: 'var(--navy-dark)', lineHeight: 1 }}>1993</div>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(10,25,47,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Founded</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Growth Journey</div>
              <h2 className="section-title">Three Decades of<br /><em>Milestones.</em></h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '2px', background: 'linear-gradient(to bottom, var(--gold), rgba(255,180,0,0.1))',
              transform: 'translateX(-50%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {timeline.map((ev, i) => (
                <ScrollReveal key={ev.year} delay={i * 60}>
                  <div style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', position: 'relative' }}>
                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: '50%', top: '24px',
                      width: '14px', height: '14px', borderRadius: '50%',
                      background: 'var(--gold)', border: '3px solid var(--navy-dark)',
                      transform: 'translateX(-50%)', zIndex: 2,
                    }} />
                    <div style={{
                      width: '44%',
                      background: 'var(--navy-card)', border: '1px solid var(--border-glass)',
                      borderRadius: 'var(--r-lg)', padding: '24px 28px',
                      position: 'relative',
                      transition: 'border-color 0.3s',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem',
                        color: 'var(--gold)', marginBottom: '6px'
                      }}>{ev.year}</div>
                      <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1rem' }}>{ev.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{ev.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Credentials</div>
              <h2 className="section-title">Registrations &amp;<br /><em>Certifications.</em></h2>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: '20px' }}>
            {certs.map((c, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{c.icon}</div>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '6px', fontSize: '1.1rem' }}>{c.label}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Leadership</div>
              <h2 className="section-title">The Team Behind<br /><em>Every Project.</em></h2>
            </div>
          </ScrollReveal>
          <div className="grid-3" style={{ gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {team.map((m, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}>
                  <div style={{ height: '220px', position: 'relative', background: 'linear-gradient(135deg, var(--navy-light), var(--navy-card))' }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(10,25,47,0.8) 100%)' }} />
                  </div>
                  <div style={{ padding: '24px 20px' }}>
                    <h4 style={{ color: 'var(--white)', marginBottom: '4px' }}>{m.name}</h4>
                    <p style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>{m.role}</p>
                    <p style={{ color: 'var(--text-soft)', fontSize: '0.8rem' }}>{m.exp} Experience</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-pad" style={{ background: 'var(--gold)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ color: 'var(--navy-dark)', marginBottom: '16px' }}>
              Our Vision: 38 Districts by 2027.
            </h2>
            <p style={{ color: 'rgba(10,25,47,0.65)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              We are in active expansion across all Tamil Nadu districts, and entering Andhra Pradesh
              and Kerala markets. Our national recognition strategy is built on consistent quality
              and government-grade reliability.
            </p>
            <Link href="/contact" className="btn btn-navy btn-lg">Partner With Us</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

