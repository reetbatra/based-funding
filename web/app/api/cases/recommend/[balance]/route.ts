import prisma from "@/lib/prisma";
import axios from "axios";
import { NextResponse as res } from "next/server";

// GET /api/cases/[balance]
export async function GET(
  req: Request,
  { params }: { params: { balance: number } }
) {
  const userBalance = params.balance;
  const cases = await prisma.case.findMany({
    where: {
      deadline: {
        gt: new Date(), // Filter for deadlines greater than the current date
      },
    },
  });

  try {
    //     const data = cases.map((caseItem, index) => ({
    //       [`cases[${index}][id]`]: caseItem.id,
    //       [`cases[${index}][goal]`]: caseItem.goal,
    //       [`cases[${index}][total_funding]`]: caseItem.total_funding,
    //     }));

    const data = cases.map((caseItem, index) => ({
      id: caseItem.id,
      goal: caseItem.goal,
      total_funding: caseItem.total_funding,
    }));

    // fleek fn deployed @ https://screeching-rocket-melodic.functions.on-fleek.app
    const response = await axios.get(
      "https://screeching-rocket-melodic.functions.on-fleek.app",
      {
        params: {
          balance: userBalance,
          cases: data,
        },
      }
    );

    if (response.status !== 200) {
      return {
        error: "Failed to fetch data",
        status: response.status,
      };
    }

    const recommendedCases = await response.data;
    return res.json(recommendedCases);
  } catch (error) {
    console.log(error);
    return res.json(
      { error: "An error occurred while making the request" },
      { status: 500 }
    );
  }
}
