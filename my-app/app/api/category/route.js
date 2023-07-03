import connectMongoDB from "@/app/lib/mongodb";
import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await Category.create({ name });
  return NextResponse.json({ msg: "Category Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categorys = await Category.find();
  return NextResponse.json({ categorys });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted" }, { status: 200 });
}
