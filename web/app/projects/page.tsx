'use client';
import React, { useState } from 'react';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Filters from '@/components/projects/Filters';
import Card from '@/components/projects/Card';

interface CardData {
  name: string;
  university: string;
  program: string;
  goalAmount: number;
  amountRaised: number;
  deadline: string;
}

const FundPage: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const cards: CardData[] = [
    { name: 'Samantha', university: 'University of Oxford', program: 'Computer Science', goalAmount: 1000, amountRaised: 500, deadline: 'Nov 12' },
    { name: 'John', university: 'Stanford University', program: 'Medicine', goalAmount: 1500, amountRaised: 750, deadline: 'Dec 5' },
    // Add more card data as needed
  ];

  const setFilter = (type: string, value: string) => {
    setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
  };

  const filteredCards = cards.filter(card => {
    return Object.entries(filters).every(([key, value]) => card[key as keyof CardData] === value);
  });

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row px-4 py-8 lg:px-8 lg:py-16">
        <Filters setFilter={setFilter} />
        <main className="flex-grow lg:ml-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              university={card.university}
              program={card.program}
              goalAmount={card.goalAmount}
              amountRaised={card.amountRaised}
              deadline={card.deadline}
            />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default FundPage;
