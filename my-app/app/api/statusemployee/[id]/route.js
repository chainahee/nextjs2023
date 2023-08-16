import connectMongoDB from "@/app/lib/mongodb";
import StatusEmployee from "@/app/models/StatusEmployee";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await StatusEmployee.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "StatusEmployee updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const statusEmployee = await StatusEmployee.findOne({ _id: id });
    return NextResponse.json({ statusEmployee }, { status: 200 });
  }
