'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, Construction, Ruler, Clipboard, Building, Banknote, Home, Hammer, Map, Clock } from 'lucide-react';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', district: '', scope: '', timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) { setStep(step + 1); return; }
    setIsSubmitting(true);
    setTimeout(() => {
      const leads = JSON.parse(localStorage.getItem('sjm_leads') || '[]');
      leads.push({ ...formData, date: new Date().toISOString(), source: 'contact-form' });
      localStorage.setItem('sjm_leads', JSON.stringify(leads));
      setIsSubmitting(false);
      setStep(4);
    }, 1500);
  };

  const projectTypes = [
    { icon: <Ruler size={16} className="lucide-icon" />, label: 'Building Plan & Layout' },
    { icon: <Clipboard size={16} className="lucide-icon" />, label: 'CMDA / DTCP Approvals' },
    { icon: <Construction size={48} className="lucide-icon mb-4" />, label: 'Structural Design' },
    { icon: <Building size={16} className="lucide-icon" />, label: '3D Drawings & Elevation' },
    { icon: <Banknote size={16} className="lucide-icon" />, label: 'Estimation & Valuation' },
    { icon: <Home size={16} className="lucide-icon" />, label: 'Housing Loan Assistance' },
    { icon: <Hammer size={16} className="lucide-icon" />, label: 'Full Construction' },
    { icon: <Map size={16} className="lucide-icon" />, label: 'Govt / PWD / Highway' },
  ];

  const contacts = [
    { icon: <Phone size={16} className="lucide-icon" />, label: 'Phone 1', val: '70101 96927', href: 'tel:+917010196927' },
    { icon: <Phone size={16} className="lucide-icon" />, label: 'Phone 2', val: '70103 94507', href: 'tel:+917010394507' },
    { icon: <Mail size={16} className="lucide-icon" />, label: 'Email', val: 'sjminfras@gmail.com', href: 'mailto:sjminfras@gmail.com' },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, label: 'Address', val: 'No.1093, Metro Grand City, Kundrathur, Chennai – 600 069', href: null },
    { icon: <Clock size={16} className="lucide-icon" />, label: 'Office Hours', val: 'Mon–Sat: 9 AM – 7 PM', href: null },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
        paddingTop: '160px', paddingBottom: '100px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 20% 60%, rgba(255,180,0,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Left */}
            <ScrollReveal>
              <div>
                <div className="section-eyebrow">Get In Touch</div>
                <h1 style={{ color: 'var(--white)', marginBottom: '16px' }}>
                  Let&apos;s Build<br /><span className="text-gradient">Together.</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '8px' }}>
                  Based in <strong style={{ color: 'var(--white)' }}>Kundrathur, Chennai</strong>. We serve clients across Tamil Nadu for
                  building plans, CMDA/DTCP approvals, structural designs, 3D elevations, and full construction.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  Our senior engineers respond with a detailed scope and quote within <strong style={{ color: 'var(--white)' }}>4 business hours</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {contacts.map((c, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: '14px', alignItems: 'center',
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 'var(--r-md)', padding: '14px 18px',
                    }}>
                      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-soft)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{c.label}</div>
                        {c.href
                          ? <a href={c.href} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)', textDecoration: 'none' }}>{c.val}</a>
                          : <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>{c.val}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick dial */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="https://wa.me/917010196927" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    WhatsApp Now
                  </a>
                  <a href="tel:+917010196927" className="btn btn-ghost-gold"><Phone size={16} className="lucide-icon" />  Call Direct</a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Multi-step Form */}
            <ScrollReveal delay={150}>
              <div style={{
                background: 'rgba(10,25,47,0.5)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-2xl)',
                overflow: 'hidden',
              }}>
                <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold), var(--gold-deep))' }} />
                <div style={{ padding: '36px' }}>
                  {/* Progress */}
                  {step < 4 && (
                    <div style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        {['Your Details', 'Project Type', 'Scope'].map((lbl, i) => (
                          <span key={lbl} style={{
                            fontSize: '0.68rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.06em',
                            color: i + 1 <= step ? 'var(--gold)' : 'var(--text-soft)'
                          }}>{lbl}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {[1, 2, 3].map(s => (
                          <div key={s} style={{
                            flex: 1, height: '3px', borderRadius: '2px',
                            background: s <= step ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
                            transition: 'background 0.4s ease',
                          }} />
                        ))}
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Step 1 */}
                    {step === 1 && (
                      <div style={{ animation: 'fadeUp 0.35s ease-out' }}>
                        <h3 style={{ color: 'var(--white)', marginBottom: '6px', fontSize: '1.2rem' }}>Your Details</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>Tell us who you are.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <input type="text" placeholder="Full Name" required className="form-input" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                          <input type="tel" placeholder="Phone / WhatsApp" required className="form-input" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                          <input type="email" placeholder="Email (optional)" className="form-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                          <input type="text" placeholder="Your Area / District" className="form-input" value={formData.district} onChange={e => setFormData({ ...formData, district: e.target.value })} />
                          <button type="submit" className="btn btn-primary" style={{ marginTop: '4px' }}>Continue &rarr;</button>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div style={{ animation: 'fadeUp 0.35s ease-out' }}>
                        <h3 style={{ color: 'var(--white)', marginBottom: '6px', fontSize: '1.2rem' }}>What Do You Need?</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>Select your project category.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                          {projectTypes.map(t => (
                            <button key={t.label} type="button"
                              onClick={() => setFormData({ ...formData, projectType: t.label })}
                              style={{
                                padding: '12px 10px', borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left',
                                border: `1px solid ${formData.projectType === t.label ? 'var(--gold)' : 'rgba(255,255,255,0.08)'}`,
                                background: formData.projectType === t.label ? 'rgba(255,180,0,0.08)' : 'rgba(255,255,255,0.03)',
                                color: formData.projectType === t.label ? 'var(--gold)' : 'rgba(255,255,255,0.6)',
                                transition: 'all 0.2s', fontSize: '0.78rem', fontFamily: 'var(--font-heading)', fontWeight: 600,
                              }}>
                              <div style={{ fontSize: '1rem', marginBottom: '3px' }}>{t.icon}</div>
                              {t.label}
                            </button>
                          ))}
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button type="button" onClick={() => setStep(1)} className="btn btn-ghost-white" style={{ flex: 1 }}>&larr; Back</button>
                          <button type="submit" disabled={!formData.projectType} className="btn btn-primary" style={{ flex: 2 }}>Continue &rarr;</button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div style={{ animation: 'fadeUp 0.35s ease-out' }}>
                        <h3 style={{ color: 'var(--white)', marginBottom: '6px', fontSize: '1.2rem' }}>Scope &amp; Timeline</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>Help us understand your project.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <textarea placeholder="Briefly describe your requirements (plot size, floors, area, budget, etc.)..." required rows={4} className="form-textarea" value={formData.scope} onChange={e => setFormData({ ...formData, scope: e.target.value })} />
                          <select required className="form-select" style={{ color: formData.timeline ? 'var(--white)' : 'rgba(255,255,255,0.4)' }}
                            value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })}>
                            <option value="" disabled>Expected Start Timeline</option>
                            <option value="Immediate">Immediate (Within 1 month)</option>
                            <option value="1-3 Months">1&ndash;3 Months</option>
                            <option value="3-6 Months">3&ndash;6 Months</option>
                            <option value="Planning">Just Planning / Inquiring</option>
                          </select>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                          <button type="button" onClick={() => setStep(2)} className="btn btn-ghost-white" style={{ flex: 1 }}>&larr; Back</button>
                          <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ flex: 2 }}>
                            {isSubmitting ? 'Sending' : 'Request Quotation \u2192'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4 — Success */}
                    {step === 4 && (
                      <div style={{ animation: 'scaleIn 0.4s ease-out', textAlign: 'center', padding: '16px 0' }}>
                        <div style={{
                          width: '68px', height: '68px', borderRadius: '50%',
                          background: 'rgba(52,211,153,0.12)', border: '2px solid rgba(52,211,153,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.8rem', margin: '0 auto 20px',
                        }}>✓</div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '10px' }}>Received, {formData.name}!</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '24px' }}>
                          We will contact you at <strong style={{ color: 'var(--gold)' }}>{formData.phone}</strong> within 4 business hours
                          regarding your <strong style={{ color: 'var(--white)' }}>{formData.projectType}</strong> enquiry.
                        </p>
                        <a href="https://wa.me/917010196927" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginBottom: '10px', width: '100%', justifyContent: 'center' }}>
                          Chat on WhatsApp for faster response
                        </a>
                        <button onClick={() => { setStep(1); setFormData({ name: '', email: '', phone: '', projectType: '', district: '', scope: '', timeline: '' }); }} className="btn btn-ghost-white" style={{ width: '100%' }}>
                          Submit Another Request
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SEO SERVICES AREA ── */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Serving Kundrathur &amp; Beyond</div>
              <h2 className="section-title">Your Trusted Builder in<br /><em>Kundrathur, Chennai.</em></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.85 }}>
                SJM Infrastructure (Sri Lakshmi Foundations) has been the go-to building contractor for Kundrathur and
                surrounding areas of Chennai&apos;s south zone including Tambaram, Pallavaram, Pammal, Anakaputhur,
                and Kanchipuram. From a single-room extension to a full G+3 apartment, we deliver with the same
                precision every time.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { area: 'Kundrathur', badge: 'HQ', color: 'var(--gold)' },
              { area: 'Tambaram', badge: '', color: '#60a5fa' },
              { area: 'Pallavaram', badge: '', color: '#34d399' },
              { area: 'Pammal', badge: '', color: '#a78bfa' },
              { area: 'Anakaputhur', badge: '', color: '#fb923c' },
              { area: 'Chromepet', badge: '', color: '#f472b6' },
              { area: 'Kanchipuram', badge: '', color: '#60a5fa' },
              { area: 'Chengalpattu', badge: '', color: '#34d399' },
            ].map((a, i) => (
              <ScrollReveal key={a.area} delay={i * 50}>
                <div style={{
                  padding: '16px 20px', borderRadius: 'var(--r-md)',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${a.color}30`; e.currentTarget.style.background = `${a.color}08`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div>
                    <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{a.area}</div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>Active Area</div>
                  </div>
                  {a.badge
                    ? <span style={{ padding: '3px 8px', background: `${a.color}20`, border: `1px solid ${a.color}40`, borderRadius: '999px', fontSize: '0.62rem', color: a.color, fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{a.badge}</span>
                    : <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: a.color, opacity: 0.6 }} />
                  }
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <div className="section-eyebrow">Our Office</div>
                <h2 className="section-title" style={{ margin: 0 }}>Visit Us in <em>Kundrathur.</em></h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '0.9rem' }}>
                  No.1093, Metro Grand City, Kundrathur, Chennai &ndash; 600 069
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--border-glass)', height: '400px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Kundrathur+Chennai+600069&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                title="SJM Infrastructure Office — Kundrathur Chennai"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
