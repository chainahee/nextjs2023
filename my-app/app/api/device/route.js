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
    brand,
    category,
    status,
    startDate,
    endDate,
    price,
  });
  return NextResponse.json({ msg: "Device Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const devices = await Device.find();
  return NextResponse.json({ devices });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Device.findByIdAndDelete(id);
  return NextResponse.json({ message: "Device deleted" }, { status: 200 });
}

export default async function handler(req, res) {
  try {
    const { db } = await connectMongoDB();

    const devices = await db
      .collection("devices")
      .aggregate([
        {
          $lookup: {
            from: "brands",
            localField: "brand",
            foreignField: "_id",
            as: "brandData",
          },
        },
        {
          $match: {
            $and: [{ "brandInfo.name": "HP" }, { price: { $gt: 2000 } }],
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
            price: 1,
            brandInfo: {
              name: 1,
            },
          },
        },
      ])
      .toArray();

    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch devices" });
  }
}
