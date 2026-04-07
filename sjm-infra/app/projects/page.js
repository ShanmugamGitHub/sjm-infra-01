'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectModal from '@/components/ProjectModal';

const govProjects = [
  {
    id: 'gp1',
    title: 'SH-36 Highway Widening',
    location: 'Villupuram District',
    year: '2023',
    scale: '14.5 km, 4-lane',
    value: '₹18.5 Cr',
    type: 'Highway',
    status: 'Completed',
    img: '/project_road.png',
    desc: 'Full 4-lane widening of State Highway 36 from Villupuram to Panruti. Including new culverts, storm water drains, road markings, and crash barriers.',
    client: 'Tamil Nadu PWD — Highways Division',
    district: 'Villupuram',
  },
  {
    id: 'gp2',
    title: 'GCC Storm Water Drain Phase 3',
    location: 'Adyar, Chennai',
    year: '2022',
    scale: '8.2 km tunnel drain',
    value: '₹11.2 Cr',
    type: 'GCC',
    status: 'Completed',
    img: '/project_road.png',
    desc: 'Underground storm water drainage works in Zone 13 Adyar covering 8.2 km, 3000mm diameter RCC pipes with manholes and junction chambers.',
    client: 'Greater Chennai Corporation',
    district: 'Chennai',
  },
  {
    id: 'gp3',
    title: 'Dharmapuri Dist. PWD Roads',
    location: 'Dharmapuri District',
    year: '2022',
    scale: '22 km, district roads',
    value: '₹8.9 Cr',
    type: 'PWD',
    status: 'Completed',
    img: '/project_road.png',
    desc: 'Improvement of 6 district roads including formation, bituminous surface, and culvert construction under NABARD funding.',
    client: 'Tamil Nadu PWD — Buildings',
    district: 'Dharmapuri',
  },
  {
    id: 'gp4',
    title: 'TWAD Water Supply – Tiruvannamalai',
    location: 'Tiruvannamalai District',
    year: '2021',
    scale: '12 villages, OHT + pipeline',
    value: '₹5.4 Cr',
    type: 'Municipality',
    status: 'Completed',
    img: '/project_road.png',
    desc: 'Drinking water supply scheme for 12 rural habitations. 3 OHTs, 45 km pipeline, 2 pump houses, and distribution network.',
    client: 'TWAD Board Tamil Nadu',
    district: 'Tiruvannamalai',
  },
  {
    id: 'gp5',
    title: 'Salem City Corporation Roads',
    location: 'Salem Corporation',
    year: '2023',
    scale: '15 internal roads, CC',
    value: '₹6.8 Cr',
    type: 'GCC',
    status: 'Completed',
    img: '/project_road.png',
    desc: 'CC road construction in 15 wards of Salem City Corporation, including drain widening and footpath tiling.',
    client: 'Salem City Municipal Corporation',
    district: 'Salem',
  },
  {
    id: 'gp6',
    title: 'NH-44 Service Road Improvement',
    location: 'Krishnagiri District',
    year: '2024',
    scale: '6.3 km service road',
    value: '₹9.1 Cr',
    type: 'Highway',
    status: 'Ongoing',
    img: '/project_road.png',
    desc: 'Service road improvement along NH-44 in Krishnagiri with full bituminous wearing course, guard rails, and drain works.',
    client: 'NHAI — Krishnagiri PIU',
    district: 'Krishnagiri',
  },
];

const privateProjects = [
  {
    id: 'pp1',
    title: 'Lakshmi Residency — Phase 2',
    location: 'Anna Nagar, Chennai',
    year: '2024',
    scale: '12 units, G+3',
    value: '₹3.8 Cr',
    type: 'Residential',
    status: 'Completed',
    img: '/project_building.png',
    desc: 'Complete residential apartment project — CMDA approval, structural design, construction, and finishing. RCC framed G+3 with 12 units of 2BHK & 3BHK.',
    client: 'Private Developer',
    district: 'Chennai',
  },
  {
    id: 'pp2',
    title: 'Commercial Complex — Koyambedu',
    location: 'Koyambedu, Chennai',
    year: '2023',
    scale: 'G+4 commercial',
    value: '₹4.5 Cr',
    type: 'Commercial',
    status: 'Completed',
    img: '/project_building.png',
    desc: 'CMDA-approved G+4 commercial complex with basement parking. Structural design, 3D elevation, and full CMDA plan approval handled.',
    client: 'Private Client',
    district: 'Chennai',
  },
  {
    id: 'pp3',
    title: 'Individual Villa Design — Madurai',
    location: 'Madurai',
    year: '2024',
    scale: '3600 sqft duplex villa',
    value: '₹85L',
    type: 'Residential',
    status: 'Completed',
    img: '/project_building.png',
    desc: 'DTCP approval, structural design, 3D elevation, and construction of premium duplex villa with vastu-compliant plan.',
    client: 'NRI Client',
    district: 'Madurai',
  },
  {
    id: 'pp4',
    title: 'Pharma Godown — Sriperumbudur',
    location: 'Sriperumbudur, Chennai',
    year: '2022',
    scale: '18,000 sqft industrial',
    value: '₹2.1 Cr',
    type: 'Industrial',
    status: 'Completed',
    img: '/project_building.png',
    desc: 'Industrial warehouse with DTCP approval, pre-engineered steel structure, and complete finishing. CMDA exemption area — DTCP handled.',
    client: 'Pharma Company',
    district: 'Kancheepuram',
  },
  {
    id: 'pp5',
    title: 'Apartment Complex — Tambaram',
    location: 'Tambaram, Chennai',
    year: '2023',
    scale: '24 units, G+5 stilt',
    value: '₹6.2 Cr',
    type: 'Residential',
    status: 'Completed',
    img: '/project_building.png',
    desc: 'G+5 stilt+5 apartment with full CMDA plan approval, structural engineering, and construction supervision.',
    client: 'Private Builder',
    district: 'Chengalpattu',
  },
  {
    id: 'pp6',
    title: 'Resort Layout — Mahabalipuram',
    location: 'Mahabalipuram',
    year: '2024',
    scale: '2.4 acre eco-resort',
    value: '₹1.8 Cr',
    type: 'Commercial',
    status: 'Ongoing',
    img: '/project_building.png',
    desc: 'Layout planning, DTCP approval, structural design for 8 eco-resort cottages. Ongoing construction supervision.',
    client: 'Private Hospitality Firm',
    district: 'Chengalpattu',
  },
];

const allTypes = ['All', 'Highway', 'GCC', 'PWD', 'Municipality', 'Residential', 'Commercial', 'Industrial'];

export default function ProjectsPage() {
  const [tab, setTab] = useState('govt');
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const projects = tab === 'govt' ? govProjects : privateProjects;
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a6c 100%)',
        paddingTop: '160px', paddingBottom: '100px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 50% 60%, rgba(255,180,0,0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ margin: '0 auto 20px' }}>Project Portfolio</div>
          <h1 style={{ color: '#fff', marginBottom: '20px' }}>
            200+ Projects,{' '}
            <span style={{ color: 'var(--gold)' }}>Zero Compromises</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Browse our dual portfolio — government infrastructure contracts and private building projects —
            filtered by type, district, and year.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container">
          {/* Tab Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div className="tab-bar">
              <button
                className={`tab-btn ${tab === 'govt' ? 'active' : ''}`}
                onClick={() => { setTab('govt'); setFilter('All'); }}
                id="tab-govt-projects"
              >
                🏛️ Government Projects
              </button>
              <button
                className={`tab-btn ${tab === 'private' ? 'active' : ''}`}
                onClick={() => { setTab('private'); setFilter('All'); }}
                id="tab-private-projects"
              >
                🏠 Private Projects
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            {allTypes.filter(t => {
              if (tab === 'govt') return ['All', 'Highway', 'GCC', 'PWD', 'Municipality'].includes(t);
              return ['All', 'Residential', 'Commercial', 'Industrial'].includes(t);
            }).map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="btn btn-sm"
                style={{
                  background: filter === t ? 'var(--navy)' : 'var(--grey-100)',
                  color: filter === t ? '#fff' : 'var(--grey-700)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {filtered.map((proj, i) => (
              <ScrollReveal key={proj.id} delay={i * 80}>
                <div
                  style={{
                    position: 'relative', borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden', height: '340px', cursor: 'pointer',
                  }}
                  onClick={() => setModal(proj)}
                >
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.3) 50%, transparent 100%)',
                  }} />
                  {/* Hover Overlay */}
                  <div className="proj-hover-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(10,25,47,0.85)',
                    opacity: 0, transition: 'opacity 0.3s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        📐 {proj.scale} • 📍 {proj.location}
                      </div>
                      <div className="btn btn-primary btn-sm">View Details →</div>
                    </div>
                  </div>
                  {/* Bottom Info */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '4px 10px' }}>{proj.type}</span>
                      <span className={`badge ${proj.status === 'Ongoing' ? 'badge-green' : 'badge-navy'}`}
                        style={{ fontSize: '0.68rem', padding: '4px 10px', background: proj.status === 'Ongoing' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.1)', color: proj.status === 'Ongoing' ? '#86efac' : 'rgba(255,255,255,0.7)', border: 'none' }}>
                        {proj.status}
                      </span>
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.3, marginBottom: '4px' }}>{proj.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>
                      📍 {proj.location} • {proj.year}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal modal={modal} setModal={setModal} />
    </>
  );
}
