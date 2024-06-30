import prisma from "@/lib/prisma";
import { NextRequest as req, NextResponse as res } from "next/server";

// GET /students/filterPrograms?query=program
export async function GET(req: req) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query") || "";

  const students = await prisma.student.findMany({
    where: {
      program: query,
    },
  });

  return res.json(students);
}
