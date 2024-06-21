'use client'
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center px-8 py-16 space-y-6">
        <h1 className="text-2xl font-bold text-center">Apply for Funding</h1>
        <p className="text-lg text-center">Here you can apply for funding.</p>
        {/* Add your application form or details here */}
      </main>
      <Footer />
    </>
  );
}
