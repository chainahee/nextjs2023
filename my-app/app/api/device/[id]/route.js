import connectMongoDB from "@/app/lib/mongodb";
import Device from "@/app/models/Device";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newSerial: serial,
    newBrand: brand,
    newCategory: category,
    newDisc: disc,
    newEendDate: endDate,
    newPrice: price,
    newStartDate: startDate,
    newStatus: status,
  } = await request.json();
  await connectMongoDB();
  await Device.findByIdAndUpdate(id, {
    name,
    serial,
    brand,
    category,
    disc,
    endDate,
    price,
    status,
    startDate,
  });
  return NextResponse.json({ message: "Device updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const device = await Device.findOne({ _id: id });
  return NextResponse.json({ device }, { status: 200 });
}
