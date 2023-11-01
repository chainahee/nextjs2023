import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { employee } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body: employee = await request.json();
  const employee = await prisma.employee.create({
    data: {
      employeeID: body.employeeID,
      fullname: body.fullname,
      email: body.email,
      departmentId: body.departmentId,
      branchId: body.branchId,
      isActive: body.isActive,
    },
  });
  return NextResponse.json(employee, { status: 201 });
};
