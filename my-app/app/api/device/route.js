import connectMongoDB from "@/app/lib/mongodb";
import Device from "@/app/models/Device";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    serial,
    disc,
    brand,
    category,
    status,
    startDate,
    endDate,
    price,
  } = await request.json();
  await connectMongoDB();
  await Device.create({
    name,
    serial,
    disc,
    brand: brand,
    category,
    status,
    startDate,
    endDate,
    price,
  });
  return NextResponse.json({ msg: "Device Create" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const devices = await Device.find({});
    return NextResponse.json({ devices });
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: { msg: "Failed to fetch devices" },
    };
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Device.findByIdAndDelete(id);
    return NextResponse.json({ message: "Device deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: { msg: "Failed to delete the device" },
    };
  }
}
