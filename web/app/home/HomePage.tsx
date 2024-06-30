'use client';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center space-y-16 px-4 py-24 md:px-8">
        <h1 className="text-center text-3xl font-bold leading-relaxed text-mainGray md:text-4xl lg:text-5xl">
          we believe investing in education is based. donate in crypto wherever you are.
        </h1>
        <p className="text-center text-2xl md:text-3xl lg:text-4xl">
          Join as a <span className="text-mainBlue">Student</span> or Investor
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-64">
          <Button asChild variant="blue" className="h-full w-full p-4 text-lg md:text-xl">
            <Link href="/create-profile">Apply for funding</Link>
          </Button>
          <Button asChild variant="black" className="h-full w-full p-4 text-lg md:text-xl">
            <Link href="/projects">Fund a student</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
