'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 0 80px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: -1,
          background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)'
        }}>
          {/* Subtle grid pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px', pointerEvents: 'none'
          }} />
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
             <div className="badge badge-gold mb-16">Since 1993</div>
             <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', marginBottom: '24px' }}>
               30+ Years of <br/><span className="text-gold">Engineered Trust.</span>
             </h1>
             <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
               From our humble beginnings in 1993 to becoming an A-Class registered contractor, Sri Lakshmi Foundations (SJM Infrastructure) has spent three decades shaping the skyline and infrastructure of Tamil Nadu.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="section-pad" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px' }}>
            <ScrollReveal>
              <div className="card glass-card" style={{ padding: '50px', height: '100%', borderTop: '4px solid var(--gold)' }}>
                 <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👁️</div>
                 <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Vision</h2>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                   To be the most respected and trusted engineering and construction firm in South India, recognized for our uncompromising quality, innovative approaches, and unyielding commitment to safety and timelines.
                 </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card glass-card" style={{ padding: '50px', height: '100%', borderTop: '4px solid var(--white)' }}>
                 <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
                 <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                   To reliably execute complex infrastructure and building projects while providing unparalleled consultancy services. We strive to foster strong client partnerships grounded in transparency and engineering excellence.
                 </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. FOUNDING STORY TIMELINE */}
      <section className="section-pad" style={{ background: 'var(--navy-light)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <div className="section-label">Our Journey</div>
              <h2 className="section-title">Milestones of Excellence</h2>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
             {/* Timeline center line */}
             <div style={{
               position: 'absolute', top: 0, bottom: 0, left: '50px',
               width: '2px', background: 'rgba(212, 175, 55, 0.2)'
             }} />

             {[
               { year: '1993', title: 'Foundation Laid', desc: 'Sri Lakshmi Foundations was established with a focus on residential consultancy.' },
               { year: '2005', title: 'Government Contracts', desc: 'Secured our first major PWD tender, marking our entry into public infrastructure.' },
               { year: '2015', title: 'A-Class Certification', desc: 'Achieved the prestigious A-Class registration, allowing for highest-tier state contracts.' },
               { year: '2025', title: 'National Expansion', desc: 'Rebranding as SJM Infrastructure, expanding our footprint beyond Tamil Nadu.' }
             ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div style={{ display: 'flex', gap: '30px', marginBottom: '50px', position: 'relative' }}>
                    
                    <div style={{ 
                      flexShrink: 0, width: '100px', 
                      fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--gold)',
                      textAlign: 'right', paddingTop: '10px'
                    }}>
                      {item.year}
                    </div>

                    <div style={{ 
                      position: 'absolute', left: '42px', top: '24px',
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: 'var(--gold)', border: '4px solid var(--navy-light)', zIndex: 2
                    }} />

                    <div className="glass-card" style={{ flexGrow: 1, padding: '30px', marginLeft: '20px' }}>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 4. REGISTRATIONS & CERTIFICATIONS */}
      <section className="section-pad">
         <div className="container">
           <ScrollReveal>
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <div className="section-label">Accreditations</div>
              <h2 className="section-title">Officially Recognized</h2>
            </div>
           </ScrollReveal>

           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
             {[
               { icon: '🏛️', name: 'A-Class PWD Registered' },
               { icon: '🏗️', name: 'GCC Approved Contractor' },
               { icon: '📋', name: 'CMDA Certified Engineers' },
               { icon: '🗺️', name: 'DTCP Authorized' },
               { icon: '⚖️', name: 'Registered Valuers' }
             ].map((cert, i) => (
               <ScrollReveal key={i} delay={i * 100}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '999px', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.3s ease', cursor: 'default'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{cert.icon}</span>
                    <span style={{ fontWeight: 600, letterSpacing: '0.02em' }}>{cert.name}</span>
                  </div>
               </ScrollReveal>
             ))}
           </div>
         </div>
      </section>

      {/* 5. LEADERSHIP placeholders */}
      <section className="section-pad" style={{ background: 'var(--navy-light)' }}>
         <div className="container">
            <ScrollReveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div className="section-label">Leadership</div>
                  <h2 className="section-title" style={{ margin: 0 }}>The Minds Behind the Concrete.</h2>
                </div>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {[
                { name: 'S. J. Muthiah', role: 'Founder & Chairman', exp: '40+ Years Exp.' },
                { name: 'Er. L. Anbalagan', role: 'Managing Director', exp: '30+ Years Exp.' },
                { name: 'Er. M. Karthikeyan', role: 'Chief Structural Engineer', exp: '15+ Years Exp.' }
              ].map((leader, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                   <div className="glass-card" style={{ overflow: 'hidden' }}>
                      <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <span style={{ fontSize: '5rem', opacity: 0.5 }}>👤</span>
                      </div>
                      <div style={{ padding: '30px' }}>
                         <div className="badge badge-gold" style={{ marginBottom: '16px' }}>{leader.exp}</div>
                         <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{leader.name}</h3>
                         <p style={{ color: 'var(--text-secondary)' }}>{leader.role}</p>
                      </div>
                   </div>
                </ScrollReveal>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
}
