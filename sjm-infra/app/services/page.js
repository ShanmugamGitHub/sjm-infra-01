'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const govtServices = [
  { icon: '🛣️', title: 'Highways & Roadways', desc: 'Executing complex state and national highway projects, including earthworks, metalling, and bituminous macadam.' },
  { icon: '🏙️', title: 'Municipalities & Corporations', desc: 'Developing smart city infrastructure, street lighting, and public amenities for municipal bodies.' },
  { icon: '🏛️', title: 'PWD Contracts', desc: 'Extensive experience in constructing complex government headquarters, hospitals, and educational institutions.' },
  { icon: '🌊', title: 'GCC Works & Storm Water Drains', desc: 'Building resilient drainage systems and flood mitigation infrastructure for Greater Chennai Corporation.' }
];

const consultServices = [
  { icon: '📐', title: 'Building Plan & Architecture', desc: 'Innovative and Vastu-compliant architectural planning for residential and commercial spaces.' },
  { icon: '📋', title: 'CMDA & DTCP Approvals', desc: 'End-to-end liaisoning, paperwork, and swift approval facilitation from state planning authorities.' },
  { icon: '🏗️', title: 'Structural Design', desc: 'Advanced structural engineering ensuring longevity, safety, and optimal utilization of materials.' },
  { icon: '🌆', title: '3D Elevation', desc: 'Photorealistic 3D external and internal renderings designed by top-tier architectural visualizers.' },
  { icon: '⚖️', title: 'Asset Valuation', desc: 'Certified and accurate property valuation services for legal, tax, and investment purposes.' },
  { icon: '💰', title: 'Loan Facilitation', desc: 'Assisting clients in securing construction loans from top financial institutions seamlessly.' }
];

const faqs = [
  { q: 'How long does a CMDA approval typically take?', a: 'Standard approvals take between 30 to 45 working days assuming all legal documents (Patta, EC, Chitta) are perfectly in order. We expedite this process through our deep liaison experience.' },
  { q: 'Do you operate outside of Chennai?', a: 'Yes! While our headquarters is in Chennai, we hold A-Class registrations allowing us to execute major government and private projects all across Tamil Nadu.' },
  { q: 'What is the cost per sq.ft for residential construction?', a: 'Our premium construction packages start at ₹2,200 per sq.ft., but the final cost varies based on structural complexity, chosen materials, and finishing requirements.' },
  { q: 'Can you handle both design and construction (Turnkey)?', a: 'Absolutely. We offer comprehensive turnkey solutions—from initial soil testing and 3D design to the final coat of paint and interior fit-outs.' }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('govt'); // 'govt' or 'consult'
  const [activeFaq, setActiveFaq] = useState(null);

  // Check URL hash on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'govt' || hash === 'consult') {
        setActiveTab(hash);
      }
    }
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* 1. HERO PAGE HEADER */}
      <section style={{ padding: '80px 0', background: 'var(--navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container text-center">
           <ScrollReveal>
             <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>Our Capabilities</h1>
             <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
               Delivering excellence across dual domains: massive state-level infrastructure and elite private building consultancy.
             </p>
           </ScrollReveal>
        </div>
      </section>

      {/* 2. TAB TOGGLE SYSTEM */}
      <section style={{ padding: '40px 0 0 0', position: 'sticky', top: '76px', zIndex: 100, background: 'rgba(2,12,27,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
         <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', padding: '6px' }}>
               <button 
                 onClick={() => { setActiveTab('govt'); window.location.hash = 'govt'; }}
                 style={{
                   padding: '12px 32px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                   fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem',
                   background: activeTab === 'govt' ? 'var(--gold)' : 'transparent',
                   color: activeTab === 'govt' ? 'var(--navy-dark)' : 'rgba(255,255,255,0.6)',
                   transition: 'all 0.3s ease'
                 }}
               >
                 Government Contracts
               </button>
               <button 
                 onClick={() => { setActiveTab('consult'); window.location.hash = 'consult'; }}
                 style={{
                   padding: '12px 32px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                   fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.05rem',
                   background: activeTab === 'consult' ? 'var(--gold)' : 'transparent',
                   color: activeTab === 'consult' ? 'var(--navy-dark)' : 'rgba(255,255,255,0.6)',
                   transition: 'all 0.3s ease'
                 }}
               >
                 Building Consultancy
               </button>
            </div>
         </div>
      </section>

      {/* 3. DYNAMIC SERVICES GRID */}
      <section className="section-pad" style={{ minHeight: '600px' }}>
        <div className="container">
          
          {activeTab === 'govt' && (
             <div className="view-govt" style={{ animation: 'fadeUp 0.5s ease-out forwards' }}>
               <div className="text-center" style={{ marginBottom: '60px' }}>
                  <div className="badge badge-navy mb-16">Class-A Registered</div>
                  <h2 style={{ fontSize: '2.5rem' }}>Public Infrastructure Works</h2>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                 {govtServices.map((srv, i) => (
                    <ScrollReveal key={i} delay={i * 50}>
                       <div className="card glass-card" style={{ padding: '40px 30px', height: '100%' }}>
                         <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{srv.icon}</div>
                         <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{srv.title}</h3>
                         <p style={{ color: 'var(--text-secondary)' }}>{srv.desc}</p>
                       </div>
                    </ScrollReveal>
                 ))}
               </div>
             </div>
          )}

          {activeTab === 'consult' && (
             <div className="view-consult" style={{ animation: 'fadeUp 0.5s ease-out forwards' }}>
               <div className="text-center" style={{ marginBottom: '60px' }}>
                  <div className="badge badge-gold mb-16">Private Sector</div>
                  <h2 style={{ fontSize: '2.5rem' }}>Architectural & Engineering Consulting</h2>
               </div>
               <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridAutoRows: 'auto', gap: '24px' }}>
                 {consultServices.map((srv, i) => (
                    <div key={i} className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--gold)' }}>
                       <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{srv.icon}</div>
                       <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{srv.title}</h3>
                       <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{srv.desc}</p>
                    </div>
                 ))}
               </div>
             </div>
          )}

        </div>
      </section>

      {/* 4. PROCESS SVG TIMELINE */}
      {activeTab === 'consult' && (
      <section className="section-pad" style={{ background: 'var(--navy-light)' }}>
         <div className="container">
           <ScrollReveal>
             <div className="text-center" style={{ marginBottom: '60px' }}>
               <div className="section-label">Workflow</div>
               <h2 className="section-title">The Approval Process Made Simple</h2>
             </div>
           </ScrollReveal>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
              {[
                { step: '1', title: 'Document Audit', desc: 'Verifying Patta, EC, & legal titles.' },
                { step: '2', title: 'FSI Calculation', desc: 'Drafting optimal Vastu plans based on FSI.' },
                { step: '3', title: 'Submission', desc: 'Applying via single window portal.' },
                { step: '4', title: 'Liaisoning', desc: 'Site inspections & department follow-ups.' },
                { step: '5', title: 'Sanction', desc: 'Final seal & permit handover.' }
              ].map((p, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div style={{ position: 'relative', padding: '20px' }}>
                     <div style={{ 
                       width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy)',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800,
                       margin: '0 auto 20px', position: 'relative', zIndex: 2, boxShadow: 'var(--shadow-gold)'
                     }}>
                       {p.step}
                     </div>
                     {i !== 4 && (
                       <div style={{
                         position: 'absolute', top: '50px', left: '50%', width: '100%', height: '2px',
                         background: 'dashed 2px rgba(212,175,55,0.3)', zIndex: 1
                       }} className="hidden md:block" /> // Just abstract line representation
                     )}
                     <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{p.title}</h3>
                     <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
           </div>
         </div>
      </section>
      )}

      {/* 5. FAQ ACCORDION (SEO) */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <div className="section-label">Insights</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div 
                  className="glass-card" 
                  style={{ padding: '24px', cursor: 'pointer' }}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.q}</h3>
                     <span style={{ fontSize: '1.5rem', color: 'var(--gold)', transform: activeFaq === i ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }}>+</span>
                  </div>
                  {activeFaq === i && (
                    <div style={{ marginTop: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, animation: 'fadeUp 0.3s ease-out forwards' }}>
                       {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
