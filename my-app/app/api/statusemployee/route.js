import connectMongoDB from "@/app/lib/mongodb";
import StatusEmployee from "@/app/models/StatusEmployee";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await StatusEmployee.create({ name });
  return NextResponse.json({ msg: "StatusEmployee Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const statusEmployee = await StatusEmployee.find();
  return NextResponse.json({ statusEmployee });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await StatusEmployee.findByIdAndDelete(id);
  return NextResponse.json({ message: "StatusEmployee deleted" }, { status: 200 });
}
