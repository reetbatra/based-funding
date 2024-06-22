import React from 'react';

interface CardProps {
  title: string;
  description: string;
  amount: number;
}

const Card: React.FC<CardProps> = ({ title, description, amount }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-lg font-semibold">Amount: ${amount}</p>
    </div>
  );
};

export default Card;
