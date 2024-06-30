import prisma from '@/lib/prisma';
import { NextRequest as req } from 'next/server';
import { NextResponse as res } from 'next/server';

// GET /api/cases/[id]
export async function GET(req: req, { params }: { params: { id: string } }) {
  const id = params.id;
  const studentCase = await prisma.case.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  return res.json(studentCase);
}
