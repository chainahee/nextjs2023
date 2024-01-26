import { NextResponse } from "next/server";
import { Department, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Department = await request.json();
  const department = await prisma.department.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(department, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const department = await prisma.department.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(department, { status: 200 });
};
