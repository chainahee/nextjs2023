import connectMongoDB from "@/app/lib/mongodb";
import Branch from "@/app/models/Branch";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await Branch.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Branch updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const branch = await Branch.findOne({ _id: id });
    return NextResponse.json({ branch }, { status: 200 });
  }
