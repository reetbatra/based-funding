import prisma from "@/lib/prisma";
import { NextRequest as req } from "next/server";
import { NextResponse as res } from "next/server";

// POST /api/students/create
export async function POST(req: req) {
  try {
    const {
      first_name,
      last_name,
      university,
      program,
      education_level,
      region,
    } = await req.json();

    if (
      !first_name ||
      !last_name ||
      !university ||
      !program ||
      !education_level ||
      !region
    ) {
      return res.json({ error: "Missing required fields" }, { status: 400 });
    }

    const student = await prisma.student.create({
      data: {
        first_name,
        last_name,
        university,
        program,
        education_level,
        region,
      },
    });

    return res.json(student, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
