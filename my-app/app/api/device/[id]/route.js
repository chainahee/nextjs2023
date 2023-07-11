import connectMongoDB from "@/app/lib/mongodb";
import Device from "@/app/models/Device";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await Device.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Device updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const device = await Device.findOne({ _id: id });
    return NextResponse.json({ device }, { status: 200 });
  }
