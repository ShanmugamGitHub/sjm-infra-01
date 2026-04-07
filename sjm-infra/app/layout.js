import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
export const metadata = {
  title: {
    default: 'SJM Infrastructure | Premier Civil Contractor & Building Consultant Chennai',
    template: '%s | SJM Infrastructure',
  },
  description: 'SJM Infrastructure (Sri Lakshmi Foundations) – A-Class registered civil contractor and building consultant in Chennai with 30+ years of excellence in highways, PWD, GCC works, CMDA/DTCP approvals, and structural design.',
  keywords: ['civil contractor Chennai', 'building consultant Chennai', 'PWD contractor Tamil Nadu', 'CMDA approval Chennai', 'DTCP approval', 'highway construction Tamil Nadu', 'GCC works', 'building plan approval Chennai', 'SJM Infrastructure'],
  authors: [{ name: 'SJM Infrastructure' }],
  creator: 'SJM Infrastructure',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sjminfrastructure.com',
    title: 'SJM Infrastructure | Premier Civil Contractor & Building Consultant Chennai',
    description: 'A-Class registered civil contractor and building consultant with 30+ years of excellence in highways, PWD, GCC works, and building consultancy services.',
    siteName: 'SJM Infrastructure',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SJM Infrastructure | A-Class Civil Contractor Chennai',
    description: '30+ years of engineered trust. Government infrastructure & private building services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
