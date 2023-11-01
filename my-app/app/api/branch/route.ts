import { PrismaClient } from "@prisma/client";
import type { Branch } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body: Branch = await request.json();
  const branch = await prisma.branch.create({
    data: {
      id: body.id,
      name: body.name,
    },
  });
  return NextResponse.json(branch, { status: 201 });
};
