import prisma from "@/lib/prisma";
import { NextResponse as res } from "next/server";

// GET /students
export async function GET(req: Request) {
  const students = await prisma.student.findMany();

  return res.json(students);
}
