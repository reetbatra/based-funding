'use client';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center space-y-16 px-8 py-24">
        <h1 className="text-center text-5xl font-bold leading-relaxed text-mainGray">
          we believe investing in education is based. donate in crypto wherever you are.
        </h1>
        <p className="text-center text-4xl">
          Join as a <span className="text-mainBlue">Student</span> or Investor
        </p>
        <div className="flex gap-64">
          <Button asChild variant="blue" className="h-full w-full p-4 text-xl">
            <Link href="/create-profile">Apply for funding</Link>
          </Button>
          <Button asChild variant="black" className="h-full w-full p-4 text-xl">
            <Link href="/projects">Fund a student</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
