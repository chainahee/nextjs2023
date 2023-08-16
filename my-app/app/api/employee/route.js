import connectMongoDB from "@/app/lib/mongodb";
import Employee from "@/app/models/Employee"
import { NextResponse } from "next/server";

export async function POST(request) {
  const { employeeid, fullname, department, branch, status } =
    await request.json();
  await connectMongoDB();
  await Employee.create({
    employeeid,
    fullname,
    department,
    branch,
    status,
  });
  return NextResponse.json({ msg: "Employee Create" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const employees = await Employee.find({});
    return NextResponse.json({ employees });
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: { msg: "Failed to fetch employees" },
    };
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Employee.findByIdAndDelete(id);
    return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: { msg: "Failed to delete the employee" },
    };
  }
}
