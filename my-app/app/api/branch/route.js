import connectMongoDB from "@/app/lib/mongodb";
import Branch from "@/app/models/Branch";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await Branch.create({ name });
  return NextResponse.json({ msg: "Branch Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const branchs = await Branch.find();
  return NextResponse.json({ branchs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Branch.findByIdAndDelete(id);
  return NextResponse.json({ message: "Branch deleted" }, { status: 200 });
}
