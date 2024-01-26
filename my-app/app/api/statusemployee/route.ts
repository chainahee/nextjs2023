import { PrismaClient } from "@prisma/client";
import type { Status } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body: Status = await request.json();
  const status = await prisma.status.create({
    data: {
      id: body.id,
      name: body.name,
    },
  });
  return NextResponse.json(status, { status: 201 });
};
