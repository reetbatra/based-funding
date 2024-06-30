import prisma from "@/lib/prisma";
import { NextResponse as res } from "next/server";

// GET /api/students/[id]
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const students = await prisma.student.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  return res.json(students);
}
