import { create } from 'domain';
import prisma from '../lib/prisma';
import { addDays } from 'date-fns';

async function main() {
  const students = await prisma.student.createMany({
    data: [
      {
        first_name: 'Lucy',
        last_name: 'Green',
        university: 'University of Tronto',
        program: 'Physics',
        education_level: 'BSc',
        location: 'UK',
      },
      {
        first_name: 'Farah',
        last_name: 'Ahmed',
        university: 'University of Cairo',
        program: 'Biology',
        education_level: 'MSc',
        location: 'Egypt',
      },
    ],
  });

  const cases = await prisma.case.createMany({
    data: [
      {
        studentId: 1,
        goal: 1000,
        deadline: addDays(new Date(), 5),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        funding_wallet: '0xA66e4f5F4B85aC8059795C6b7F08D524dFF0b706',
      },
      {
        studentId: 2,
        goal: 2000.5,
        deadline: addDays(new Date(), 10),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        funding_wallet: '0xCF761Fb54E2AaCfFb965F19EC446eE1D9A5CeddA',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
