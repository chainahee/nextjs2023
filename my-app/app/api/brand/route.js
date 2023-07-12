import connectMongoDB from "@/app/lib/mongodb";
import Brand from "@/app/models/Brand";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, brand_id } = await request.json();
  await connectMongoDB();
  await Brand.create({ name, brand_id });
  return NextResponse.json({ msg: "Brand Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const brands = await Brand.find();
  return NextResponse.json({ brands });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Brand.findByIdAndDelete(id);
  return NextResponse.json({ message: "Brand deleted" }, { status: 200 });
}
