import connectMongoDB from "@/app/lib/mongodb";
import Device from "@/app/models/Device";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongoDB();

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

    const newDevice = new Device({
      name,
      serial,
      disc,
      brand,
      category,
      status,
      startDate,
      endDate,
      price,
    });

    await newDevice.save();

    return {
      status: 201,
      body: { msg: "Device Created" },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: { msg: "Failed to create a device" },
    };
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const devices = await Device.find();
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

