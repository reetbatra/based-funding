'use client';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Filters from '@/components/projects/Filters';
import Card from '@/components/projects/Card';

export default function FundPage() {
  const cards = [
    { title: 'Student A', description: 'Needs funding for education.', amount: 1000 },
    { title: 'Student B', description: 'Looking for health assistance.', amount: 1500 },
    // Add more card data as needed
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto flex px-8 py-16">
        <Filters />
        <main className="flex-grow ml-8">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} amount={card.amount} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
