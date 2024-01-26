import { NextResponse } from "next/server";
import { Branch, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Branch = await request.json();
  const branch = await prisma.branch.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(branch, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const branch = await prisma.branch.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(branch, { status: 200 });
};
