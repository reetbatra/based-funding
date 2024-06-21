'use client';
import { useAccount } from 'wagmi';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Link from 'next/link';

export default function HomePage() {
  const account = useAccount();

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center px-8 py-16 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Transforming Education Funding with Decentralized Blockchain Solutions
        </h1>
        <p className="text-lg text-center">
          Join as a Student or Investor
        </p>
        <div className="flex space-x-4">
          <Link href="/create-profile" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Apply for $
          </Link>
          <Link href="/projects" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Fund $
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

