'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const mapData = [
  { id: 'chennai', name: 'Chennai', top: '15%', left: '78%', projects: 85, types: ['GCC', 'Residential', 'Commercial', 'CMDA'] },
  { id: 'kancheepuram', name: 'Kancheepuram', top: '22%', left: '72%', projects: 12, types: ['Industrial', 'DTCP'] },
  { id: 'villupuram', name: 'Villupuram', top: '35%', left: '60%', projects: 8, types: ['Highway', 'PWD'] },
  { id: 'salem', name: 'Salem', top: '40%', left: '42%', projects: 15, types: ['Municipality'] },
  { id: 'coimbatore', name: 'Coimbatore', top: '55%', left: '25%', projects: 30, types: ['Commercial', 'Residential'] },
  { id: 'madurai', name: 'Madurai', top: '70%', left: '55%', projects: 22, types: ['DTCP', 'Residential'] },
  { id: 'tirunelveli', name: 'Tirunelveli', top: '85%', left: '45%', projects: 6, types: ['PWD', 'Highway'] }
];

export default function ReachPage() {
  const [activeRegion, setActiveRegion] = useState(mapData[0]);

  return (
    <div style={{ paddingTop: '80px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* HEADER SECTION */}
      <section style={{ padding: '60px 0', background: 'var(--navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container text-center">
           <ScrollReveal>
             <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>Our <span className="text-gold">National Reach</span></h1>
             <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
               A growing footprint. Explore our active and completed operations across Tamil Nadu.
             </p>
           </ScrollReveal>
        </div>
      </section>

      {/* MAP AND INTERACTIVE PANEL */}
      <section style={{ flex: 1, position: 'relative', display: 'flex', background: 'var(--navy-light)' }}>
         <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '60px 24px', alignItems: 'flex-start' }}>
            
            {/* Left Box: India/TamilNadu Abstract Map */}
            <div style={{ flex: '1 1 500px' }}>
               <ScrollReveal>
                  <div className="glass-card" style={{ height: '600px', position: 'relative', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)' }}>
                     {/* Background Image Abstract map */}
                     <div style={{
                       position: 'absolute', inset: 20, 
                       backgroundImage: 'url(/hero_highway.png)', backgroundSize: 'cover', backgroundPosition: 'center',
                       opacity: 0.15, borderRadius: 'var(--radius-lg)', filter: 'grayscale(100%) blur(2px)'
                     }} />
                     
                     <div style={{ position: 'absolute', top: '20px', left: '30px', color: 'var(--gold)', fontWeight: 800, letterSpacing: '0.1em', fontSize: '1.5rem', opacity: 0.3 }}>TAMIL NADU</div>

                     {/* The Pins */}
                     {mapData.map((loc) => (
                        <div 
                          key={loc.id}
                          className="pulse"
                          onClick={() => setActiveRegion(loc)}
                          onMouseEnter={() => setActiveRegion(loc)}
                          style={{
                             position: 'absolute', 
                             top: loc.top, left: loc.left,
                             width: '24px', height: '24px', 
                             background: activeRegion.id === loc.id ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                             borderRadius: '50%', cursor: 'pointer',
                             border: activeRegion.id === loc.id ? '4px solid var(--navy-dark)' : '2px solid transparent',
                             transform: 'translate(-50%, -50%)',
                             transition: 'all 0.3s ease',
                             zIndex: activeRegion.id === loc.id ? 10 : 1
                          }}
                        >
                           {/* Tooltip on hover */}
                           <div style={{
                              position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
                              background: 'var(--navy-dark)', color: '#fff', padding: '4px 12px',
                              borderRadius: '4px', fontSize: '0.75rem', whiteSpace: 'nowrap',
                              opacity: activeRegion.id === loc.id ? 1 : 0, transition: 'opacity 0.2s',
                              pointerEvents: 'none', border: '1px solid rgba(212,175,55,0.4)'
                           }}>
                              {loc.name}
                           </div>
                        </div>
                     ))}
                  </div>
               </ScrollReveal>
            </div>

            {/* Right Box: Info Panel */}
            <div style={{ flex: '1 1 400px' }}>
               <ScrollReveal delay={200}>
                  <div className="glass-card" style={{ padding: '40px', borderTop: '4px solid var(--gold)' }}>
                     <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{activeRegion.name}</h2>
                     <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Operational District Summary</p>
                     
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
                        <div>
                           <div style={{ fontSize: '0.85rem', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Projects</div>
                           <div style={{ fontSize: '3rem', color: 'var(--gold)', fontWeight: 800, lineHeight: 1 }}>{activeRegion.projects}</div>
                        </div>
                        <div>
                           <div style={{ fontSize: '0.85rem', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</div>
                           <div style={{ fontSize: '1.2rem', color: '#10B981', fontWeight: 700, marginTop: '8px' }}>Active operations</div>
                        </div>
                     </div>

                     <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Capabilities Deployed:</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                           {activeRegion.types.map(type => (
                              <span key={type} className="badge badge-navy">{type}</span>
                           ))}
                        </div>
                     </div>

                     <button className="btn btn-primary" style={{ width: '100%', marginTop: '40px' }}>
                        View Projects in {activeRegion.name}
                     </button>
                  </div>
               </ScrollReveal>
               
               {/* Summary Stats Row */}
               <ScrollReveal delay={300}>
                 <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                   <div className="glass-card" style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                     <div style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800 }}>18+</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Districts Covered</div>
                   </div>
                   <div className="glass-card" style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                     <div style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800 }}>200+</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Completed</div>
                   </div>
                 </div>
               </ScrollReveal>
            </div>

         </div>
      </section>

    </div>
  );
}
