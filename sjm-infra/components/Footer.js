import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0a192f', color: '#fff', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 2fr) 1fr 1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: '20px' }}>
              SJM <span style={{ color: 'var(--gold)' }}>Infra.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '24px', maxWidth: '300px' }}>
              Sri Lakshmi Foundations. A-Class registered civil contractors and premier building consultants in Chennai.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={socialIconStyle}>FB</a>
              <a href="#" style={socialIconStyle}>IG</a>
              <a href="#" style={socialIconStyle}>IN</a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={footerHeadingStyle}>Services</h4>
            <ul style={footerListStyle}>
              <li><Link href="/services#govt">Government Contracts</Link></li>
              <li><Link href="/services#consult">CMDA / DTCP Approvals</Link></li>
              <li><Link href="/services#consult">Structural Design</Link></li>
              <li><Link href="/services#consult">Building Construction</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={footerHeadingStyle}>Company</h4>
            <ul style={footerListStyle}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Portfolio</Link></li>
              <li><Link href="/reach">National Reach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={footerHeadingStyle}>Reach Us</h4>
            <ul style={{ ...footerListStyle, color: 'rgba(255,255,255,0.6)' }}>
              <li style={{ marginBottom: '12px' }}>📍 No. 12, Anna Nagar<br/>Chennai – 600040</li>
              <li style={{ marginBottom: '12px' }}>📞 +91 98765 43210</li>
              <li>✉️ info@sjminfrastructure.com</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '30px', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.4)'
        }}>
          <div>&copy; {new Date().getFullYear()} SJM Infrastructure (Sri Lakshmi Foundations). All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/admin">Admin Login</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerHeadingStyle = {
  color: '#fff',
  fontSize: '1.2rem',
  marginBottom: '24px',
  fontFamily: 'var(--font-heading)',
  fontWeight: 700
};

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  fontSize: '0.95rem'
};

const socialIconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--gold)',
  fontSize: '0.9rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'all 0.3s ease'
};
