'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectModal from '@/components/ProjectModal';
import { MapPin, Ruler } from 'lucide-react';

const govProjects = [
  {
    id: 'gp1', title: 'SH-36 Highway Widening', location: 'Villupuram District',
    year: '2023', scale: '14.5 km, 4-lane', value: 'Rs.18.5 Cr', type: 'Highway',
    status: 'Completed', img: '/project_road.png', client: 'Tamil Nadu PWD &mdash; Highways Division',
    desc: 'Full 4-lane widening of State Highway 36 from Villupuram to Panruti including new culverts, storm water drains, road markings, guide posts, and crash barriers over 14.5 km.',
    images: ['/project_road.png', '/hero_highway.png'],
  },
  {
    id: 'gp2', title: 'GCC Storm Water Drain Phase 3', location: 'Adyar Zone, Chennai',
    year: '2022', scale: '8.2 km tunnel drain', value: 'Rs.11.2 Cr', type: 'GCC',
    status: 'Completed', img: '/project_road.png', client: 'Greater Chennai Corporation',
    desc: 'Underground storm water drainage works in Zone 13 Adyar covering 8.2 km, 3000mm diameter RCC pipes with manholes and junction chambers. Completed 12 days ahead of schedule.',
    images: ['/project_road.png'],
  },
  {
    id: 'gp3', title: 'Dharmapuri PWD District Roads', location: 'Dharmapuri District',
    year: '2022', scale: '22 km, district roads', value: 'Rs.8.9 Cr', type: 'PWD',
    status: 'Completed', img: '/project_road.png', client: 'Tamil Nadu PWD &mdash; Buildings',
    desc: 'Improvement of 6 district roads including formation, bituminous surface, and culvert construction under NABARD rural infrastructure funding.',
    images: ['/project_road.png', '/hero_highway.png'],
  },
  {
    id: 'gp4', title: 'TWAD Water Supply Scheme', location: 'Tiruvannamalai District',
    year: '2021', scale: '12 villages, OHT + pipeline', value: 'Rs.5.4 Cr', type: 'Municipality',
    status: 'Completed', img: '/project_road.png', client: 'TWAD Board Tamil Nadu',
    desc: 'Drinking water supply scheme for 12 rural habitations &mdash; 3 OHTs, 45 km pipeline, 2 pump houses, and complete distribution network in Tiruvannamalai district.',
    images: ['/project_road.png'],
  },
  {
    id: 'gp5', title: 'Salem City Corporation Roads', location: 'Salem Corporation',
    year: '2023', scale: '15 internal CC roads', value: 'Rs.6.8 Cr', type: 'GCC',
    status: 'Completed', img: '/project_road.png', client: 'Salem City Municipal Corporation',
    desc: 'CC road construction in 15 wards of Salem City Corporation, including drain widening, footpath tiling, and street lighting post foundations.',
    images: ['/project_road.png'],
  },
  {
    id: 'gp6', title: 'NH-44 Service Road Improvement', location: 'Krishnagiri District',
    year: '2024', scale: '6.3 km service road', value: 'Rs.9.1 Cr', type: 'Highway',
    status: 'Ongoing', img: '/hero_highway.png', client: 'NHAI &mdash; Krishnagiri PIU',
    desc: 'Service road improvement along NH-44 in Krishnagiri with full bituminous wearing course, guard rails, drain works, and road furniture. Currently 62% complete.',
    images: ['/hero_highway.png', '/project_road.png'],
  },
];

const privateProjects = [
  {
    id: 'pp1', title: 'Lakshmi Residency Phase 2', location: 'Kundrathur, Chennai',
    year: '2024', scale: '12 units, G+3 RCC', value: 'Rs.3.8 Cr', type: 'Residential',
    status: 'Completed', img: '/project_building.png', client: 'Private Developer',
    desc: 'Complete residential apartment project &mdash; CMDA approval, structural design, construction, and finishing. RCC framed G+3 with 12 units of 2BHK & 3BHK. Delivered 3 weeks early.',
    images: ['/project_building.png', '/hero_building.png'],
  },
  {
    id: 'pp2', title: 'Commercial Complex &mdash; Koyambedu', location: 'Koyambedu, Chennai',
    year: '2023', scale: 'G+4 commercial, basement', value: 'Rs.4.5 Cr', type: 'Commercial',
    status: 'Completed', img: '/project_building.png', client: 'Private Client',
    desc: 'CMDA-approved G+4 commercial complex with basement parking. Full coordination for structural design, 3D elevation, and CMDA plan approval from submission to occupancy certificate.',
    images: ['/project_building.png'],
  },
  {
    id: 'pp3', title: 'Premium Villa &mdash; Madurai', location: 'Madurai',
    year: '2024', scale: '3600 sqft duplex villa', value: 'Rs.85L', type: 'Residential',
    status: 'Completed', img: '/project_building.png', client: 'NRI Client',
    desc: 'DTCP approval, vastu-compliant structural design, 3D elevation, and complete construction of premium duplex villa with Italian tile flooring, modern kitchen, and landscaping.',
    images: ['/project_building.png', '/hero_building.png'],
  },
  {
    id: 'pp4', title: 'Pharma Warehouse &mdash; Sriperumbudur', location: 'Sriperumbudur',
    year: '2022', scale: '18,000 sqft industrial', value: 'Rs.2.1 Cr', type: 'Industrial',
    status: 'Completed', img: '/project_building.png', client: 'Pharma Manufacturing Co.',
    desc: 'Industrial warehouse with DTCP approval, pre-engineered steel structure, temperature-controlled storage rooms, fire safety systems, and full civil finishing works.',
    images: ['/project_building.png'],
  },
  {
    id: 'pp5', title: 'Apartment Complex &mdash; Tambaram', location: 'Tambaram, Chennai',
    year: '2023', scale: '24 units, Stilt+5', value: 'Rs.6.2 Cr', type: 'Residential',
    status: 'Completed', img: '/project_building.png', client: 'Private Builder',
    desc: 'Complete development &mdash; CMDA plan approval, structural engineering, and construction supervision for a G+5 stilt apartment with 24 units and 28 car parking slots.',
    images: ['/project_building.png', '/hero_building.png'],
  },
  {
    id: 'pp6', title: 'Eco-Resort Layout &mdash; Mahabalipuram', location: 'Mahabalipuram',
    year: '2024', scale: '2.4 acre, 8 cottages', value: 'Rs.1.8 Cr', type: 'Commercial',
    status: 'Ongoing', img: '/hero_building.png', client: 'Private Hospitality Firm',
    desc: 'Layout planning, DTCP approval, and structural design for 8 eco-resort cottages with pool zone and resort amenities in coastal Mahabalipuram. Construction phase underway.',
    images: ['/hero_building.png', '/project_building.png'],
  },
];

const GOVT_FILTERS = ['All', 'Highway', 'GCC', 'PWD', 'Municipality'];
const PRIV_FILTERS = ['All', 'Residential', 'Commercial', 'Industrial'];

export default function ProjectsPage() {
  const [tab, setTab] = useState('govt');
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const projects = tab === 'govt' ? govProjects : privateProjects;
  const filters = tab === 'govt' ? GOVT_FILTERS : PRIV_FILTERS;
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  const handleTabChange = (newTab) => { setTab(newTab); setFilter('All'); };

  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
        paddingTop: '160px', paddingBottom: '100px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 80%, rgba(255,180,0,0.06) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '20px' }}>Portfolio</div>
          <h1 style={{ color: 'var(--white)', marginBottom: '20px' }}>
            200+ Projects. <span className="text-gradient">Zero Compromises.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Browse our dual portfolio &mdash; government infrastructure and private building projects.
            Click any card to open the full project slide-show.
          </p>
          <div className="tab-bar">
            <button className={`tab-btn${tab === 'govt' ? ' active' : ''}`} onClick={() => handleTabChange('govt')} id="tab-govt-projects">
              Government Projects
            </button>
            <button className={`tab-btn${tab === 'private' ? ' active' : ''}`} onClick={() => handleTabChange('private')} id="tab-private-projects">
              Private Projects
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad" style={{ background: 'var(--navy-dark)' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '8px 20px', borderRadius: 'var(--r-full)', border: '1px solid',
                borderColor: filter === f ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                background: filter === f ? 'rgba(255,180,0,0.1)' : 'transparent',
                color: filter === f ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem',
                letterSpacing: '0.04em', cursor: 'pointer', transition: 'all 0.2s ease',
              }}>
                {f}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {filtered.map((proj, i) => (
              <ScrollReveal key={proj.id} delay={i * 70}>
                <div
                  onClick={() => setModal(proj)}
                  style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', height: '360px', cursor: 'pointer' }}
                >
                  <Image src={proj.img} alt={proj.title} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Base gradient */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,14,26,0.96) 0%, rgba(5,14,26,0.2) 50%, transparent 100%)' }} />
                  {/* Hover overlay */}
                  <div className="proj-hover" style={{
                    position: 'absolute', inset: 0, background: 'rgba(5,14,26,0.82)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    gap: '12px', opacity: 0, transition: 'opacity 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                  >
                    <div style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Ruler size={14} style={{ flexShrink: 0 }} /> {proj.scale}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={13} style={{ flexShrink: 0 }} /> {proj.location}
                    </div>
                    <div style={{
                      marginTop: '8px', padding: '10px 20px', borderRadius: 'var(--r-xs)',
                      background: 'var(--gold)', color: 'var(--navy-dark)',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      Open Slide-Show
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
                    </div>
                  </div>
                  {/* Bottom info */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>{proj.type}</span>
                      <span style={{
                        padding: '4px 10px', borderRadius: '999px', fontSize: '0.65rem',
                        fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.06em',
                        background: proj.status === 'Ongoing' ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.1)',
                        color: proj.status === 'Ongoing' ? '#34d399' : 'rgba(255,255,255,0.6)',
                        border: `1px solid ${proj.status === 'Ongoing' ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      }}>{proj.status}</span>
                    </div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1rem', lineHeight: 1.3, marginBottom: '4px' }}>{proj.title}</h4>
                    <p style={{ color: 'var(--text-soft)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                      <MapPin size={12} style={{ flexShrink: 0 }} /> {proj.location} &middot; {proj.year} &middot; <span style={{ color: 'var(--gold)' }}>{proj.value}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              No projects found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* PROJECT MODAL WITH SLIDE-SHOW */}
      <ProjectModal modal={modal} setModal={setModal} />
    </>
  );
}

