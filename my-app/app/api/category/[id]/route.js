import connectMongoDB from "@/app/lib/mongodb";
import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await Category.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Category updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const category = await Category.findOne({ _id: id });
    return NextResponse.json({ category }, { status: 200 });
  }
