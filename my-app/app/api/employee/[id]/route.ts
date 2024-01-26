import { NextResponse } from "next/server";
import { PrismaClient, Employee } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Employee = await request.json();
  const employee = await prisma.employee.update({
    where: {
      id: Number(params.id),
    },
    data: {
      employeeID: body.employeeID,
      fullname: body.fullname,
      email: body.email,
      departmentId: body.departmentId,
      branchId: body.branchId,
      statusId: body.statusId,
    },
  });
  return NextResponse.json(employee, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const employee = await prisma.employee.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(employee, { status: 200 });
};
