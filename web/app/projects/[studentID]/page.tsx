'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function DetailsPage({ params }) {
  const fundings = [
    {
      id: 1,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 2,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 3,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 4,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 5,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 6,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
    {
      id: 7,
      investor: '0x1234567890abcdef1234567890abcdef12345678',
      amount: '$250.00',
    },
  ];
  interface StudentData {
    first_name: string;
    last_name: string;
    university: string;
    program: string;
    education_level: string;
  }

  const [data, setData] = useState<StudentData>({
    first_name: '',
    last_name: '',
    university: '',
    program: '',
    education_level: '',
  });
  interface Cases {
    goal: string;
    description: string;
    total_funding: string;
    deadline: string;
    // Add other properties if needed
  }

  const [cases, setCases] = useState<Cases>({
    goal: null,
    description: null,
    total_funding: null,
    deadline: '',
  });
  const [status, setStatus] = useState('Open');
  const [date, setDate] = useState('');

  const fetchData = async () => {
    fetch(`/api/students/${params.studentID}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });

    fetch(`/api/cases/${params.studentID}s`)
      .then((response) => response.json())
      .then((json) => {
        setCases(json);
      });
  };

  fetchData();
  if (new Date() > new Date(cases.deadline)) {
    setStatus('Closed');
  }

  const specificDate = new Date(cases.deadline);

  const day = specificDate.getDate();
  const month = specificDate.toLocaleString('default', { month: 'short' });
  const year = specificDate.getFullYear();

  const formattedSpecificDate = `${month} ${day}, ${year}`;

  return (
    <>
      <Header />
      <main className="mx-auto mt-5 flex max-w-6xl gap-16">
        <div className="mt-24 w-2/3">
          <h1 className="mb-9 text-3xl font-semibold text-mainGray">{data.first_name}'s Case</h1>
          <div>
            <div className="rounded-3xl bg-mainGreen p-9 text-mainGray">
              <div className="mb-2">
                <span className="font-bold">Name: </span>
                <span className="ml-2">
                  {data.first_name} {data.last_name}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold">University:</span>
                <span className="ml-2">{data.university}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Programme:</span>
                <span className="ml-2">{data.program}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Education level:</span>
                <span className="ml-2">{data.education_level}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Status:</span>
                <span className="ml-2">{status}</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Goal:</span>
                <span className="ml-2">
                  {cases.total_funding} / {cases.goal}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Deadline:</span>
                <span className="ml-2">{formattedSpecificDate}</span>
              </div>
              <div>
                <span className="font-bold">Description:</span>
                <span className="ml-2">{cases.description}</span>
              </div>
            </div>
            {/* <h1 className="ml-3 mt-6 text-2xl font-semibold text-mainGray">Fundings</h1> */}
            <Table className="mb-4 mt-5">
              <TableHeader>
                <TableRow>
                  <TableHead className="ml-3 mt-2 text-xl font-semibold text-mainGray">
                    Investor
                  </TableHead>
                  <TableHead className="ml-3 mt-2 text-xl font-semibold text-mainGray">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fundings.map((fund) => (
                  <TableRow key={fund.id}>
                    <TableCell>{fund.investor}</TableCell>
                    <TableCell>{fund.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="mt-40 w-1/3">
          <Button variant="blue" className="h-12 w-1/2">
            Fund
          </Button>
          <Input type="number" placeholder="My Offer (USDT)" className="mt-4 w-3/4" />
          <Input placeholder="Description of proposal" className="mt-4 w-3/4" />
          <p className="ml-3 mt-8 text-zinc-500">Case closes in:</p>
          <p className="ml-3 mt-2 text-3xl font-semibold">1d 10h 10m</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
