import { Syne, Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import StructuredData from '@/components/StructuredData';

const syne = Syne({ subsets: ['latin'], variable: '--font-display', weight: ['400','600','700','800'], display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading', weight: ['400','500','600','700','800','900'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['300','400','500','600'], display: 'swap' });

export const metadata = {
  title: {
    default: 'SJM Infrastructure | Building Contractor in Kundrathur Chennai | CMDA DTCP Approvals',
    template: '%s | SJM Infrastructure Kundrathur',
  },
  description: 'SJM Infrastructure &mdash; #1 building contractor in Kundrathur, Chennai. Expert in CMDA & DTCP approvals, building plan, layout, structural design, 3D elevation, estimation, valuation & housing loan. Highways, PWD, GCC contractor. Call 70101 96927.',
  keywords: [
    'building contractor Kundrathur',
    'builder Kundrathur Chennai',
    'CMDA approval Kundrathur',
    'DTCP approval Chennai',
    'building plan Kundrathur',
    'house construction Kundrathur',
    'civil contractor Kundrathur',
    'building approval Chennai 600069',
    'structural design Kundrathur',
    '3D elevation Chennai',
    'housing loan Kundrathur',
    'layout approval Kundrathur',
    'SJM Infrastructure',
    'Sri Lakshmi Foundations',
    'Jeevanantham contractor Chennai',
    'PWD contractor Chennai',
    'GCC contractor Chennai',
    'highway contractor Tamil Nadu',
    'valuation report Chennai',
    'metro grand city Kundrathur builder',
    'building contractor Chennai south',
    'CMDA plan approval Chennai',
    'construction company Kundrathur',
    'building permit Kundrathur',
  ],
  authors: [{ name: 'SJM Infrastructure', url: 'https://sjminfrastructure.com' }],
  creator: 'SJM Infrastructure',
  publisher: 'SJM Infrastructure',
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sjminfrastructure.com',
    title: 'SJM Infrastructure | #1 Building Contractor in Kundrathur, Chennai',
    description: 'Expert building contractor in Kundrathur, Chennai. CMDA/DTCP approvals, building plan, structural design, 3D elevation, full construction & housing loan. 25+ years of trust. Call 70101 96927.',
    siteName: 'SJM Infrastructure',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SJM Infrastructure | Building Contractor Kundrathur Chennai',
    description: 'CMDA/DTCP approvals, building plan, structural design, 3D elevation & full construction in Kundrathur, Chennai. Call 70101 96927.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'add-your-google-verification-code-here',
  },
  alternates: {
    canonical: 'https://sjminfrastructure.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${montserrat.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Kundrathur, Chennai, Tamil Nadu" />
        <meta name="geo.position" content="12.9698;80.0892" />
        <meta name="ICBM" content="12.9698, 80.0892" />
        <link rel="canonical" href="https://sjminfrastructure.com" />
      </head>
      <body>
        <StructuredData />
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

