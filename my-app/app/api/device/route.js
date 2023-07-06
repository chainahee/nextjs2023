import connectMongoDB from "@/app/lib/mongodb";
import Device from "@/app/models/Device";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await Device.create({ name });
  return NextResponse.json({ msg: "Device Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const devices = await Device.find();
  return NextResponse.json({ devices });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Device.findByIdAndDelete(id);
  return NextResponse.json({ message: "Device deleted" }, { status: 200 });
}
