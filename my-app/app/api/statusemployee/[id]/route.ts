import { NextResponse } from "next/server";
import { Status, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Status = await request.json();
  const status = await prisma.status.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(status, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const status = await prisma.status.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(status, { status: 200 });
};
