'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
     name: '', email: '', phone: '',
     projectType: '',
     scope: '', timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call and store in localStorage for Admin dashboard
    setTimeout(() => {
      const leads = JSON.parse(localStorage.getItem('sjm_leads') || '[]');
      leads.push({
        ...formData,
        date: new Date().toISOString(),
        source: 'contact-form'
      });
      localStorage.setItem('sjm_leads', JSON.stringify(leads));
      setIsSubmitting(false);
      setStep(4); // Success screen
    }, 1500);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* HEADER SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
           <ScrollReveal>
             <div className="badge badge-gold mb-16">Get In Touch</div>
             <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>Let's Build It<br/><span className="text-gold">Together.</span></h1>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
               Whether you represent a municipal corporation looking for a reliable contractor, or a private client seeking elite architectural coordination — we are ready to engineer your vision.
             </p>
             
             {/* Contact Info Cards */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
                   <div style={{ fontSize: '1.5rem' }}>📞</div>
                   <div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / WhatsApp</div>
                     <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>+91 98765 43210</div>
                   </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
                   <div style={{ fontSize: '1.5rem' }}>✉️</div>
                   <div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</div>
                     <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>info@sjminfrastructure.com</div>
                   </div>
                </div>
             </div>
           </ScrollReveal>
           
           {/* MULTI-STEP FORM */}
           <ScrollReveal delay={200}>
             <div className="card glass-card" style={{ padding: '40px' }}>
               
               {step < 4 && (
                 <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                    {[1,2,3].map(s => (
                       <div key={s} style={{
                         flex: 1, height: '4px', borderRadius: '2px',
                         background: s <= step ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                         transition: 'background 0.3s ease'
                       }} />
                    ))}
                 </div>
               )}

               <form onSubmit={handleSubmit}>
                 
                 {/* STEP 1 */}
                 {step === 1 && (
                   <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                     <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Your Details</h2>
                     <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>Let's start with the basics.</p>
                     
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                       <input type="text" placeholder="Full Name" required className="form-input" 
                         value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                       <input type="email" placeholder="Email Address" required className="form-input" 
                         value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                       <input type="tel" placeholder="Phone Number" required className="form-input" 
                         value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                       <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>Continue →</button>
                     </div>
                   </div>
                 )}

                 {/* STEP 2 */}
                 {step === 2 && (
                   <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                     <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Project Category</h2>
                     <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>What kind of services are you looking for?</p>
                     
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                       {['Government Infrastructure', 'Private Construction', 'CMDA/DTCP Approvals', 'Structural / Architectural Consulting'].map(type => (
                         <div 
                           key={type}
                           onClick={() => setFormData({...formData, projectType: type})}
                           style={{
                             padding: '16px 20px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                             border: formData.projectType === type ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
                             background: formData.projectType === type ? 'rgba(212,175,55,0.05)' : 'rgba(255,255,255,0.03)',
                             transition: 'all 0.2s', fontWeight: 500
                           }}
                         >
                           {type}
                         </div>
                       ))}
                     </div>
                     <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                       <button type="button" onClick={() => setStep(1)} className="btn btn-ghost-navy" style={{ flex: 1 }}>Back</button>
                       <button type="submit" disabled={!formData.projectType} className="btn btn-primary" style={{ flex: 2 }}>Continue →</button>
                     </div>
                   </div>
                 )}

                 {/* STEP 3 */}
                 {step === 3 && (
                   <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                     <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Scope & Timeline</h2>
                     <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>Tell us a bit about your project parameters.</p>
                     
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                       <textarea 
                         placeholder="Briefly describe your requirements..." 
                         required rows={4} className="form-input" style={{ resize: 'none' }}
                         value={formData.scope} onChange={e => setFormData({...formData, scope: e.target.value})} 
                       />
                       <select 
                         required className="form-input" style={{ appearance: 'none' }}
                         value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}
                       >
                         <option value="" disabled>Expected Timeline</option>
                         <option value="Immediate">Immediate (Within a month)</option>
                         <option value="1-3 Months">1-3 Months</option>
                         <option value="3-6 Months">3-6 Months</option>
                         <option value="Just inquiring">Just inquiring</option>
                       </select>
                     </div>
                     <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                       <button type="button" onClick={() => setStep(2)} className="btn btn-ghost-navy" style={{ flex: 1 }}>Back</button>
                       <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ flex: 2 }}>
                         {isSubmitting ? 'Submitting...' : 'Request Quotation'}
                       </button>
                     </div>
                   </div>
                 )}

                 {/* STEP 4 (SUCCESS) */}
                 {step === 4 && (
                   <div style={{ animation: 'fadeUp 0.3s ease-out', textAlign: 'center', padding: '20px 0' }}>
                     <div style={{ 
                       width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)',
                       color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center',
                       fontSize: '2.5rem', margin: '0 auto 24px'
                     }}>✓</div>
                     <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Requirement Received!</h2>
                     <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                       Thank you, {formData.name}. Our core engineering team will review your requirements for "{formData.projectType}" and reach out to you at {formData.phone} shortly.
                     </p>
                     <button onClick={() => {setStep(1); setFormData({...formData, scope: '', projectType: ''})}} className="btn btn-ghost-navy" style={{ marginTop: '24px' }}>
                       Submit Another Request
                     </button>
                   </div>
                 )}

               </form>
             </div>
           </ScrollReveal>
        </div>
      </section>

      {/* MAP / OFFICE LOCATION */}
      <section className="section-pad">
         <div className="container">
           <ScrollReveal>
             <div className="text-center" style={{ marginBottom: '40px' }}>
               <h2 className="section-title">Headquarters</h2>
               <p style={{ color: 'var(--text-secondary)' }}>No. 12, Anna Nagar, Chennai – 600040</p>
             </div>
             
             {/* Map Placeholder */}
             <div style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                <Image src="/hero_highway.png" alt="Map View Placeholder" fill style={{ objectFit: 'cover', opacity: 0.5 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div className="glass-card" style={{ padding: '20px 40px', textAlign: 'center' }}>
                     <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📍</div>
                     <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Chennai Checkpoint</h3>
                     <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Google Maps Interactive Embed Goes Here</p>
                   </div>
                </div>
             </div>
           </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
