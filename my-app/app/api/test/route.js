import connectMongoDB from "@/app/lib/mongodb";
import Test from "@/app/models/Test";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, serail } = await request.json();
  await connectMongoDB();
  await Test.create({ name, serail });
  return NextResponse.json({ msg: "Test Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const tests = await Test.find();
  return NextResponse.json({ tests });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Test.findByIdAndDelete(id);
  return NextResponse.json({ message: "Test deleted" }, { status: 200 });
}
