'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pin, setPin] = useState('');
  
  const [leads, setLeads] = useState([]);
  const [tab, setTab] = useState('leads'); // leads or cms
  
  const [projectsLocal, setProjectsLocal] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', location: '', type: '' });

  useEffect(() => {
    // Only access localStorage on client side
    const storedAuth = sessionStorage.getItem('sjm_admin_auth');
    if (storedAuth === 'true') setAuth(true);

    const storedLeads = JSON.parse(localStorage.getItem('sjm_leads') || '[]');
    setLeads(storedLeads);
    
    const dummyProjects = [
       { id: '1', title: 'Highway Widening', location: 'Villupuram', type: 'Highway' },
       { id: '2', title: 'Villa Construction', location: 'Madurai', type: 'Residential' }
    ];
    setProjectsLocal(JSON.parse(localStorage.getItem('sjm_cms_projects')) || dummyProjects);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === '1993') { // 1993 founding year as dummy pin
      setAuth(true);
      sessionStorage.setItem('sjm_admin_auth', 'true');
    } else {
      alert('Invalid PIN');
    }
  };

  const addProject = (e) => {
    e.preventDefault();
    if(!newProject.title) return;
    const added = [...projectsLocal, { ...newProject, id: Date.now().toString() }];
    setProjectsLocal(added);
    localStorage.setItem('sjm_cms_projects', JSON.stringify(added));
    setNewProject({ title: '', location: '', type: '' });
  };

  const deleteProject = (id) => {
    const remaining = projectsLocal.filter(p => p.id !== id);
    setProjectsLocal(remaining);
    localStorage.setItem('sjm_cms_projects', JSON.stringify(remaining));
  };

  const clearLeads = () => {
    if(confirm('Clear all leads?')) {
      localStorage.removeItem('sjm_leads');
      setLeads([]);
    }
  }

  if (!auth) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--navy-dark)' }}>
        <div className="glass-card" style={{ padding: '40px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '24px', fontSize: '1.8rem' }}>Admin Access</h1>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter PIN (1993)" 
              value={pin} onChange={e => setPin(e.target.value)}
              className="form-input"
              style={{ textAlign: 'center', marginBottom: '16px', letterSpacing: '0.2em' }}
            />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login Status</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#020617', minHeight: '100vh', paddingTop: '80px', color: '#f8fafc' }}>
      
      {/* Admin Nav */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', background: 'rgba(255,255,255,0.02)' }}>
         <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)' }}>SJM CMD</span>
               <div className="tab-bar">
                 <button className={`tab-btn ${tab === 'leads' ? 'active' : ''}`} style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => setTab('leads')}>Lead Tracker</button>
                 <button className={`tab-btn ${tab === 'cms' ? 'active' : ''}`} style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => setTab('cms')}>Project CMS</button>
               </div>
            </div>
            <div>
               <span className="badge badge-green">Live Server</span>
            </div>
         </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
         
         {/* DASHBOARD WIDGETS */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: 'var(--radius-lg)' }}>
               <div style={{ color: 'var(--grey-500)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Total Leads</div>
               <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>{leads.length}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: 'var(--radius-lg)' }}>
               <div style={{ color: 'var(--grey-500)', fontSize: '0.85rem', textTransform: 'uppercase' }}>CMS Projects</div>
               <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{projectsLocal.length}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: 'var(--radius-lg)' }}>
               <div style={{ color: 'var(--grey-500)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Unique Visitors (Local)</div>
               <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>842</div>
            </div>
         </div>

         {/* LEADS TAB */}
         {tab === 'leads' && (
           <div className="glass-card" style={{ padding: '30px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.5rem' }}>Recent Inquiries</h2>
                <button onClick={clearLeads} className="btn btn-sm" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.4)' }}>Clear All</button>
             </div>
             
             {leads.length === 0 ? (
               <div style={{ padding: '40px', textAlign: 'center', color: 'var(--grey-500)' }}>No leads captured yet. Try submitting the contact form.</div>
             ) : (
               <div style={{ overflowX: 'auto' }}>
                 <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                   <thead>
                     <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                       <th style={{ padding: '12px' }}>Date</th>
                       <th style={{ padding: '12px' }}>Name</th>
                       <th style={{ padding: '12px' }}>Contact</th>
                       <th style={{ padding: '12px' }}>Type</th>
                       <th style={{ padding: '12px' }}>Source</th>
                     </tr>
                   </thead>
                   <tbody>
                     {leads.map((l, i) => (
                       <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                         <td style={{ padding: '12px', fontSize: '0.85rem', color: 'var(--grey-400)' }}>{new Date(l.date).toLocaleDateString()}</td>
                         <td style={{ padding: '12px', fontWeight: 600 }}>{l.name}</td>
                         <td style={{ padding: '12px', fontSize: '0.9rem' }}>{l.email}<br/><span style={{ color: 'var(--grey-400)' }}>{l.phone}</span></td>
                         <td style={{ padding: '12px' }}><span className="badge badge-navy">{l.projectType}</span></td>
                         <td style={{ padding: '12px', fontSize: '0.8rem', color: 'var(--gold)' }}>{l.source}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             )}
           </div>
         )}

         {/* CMS TAB */}
         {tab === 'cms' && (
           <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '30px' }}>
             
             <div className="glass-card" style={{ padding: '30px', alignSelf: 'start' }}>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Add Project</h3>
               <form onSubmit={addProject} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <input type="text" placeholder="Project Title" required className="form-input" value={newProject.title} onChange={e=>setNewProject({...newProject, title: e.target.value})} />
                 <input type="text" placeholder="Location" required className="form-input" value={newProject.location} onChange={e=>setNewProject({...newProject, location: e.target.value})} />
                 <input type="text" placeholder="Category (e.g., Highway)" required className="form-input" value={newProject.type} onChange={e=>setNewProject({...newProject, type: e.target.value})} />
                 <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>Save Project</button>
               </form>
             </div>

             <div className="glass-card" style={{ padding: '30px' }}>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Manage Projects</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {projectsLocal.map(p => (
                   <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
                      <div>
                        <div style={{ fontWeight: 600 }}>{p.title}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--grey-400)' }}>{p.location} • {p.type}</div>
                      </div>
                      <button onClick={() => deleteProject(p.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px' }}>🗑️</button>
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
