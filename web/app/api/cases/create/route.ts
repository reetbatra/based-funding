import prisma from '@/lib/prisma';
import { NextRequest as req } from 'next/server';
import { NextResponse as res } from 'next/server';

// POST /api/cases/create
export async function POST(req: req) {
  try {
    const { studentId, goal, deadline, description, funding_wallet } = await req.json();

    if (!studentId || !goal || !deadline || !description || !funding_wallet) {
      return res.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const caseData = await prisma.case.create({
      data: {
        studentId,
        goal,
        deadline,
        description,
        funding_wallet,
      },
    });

    return res.json(caseData, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
