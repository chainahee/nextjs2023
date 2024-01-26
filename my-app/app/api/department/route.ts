import { PrismaClient } from "@prisma/client";
import type { Department } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body: Department = await request.json();
  const department = await prisma.department.create({
    data: {
      id: body.id,
      name: body.name,
    },
  });
  return NextResponse.json(department, { status: 201 });
};
