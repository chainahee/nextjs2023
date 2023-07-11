import connectMongoDB from "@/app/lib/mongodb";
import StatusDevice from "@/app/models/StatusDevice";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await StatusDevice.create({ name });
  return NextResponse.json({ msg: "StatusDevice Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const statusdevices = await StatusDevice.find();
  return NextResponse.json({ statusdevices });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await StatusDevice.findByIdAndDelete(id);
  return NextResponse.json({ message: "StatusDevice deleted" }, { status: 200 });
}
