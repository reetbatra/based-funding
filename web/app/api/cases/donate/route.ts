import prisma from '@/lib/prisma';
import { NextRequest as req } from 'next/server';
import { NextResponse as res } from 'next/server';

// POST /api/cases/donate
export async function POST(req: req) {
  try {
    const { amount, caseId, wallet } = await req.json();

    if (!amount || !caseId || !wallet) {
      return res.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const donation = await prisma.donation.create({
      data: {
        amount,
        caseId,
        wallet,
        created_at: new Date(),
      },
    });

    await prisma.case.update({
      where: { id: caseId },
      data: {
        total_funding: {
          increment: amount,
        },
      },
    });

    return res.json(donation, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
