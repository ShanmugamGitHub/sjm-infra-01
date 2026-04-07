'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { Waypoints, Building2, SunMedium, ClipboardSignature, FileCheck, Droplets, Landmark, Ruler, BarChart3, Home } from 'lucide-react';

const govtServices = [
  {
    icon: <Waypoints size={22} className="lucide-icon" />, title: 'Highway Construction',
    desc: 'Four-lane and two-lane highway widening, new formation, bituminous work, crash barriers, signage, and drainage.',
    scope: ['State Highway (SH) projects', 'National Highway (NH) service roads', 'Rural road formation (PMGSY)', 'Bridge & culvert construction'],
    client: 'Tamil Nadu PWD / NHAI',
  },
  {
    icon: <Building2 size={22} className="lucide-icon" />, title: 'PWD Building Works',
    desc: 'Government office buildings, courts, hospitals, schools, hostels, and institutional construction under PWD contracts.',
    scope: ['RCC framed buildings up to 10 floors', 'Renovation of heritage structures', 'Compound walls & campus works', 'Electrical & plumbing coordination'],
    client: 'Tamil Nadu PWD &mdash; Buildings',
  },
  {
    icon: <Home size={22} className="lucide-icon" />, title: 'GCC / Municipality Works',
    desc: 'Storm water drains, CC roads, footpaths, retaining walls, and all urban infrastructure works in Chennai.',
    scope: ['Storm water drain tunnelling', 'CC road construction', 'Underground utility corridors', 'Ward-level road improvement'],
    client: 'Greater Chennai Corporation',
  },
  {
    icon: <Droplets size={22} className="lucide-icon" />, title: 'TWAD & Water Supply',
    desc: 'Rural drinking water supply schemes, overhead tanks, pump houses, and distribution pipeline networks.',
    scope: ['OHT design & construction', '45 km+ pipeline networks', 'Pump house construction', 'Distribution valve chambers'],
    client: 'TWAD Board Tamil Nadu',
  },
];

const consultServices = [
  {
    icon: <ClipboardSignature size={22} className="lucide-icon" />, title: 'CMDA Plan Approval',
    desc: 'Complete end-to-end CMDA approval for residential, commercial, and institutional buildings in Chennai Metropolitan Area.',
    scope: ['Pre-application site study', 'Building plan drafting', 'CMDA portal submission', 'Liaison & follow-up'],
    timeline: '45&ndash;90 days',
  },
  {
    icon: <FileCheck size={22} className="lucide-icon" />, title: 'DTCP Approval',
    desc: 'DTCP layout and building permit for panchayat areas, CMDA exemption zones, and all Tamil Nadu districts.',
    scope: ['Survey assessment', 'Layout plan preparation', 'DTCP office coordination', 'Completion certificate'],
    timeline: '30&ndash;75 days',
  },
  {
    icon: <Ruler size={22} className="lucide-icon" />, title: 'Structural Design',
    desc: 'Safe, optimized RCC structural drawings for residential, commercial, and industrial buildings with soil analysis.',
    scope: ['Soil test coordination', 'Foundation design', 'RCC column & beam schedule', 'Slab reinforcement drawings'],
    timeline: '7&ndash;14 days',
  },
  {
    icon: <SunMedium size={22} className="lucide-icon" />, title: '3D Elevation Design',
    desc: 'Photorealistic 3D architectural renders, walkthroughs, and modern exterior/interior design packages.',
    scope: ['Front elevation 3D', 'All-angle exterior renders', 'Interior design concepts', 'Virtual walkthrough video'],
    timeline: '3&ndash;7 days',
  },
  {
    icon: <BarChart3 size={22} className="lucide-icon" />, title: 'Valuation Reports',
    desc: 'Bank-grade property valuation reports for residential, commercial, and industrial properties across Tamil Nadu.',
    scope: ['Market value assessment', 'Fair value for bank loans', 'Govt-stamp value comparison', 'Certified valuation certificate'],
    timeline: '2&ndash;5 days',
  },
  {
    icon: <Landmark size={22} className="lucide-icon" />, title: 'Loan Facilitation',
    desc: 'Home loan and construction loan assistance &mdash; documentation, builder tie-ups, and bank liaison for clients.',
    scope: ['Bank documentation support', 'Legal & EC preparation', 'Site inspection coordination', 'EMI planning consultation'],
    timeline: '15&ndash;30 days',
  },
];

const dtcpSteps = [
  { n: '01', title: 'Obtain Parent Document', desc: 'Collect the original sale deed, parent document, and encumbrance certificate from the registration sub-office.' },
  { n: '02', title: 'Survey & FMB Sketch', desc: 'Commission a licensed surveyor. Verify FMB sketch. Confirm plot boundaries match physical ground.' },
  { n: '03', title: 'Structural Design', desc: 'Prepare structural drawings (foundation, column, slab) stamped by a licensed structural engineer.' },
  { n: '04', title: 'Building Plan Drawing', desc: 'Prepare plan, elevation, and section drawings to DTCP specifications. Include set-back distances and road widths.' },
  { n: '05', title: 'Application Submission', desc: 'Submit online via TN Government e-portal with NOCs, demand draft, and owner affidavit.' },
  { n: '06', title: 'Field Inspection', desc: 'DTCP engineer visits site to verify boundary, road width, and setbacks match the submitted plan.' },
  { n: '07', title: 'Approval & Collection', desc: 'Collect stamped approved plan from DTCP office. Begin construction legally. Keep plan copy on site.' },
];

const faqs = [
  { q: 'How long does CMDA building approval take in Chennai?', a: 'For a standard residential building, CMDA approval typically takes 45&ndash;90 working days through the online portal. Our team handles all submissions and follow-ups, keeping you updated at each stage.' },
  { q: 'What is the difference between CMDA and DTCP approval?', a: 'CMDA (Chennai Metropolitan Development Authority) approval applies within the Chennai Metropolitan Area. DTCP (Directorate of Town and Country Planning) approval is for all other areas in Tamil Nadu. Our team handles both.' },
  { q: 'What does A-Class PWD registration mean?', a: 'A-Class is the highest tier in Tamil Nadu\'s PWD contractor classification system. It allows SJM Infrastructure to bid for large-scale government contracts exceeding Rs.10 crore without a monetary cap on tender value.' },
  { q: 'Can you manage both CMDA approval and construction?', a: 'Yes &mdash; this is our most popular package. We handle the full cycle from plan drawing and CMDA approval, to structural design and complete turnkey construction. One team, zero coordination hassle.' },
  { q: 'Do you work in districts outside Chennai?', a: 'Absolutely. We are active in 18+ Tamil Nadu districts. For DTCP approvals, building design, and construction, we accept projects statewide. Contact us with your district for availability.' },
];

export default function ServicesPage() {
  const [tab, setTab] = useState('govt');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
        paddingTop: '160px', paddingBottom: '100px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 80%, rgba(255,180,0,0.07) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '20px' }}>Expertise</div>
          <h1 style={{ color: 'var(--white)', marginBottom: '20px' }}>
            What We <span className="text-gradient">Build.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            From A-Class government infrastructure to premium private building consultancy &mdash;
            comprehensive services under one expert roof.
          </p>
          {/* Tab Bar */}
          <div className="tab-bar">
            <button className={`tab-btn${tab === 'govt' ? ' active' : ''}`} onClick={() => setTab('govt')} id="tab-govt">
              <Building2 size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Government Infrastructure
            </button>
            <button className={`tab-btn${tab === 'consult' ? ' active' : ''}`} onClick={() => setTab('consult')} id="tab-consult">
              <Home size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Building Consultancy
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '24px' }}>
            {(tab === 'govt' ? govtServices : consultServices).map((svc, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass-card" style={{ padding: '40px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                    <div style={{
                      width: '54px', height: '54px', borderRadius: 'var(--r-md)', flexShrink: 0,
                      background: 'rgba(255,180,0,0.1)', border: '1px solid rgba(255,180,0,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem'
                    }}>{svc.icon}</div>
                    <div>
                      <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '8px' }}>{svc.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{svc.desc}</p>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--r-md)', padding: '20px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Scope Includes</div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {svc.scope.map((sc, j) => (
                        <li key={j} style={{ display: 'flex', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>&rarr;</span> {sc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {svc.timeline && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)' }}>Typical Timeline</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--gold)' }}>{svc.timeline}</span>
                    </div>
                  )}
                  {svc.client && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)' }}>Project Client Type</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{svc.client}</span>
                    </div>
                  )}
                  <Link href="/contact" className="btn btn-outline-gold btn-sm" style={{ display: 'inline-flex' }}>
                    Request Quote &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DTCP PROCESS &mdash; SEO SECTION */}
      <section className="section-pad" style={{ background: 'var(--navy)' }} id="dtcp-guide">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>How-To Guide</div>
              <h2 className="section-title">Step-by-Step DTCP Approval<br /><em>Process in Tamil Nadu.</em></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
                Getting DTCP approval for your building in Tamil Nadu doesn't have to be complicated.
                SJM Infrastructure has guided 300+ clients through this process.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {dtcpSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'var(--navy-card)', border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--r-lg)', padding: '28px',
                  transition: 'border-color 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,180,0,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-glass)'}
                >
                  <div style={{
                    flexShrink: 0, width: '50px', height: '50px',
                    background: 'rgba(255,180,0,0.1)', border: '1px solid rgba(255,180,0,0.2)',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--gold)'
                  }}>{step.n}</div>
                  <div>
                    <h4 style={{ color: 'var(--white)', marginBottom: '6px', fontSize: '1rem' }}>{step.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Let Us Handle Your Approval
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ &mdash; SEO */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }} id="faq">
        <div className="container" style={{ maxWidth: '820px' }}>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>FAQ</div>
              <h2 className="section-title">Frequently Asked<br /><em>Questions.</em></h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div
                  style={{
                    background: 'var(--navy-card)', border: `1px solid ${openFaq === i ? 'rgba(255,180,0,0.25)' : 'var(--border-glass)'}`,
                    borderRadius: 'var(--r-lg)', overflow: 'hidden', transition: 'border-color 0.3s',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left', gap: '16px'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.98rem', color: 'var(--white)' }}>
                      {faq.q}
                    </span>
                    <span style={{
                      flexShrink: 0, color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 300,
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.3s', display: 'block'
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? '200px' : '0',
                    overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)'
                  }}>
                    <p style={{ padding: '0 28px 24px', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.8 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

