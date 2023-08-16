import connectMongoDB from "@/app/lib/mongodb";
import Employee from "@/app/models/Employee";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newEmployeeid: employeeid,
    newFullname: fullname,
    newDepartment: department,
    newBranch: branch,
    newStatus: status,
  } = await request.json();
  await connectMongoDB();
  await Employee.findByIdAndUpdate(id, {
    employeeid,
    fullname,
    department,
    branch,
    status,
  });
  return NextResponse.json({ message: "Employee updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const employee = await Employee.findOne({ _id: id });
  return NextResponse.json({ employee }, { status: 200 });
}
