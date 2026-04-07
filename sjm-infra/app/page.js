import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HomePage from './HomePage';

export const metadata = {
  title: 'SJM Infrastructure | Chennai\'s Premier Civil Contractor & Building Consultant',
  description: 'SJM Infrastructure (Sri Lakshmi Foundations) — A-Class civil contractor in Chennai. Expert in highways, PWD contracts, GCC works, CMDA/DTCP approvals, structural design, and 3D elevation. 30+ years of engineered trust.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">
        <HomePage />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
