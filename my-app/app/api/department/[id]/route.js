import connectMongoDB from "@/app/lib/mongodb";
import Department from "@/app/models/Department";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await Department.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Department updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const department = await Department.findOne({ _id: id });
    return NextResponse.json({ department }, { status: 200 });
  }
