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

const Card: React.FC<CardProps> = ({
  name,
  university,
  program,
  goalAmount,
  amountRaised,
  deadline,
}) => {
  return (
    <div
      className="mb-6 flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg"
      style={{ width: '350px', height: '300px', border: '2px solid #e2e8f0' }}
    >
      <div>
        <h3 className="mb-4 text-center text-xl font-bold">{`${name}, ${university}, ${program}`}</h3>
        <div className="mb-4 flex justify-between">
          <div>
            <p className="text-lg font-semibold">Goal Amount</p>
            <p className="text-lg">${goalAmount}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Need to Raise</p>
            <p className="text-lg">${goalAmount - amountRaised}</p>
          </div>
        </div>
        <p className="mb-4 rounded bg-green-200 p-2 text-center text-sm">
          Funding deadline: {deadline}
        </p>
        <div className="flex justify-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => (window.location.href = '/details')}
          >
            Fund
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
