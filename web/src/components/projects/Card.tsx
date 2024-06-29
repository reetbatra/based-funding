import React from 'react';
import CardImage from './CardImage';

interface CardProps {
  name: string;
  university: string;
  program: string;
  goalAmount: number;
  amountRaised: number;
  deadline: string;
}

const Card: React.FC<CardProps> = ({ name, university, program, goalAmount, amountRaised, deadline }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col justify-between" style={{ width: '350px', height: '500px', border: '2px solid #e2e8f0' }}>
      <div className="flex justify-center">
        <CardImage />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">{`${name}, ${university}, ${program}`}</h3>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-lg font-semibold">Goal Amount</p>
            <p className="text-lg">${goalAmount}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Need to Raise</p>
            <p className="text-lg">${goalAmount - amountRaised}</p>
          </div>
        </div>
        <p className="text-sm bg-green-200 p-2 rounded text-center mb-4">Funding deadline: {deadline}</p>
        <div className="flex justify-center">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => window.location.href = '/details'}
          >
            Fund
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
