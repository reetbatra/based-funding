import prisma from '@/lib/prisma';
import { NextResponse as res } from 'next/server';

// GET /cases
export async function GET(req: Request) {
  const cases = await prisma.case.findMany();

  return res.json(cases);
}
