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

export default function DetailsPage() {
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

  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-6xl gap-16">
        <div className="mt-24 w-2/3">
          <h1 className="mb-9 text-3xl font-semibold text-mainGray">Samantha's Case</h1>
          <div>
            <div className="rounded-3xl bg-mainGreen p-9 text-mainGray">
              <div className="mb-2">
                <span className="font-bold">Name: </span>
                <span className="ml-2">Samantha Jones</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">University:</span>
                <span className="ml-2">Harvard University</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Programme:</span>
                <span className="ml-2">Computer Science</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Education level:</span>
                <span className="ml-2">Bachelor</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Status:</span>
                <span className="ml-2">Open</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Goal:</span>
                <span className="ml-2">Current / Target</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Deadline:</span>
                <span className="ml-2">Dec 1, 2020</span>
              </div>
              <div>
                <span className="font-bold">Description:</span>
                <span className="ml-2">
                  Hi! I'm Samantha. I'm currently a sophomore at the University of California,
                  Berkeley, pursuing a degree in Computer Science. I need funding to cover my
                  semester fees and continue my studies, as my family is facing financial
                  difficulties due to unforeseen circumstances.
                </span>
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
