import connectMongoDB from "@/app/lib/mongodb";
import Brand from "@/app/models/Brand";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newBrandId: brand_id } = await request.json();
  await connectMongoDB();
  await Brand.findByIdAndUpdate(id, { name, brand_id });
  return NextResponse.json({ message: "Brand updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const brand = await Brand.findOne({ _id: id });
  return NextResponse.json({ brand }, { status: 200 });
}
