'use client';

import { useState, useEffect, useRef } from 'react';
import { Construction, Clipboard, ArrowRight, Calendar, MessageSquare, Inbox, Download, Trash, Trash2, Edit2, UploadCloud, MapPin, Image as ImageIcon, Plus } from 'lucide-react';

/* ─── HELPERS ───────────────────────────── */
const STORAGE_KEY = 'sjm_cms_projects';
const LEADS_KEY = 'sjm_leads';
const AUTH_KEY = 'sjm_admin_auth';
const CORRECT_PIN = '1993';

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

const EMPTY_PROJECT = { id: null, title: '', location: '', type: '', description: '', images: [] };

const CATEGORIES = [
  'Highway', 'PWD Building', 'GCC Works', 'TWAD / Water Supply', 'NABARD Road',
  'Municipality', 'Residential Villa', 'Apartment', 'Commercial', 'Industrial', 'Other'
];

/* ─── COMPONENT ─────────────────────────── */
export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pin, setPin] = useState('');
  const [tab, setTab] = useState('leads');
  const [leads, setLeads] = useState([]);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ ...EMPTY_PROJECT });
  const [editId, setEditId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef();

  /* ── SEED SAMPLE DATA ─────────────── */
  const SEED = [
    { id: 's1', title: 'SH-36 Highway Widening', location: 'Villupuram District', type: 'Highway', description: '14.5 km, 4-lane widening. Client: Tamil Nadu PWD. Completed ahead of schedule.', images: [] },
    { id: 's2', title: 'GCC Storm Water Drain Phase 3', location: 'Adyar Zone, Chennai', type: 'GCC Works', description: '8.2 km underground drain. 3000mm RCC pipes.', images: [] },
    { id: 's3', title: 'Lakshmi Residency Phase 2', location: 'Kundrathur, Chennai', type: 'Apartment', description: 'G+3, 12 units. Full CMDA approval & construction.', images: [] },
  ];

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === 'true') setAuth(true);
    setLeads(JSON.parse(localStorage.getItem(LEADS_KEY) || '[]'));
    const stored = localStorage.getItem(STORAGE_KEY);
    setProjects(stored ? JSON.parse(stored) : SEED);
  }, []);

  /* ── AUTH ─────────────────────────── */
  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) { setAuth(true); sessionStorage.setItem(AUTH_KEY, 'true'); }
    else alert('Invalid PIN. Hint: Founding year.');
  };

  /* ── PROJECT CRUD ─────────────────── */
  const saveProjects = (list) => {
    setProjects(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title) return;
    setSaving(true);
    await new Promise(r => setTimeout(r, 400));
    const updated = editId
      ? projects.map(p => p.id === editId ? { ...form, id: editId } : p)
      : [...projects, { ...form, id: Date.now().toString() }];
    saveProjects(updated);
    setForm({ ...EMPTY_PROJECT });
    setEditId(null);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleEdit = (p) => {
    setForm({ ...p });
    setEditId(p.id);
    setTab('cms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (confirm('Delete this project?')) saveProjects(projects.filter(p => p.id !== id));
  };

  const handleCancel = () => { setForm({ ...EMPTY_PROJECT }); setEditId(null); };

  /* ── IMAGE HANDLING ───────────────── */
  const addImages = async (files) => {
    const arr = await Promise.all(Array.from(files).slice(0, 10).map(readFile));
    setForm(f => ({ ...f, images: [...(f.images || []), ...arr].slice(0, 10) }));
  };

  const removeImage = (idx) => setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));

  const moveImage = (idx, dir) => {
    const imgs = [...form.images];
    const target = idx + dir;
    if (target < 0 || target >= imgs.length) return;
    [imgs[idx], imgs[target]] = [imgs[target], imgs[idx]];
    setForm(f => ({ ...f, images: imgs }));
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length) addImages(files);
  };

  const exportLeads = () => {
    const csv = ['Date,Name,Email,Phone,Type,Source',
      ...leads.map(l => `${new Date(l.date).toLocaleDateString()},${l.name},${l.email},${l.phone || ''},${l.projectType || ''},${l.source}`)
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'sjm_leads.csv'; a.click();
  };

  /* ── LOGIN SCREEN ─────────────────── */
  if (!auth) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--navy-dark)' }}>
      <div style={{ width: '100%', maxWidth: '400px', margin: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--gold), var(--gold-deep))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--navy-dark)', fontSize: '1.3rem', margin: '0 auto 16px' }}>SJM</div>
          <h1 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '6px' }}>Admin Portal</h1>
          <p style={{ color: 'var(--text-soft)', fontSize: '0.85rem' }}>Enter your admin PIN to continue</p>
        </div>
        <div style={{ background: 'var(--navy-card)', border: '1px solid var(--border-glass)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
          <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold), var(--gold-deep))' }} />
          <form onSubmit={handleLogin} style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="password" placeholder="Enter PIN" value={pin} onChange={e => setPin(e.target.value)}
              className="form-input" style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.4em' }} />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>Login <ArrowRight size={16} /></button>
          </form>
        </div>
      </div>
    </div>
  );

  /* ── DASHBOARD ────────────────────── */
  return (
    <div style={{ background: '#020B18', minHeight: '100vh', color: '#f8fafc', marginTop: '4rem' }}>

      {/* Admin Header */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div className="container" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', color: 'var(--navy-dark)' }}>SJM</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--gold)', fontSize: '1rem' }}>Dashboard</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '4px' }}>
              {['leads', 'cms'].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{
                  padding: '8px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  background: tab === t ? 'rgba(255,180,0,0.15)' : 'transparent',
                  color: tab === t ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem',
                  textTransform: 'capitalize', transition: 'all 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t === 'leads' ? <Clipboard size={14} /> : <Construction size={14} />}
                    {t === 'leads' ? 'Lead Tracker' : 'Project CMS'}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ padding: '4px 12px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '999px', color: '#34d399', fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>✓ Live</span>
            <button onClick={() => { sessionStorage.removeItem(AUTH_KEY); setAuth(false); }} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(239,68,68,0.08)', color: '#ef4444', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container" style={{ padding: '32px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Leads', val: leads.length, color: 'var(--gold)', icon: <Clipboard size={16} className="lucide-icon" /> },
            { label: 'CMS Projects', val: projects.length, color: '#60a5fa', icon: <Construction size={16} className="lucide-icon" /> },
            { label: 'This Month', val: leads.filter(l => new Date(l.date).getMonth() === new Date().getMonth()).length, color: '#34d399', icon: <Calendar size={16} className="lucide-icon" /> },
            { label: 'WhatsApp / Web', val: leads.filter(l => l.source === 'exit-popup').length, color: '#a78bfa', icon: <MessageSquare size={16} className="lucide-icon" /> },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</span>
                <span style={{ fontSize: '1rem' }}>{s.icon}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', color: s.color, lineHeight: 1 }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* ─── LEADS TAB ─────────────────── */}
        {tab === 'leads' && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>Enquiries ({leads.length})</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={exportLeads} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(255,180,0,0.2)', background: 'rgba(255,180,0,0.06)', color: 'var(--gold)', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  <Download size={14} /> Export CSV
                </button>
                <button onClick={() => { if (confirm('Clear all leads?')) { localStorage.removeItem(LEADS_KEY); setLeads([]); } }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.06)', color: '#ef4444', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  <Trash size={14} /> Clear All
                </button>
              </div>
            </div>

            {leads.length === 0 ? (
              <div style={{ padding: '60px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.25)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: 'rgba(255,255,255,0.2)' }}><Inbox size={48} strokeWidth={1} /></div>
                <p>No leads yet. Submit the contact form to test.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {['Date', 'Name', 'Contact', 'District', 'Project Type', 'Source'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid rgba(255,255,255,0.05)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...leads].reverse().map((l, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}
                      >
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>{new Date(l.date).toLocaleDateString('en-IN')}</td>
                        <td style={{ padding: '14px 16px', fontWeight: 600, color: '#fff' }}>{l.name || '—'}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ color: '#fff' }}>{l.email || '—'}</div>
                          {l.phone && <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>{l.phone}</div>}
                        </td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.5)' }}>{l.district || '—'}</td>
                        <td style={{ padding: '14px 16px' }}><span style={{ padding: '4px 10px', background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.15)', borderRadius: '999px', color: 'var(--gold)', fontSize: '0.72rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{l.projectType || '—'}</span></td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>{l.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ─── PROJECT CMS TAB ───────────── */}
        {tab === 'cms' && (
          <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '24px', paddingBottom: '60px' }}>

            {/* ── FORM ── */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${editId ? 'rgba(255,180,0,0.25)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '16px', overflow: 'hidden', alignSelf: 'start', position: 'sticky', top: '76px' }}>
              <div style={{ height: '4px', background: editId ? 'linear-gradient(90deg, var(--gold), var(--gold-deep))' : 'rgba(255,255,255,0.06)' }} />
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: editId ? 'var(--gold)' : '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {editId ? <><Edit2 size={16} /> Edit Project</> : <><Plus size={16} /> Add New Project</>}
                  </h3>
                  {editId && <button onClick={handleCancel} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}>Cancel</button>}
                </div>

                <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Title */}
                  <div>
                    <label style={labelStyle}>Project Title *</label>
                    <input type="text" required placeholder="e.g. Lakshmi Residency Phase 2" className="form-input"
                      value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                  </div>

                  {/* Location */}
                  <div>
                    <label style={labelStyle}>Location</label>
                    <input type="text" placeholder="e.g. Kundrathur, Chennai" className="form-input"
                      value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
                  </div>

                  {/* Category */}
                  <div>
                    <label style={labelStyle}>Category</label>
                    <select className="form-select" style={{ color: form.type ? '#fff' : 'rgba(255,255,255,0.4)' }}
                      value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
                      <option value="">Select category…</option>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea placeholder="Brief project description, scale, client type…" rows={3}
                      className="form-textarea" style={{ resize: 'none' }}
                      value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label style={labelStyle}>Project Images (up to 10)</label>

                    {/* Drop Zone */}
                    <div
                      onClick={() => fileRef.current?.click()}
                      onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={onDrop}
                      style={{
                        border: `2px dashed ${isDragging ? 'var(--gold)' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: '12px', padding: '28px 16px', textAlign: 'center',
                        background: isDragging ? 'rgba(255,180,0,0.05)' : 'rgba(255,255,255,0.02)',
                        cursor: 'pointer', transition: 'all 0.2s ease', marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: isDragging ? 'var(--gold)' : 'rgba(255,255,255,0.4)' }}><UploadCloud size={32} /></div>
                      <div style={{ color: isDragging ? 'var(--gold)' : 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                        {isDragging ? 'Drop images here!' : 'Drag & drop images or click to browse'}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', marginTop: '6px' }}>
                        JPG, PNG, WEBP — Max 10 images per project
                      </div>
                      <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }}
                        onChange={e => addImages(e.target.files)} />
                    </div>

                    {/* Image Thumbnails */}
                    {form.images?.length > 0 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        {form.images.map((src, idx) => (
                          <div key={idx} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/3', background: 'rgba(255,255,255,0.04)' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt={`Image ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {/* Overlay controls */}
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', opacity: 0, transition: 'opacity 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                            >
                              <div style={{ display: 'flex', gap: '4px' }}>
                                <button type="button" onClick={() => moveImage(idx, -1)} disabled={idx === 0} style={imgBtnStyle} title="Move left">←</button>
                                <button type="button" onClick={() => moveImage(idx, 1)} disabled={idx === form.images.length - 1} style={imgBtnStyle} title="Move right">→</button>
                              </div>
                              <button type="button" onClick={() => removeImage(idx)} style={{ ...imgBtnStyle, background: 'rgba(239,68,68,0.8)', borderColor: 'rgba(239,68,68,0.5)' }} title="Delete">✕</button>
                              {idx === 0 && <span style={{ fontSize: '0.6rem', color: '#fff', background: 'var(--gold)', borderRadius: '4px', padding: '2px 6px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>COVER</span>}
                            </div>
                            {/* Image number badge */}
                            <div style={{ position: 'absolute', top: '4px', left: '6px', fontSize: '0.6rem', background: 'rgba(0,0,0,0.6)', color: '#fff', borderRadius: '4px', padding: '2px 6px' }}>{idx + 1}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button type="submit" disabled={saving} className="btn btn-primary" style={{ marginTop: '4px', opacity: saving ? 0.7 : 1, position: 'relative' }}>
                    {saving ? 'Saving…' : saved ? '✓ Saved!' : editId ? 'Update Project' : 'Save Project'}
                  </button>
                </form>
              </div>
            </div>

            {/* ── PROJECT LIST ── */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'rgba(255,255,255,0.55)' }}>
                  {projects.length} Project{projects.length !== 1 ? 's' : ''} in CMS
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>Hover a card to manage it</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {projects.map(p => (
                  <div key={p.id} style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px', overflow: 'hidden', position: 'relative',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,180,0,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    {/* Image strip */}
                    <div style={{ height: '160px', background: 'rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>
                      {p.images?.length > 0 ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.65)', borderRadius: '6px', padding: '3px 8px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                            {p.images.length} photo{p.images.length > 1 ? 's' : ''}
                          </div>
                        </>
                      ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px', color: 'rgba(255,255,255,0.15)' }}>
                          <span style={{ color: 'rgba(255,255,255,0.2)' }}><ImageIcon size={32} strokeWidth={1.5} /></span>
                          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-heading)' }}>No images</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <h4 style={{ color: '#fff', fontSize: '0.92rem', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.3, flex: 1 }}>{p.title}</h4>
                        <div style={{ display: 'flex', gap: '6px', flexShrink: 0, marginLeft: '8px' }}>
                          <button onClick={() => handleEdit(p)} title="Edit" style={{ ...iconBtnStyle, color: 'var(--gold)', borderColor: 'rgba(255,180,0,0.2)' }}><Edit2 size={13} /></button>
                          <button onClick={() => handleDelete(p.id)} title="Delete" style={{ ...iconBtnStyle, color: '#ef4444', borderColor: 'rgba(239,68,68,0.2)' }}><Trash2 size={13} /></button>
                        </div>
                      </div>
                      {p.type && <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '999px', background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.15)', color: 'var(--gold)', fontSize: '0.65rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{p.type}</span>}
                      {p.location && <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} style={{ flexShrink: 0 }} /> {p.location}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── MICRO STYLES ───────────────────── */
const labelStyle = {
  display: 'block', fontSize: '0.7rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
  color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px',
};

const imgBtnStyle = {
  width: '28px', height: '28px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.15)', color: '#fff', cursor: 'pointer', fontSize: '0.75rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const iconBtnStyle = {
  width: '30px', height: '30px', borderRadius: '8px', border: '1px solid',
  background: 'rgba(255,255,255,0.03)', cursor: 'pointer', fontSize: '0.75rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};
