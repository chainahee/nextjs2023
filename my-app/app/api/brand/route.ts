import { NextRequest, NextResponse } from "next/server";
import Brand from "@/app/models/Brand";
import { connectToMongoDB } from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  connectToMongoDB().catch((err) => NextResponse.json(err));

  const { name,timestamps } = await req.json();

  const userExists = await Brand.findOne({ name });

  if (userExists) {
    return NextResponse.json({ error: "Brand Already exist" });
  } else {
    try {
      const newBrand = await Brand.create({
        name,
        timestamps
      });

      return NextResponse.json(
        {
          success: true,
          user: newBrand,
        },
        { status: 201 }
      );
    } catch (error: unknown) {
      if (error && error instanceof mongoose.Error.ValidationError) {
        for (let field in error.errors) {
          const msg = error.errors[field].message;
          return NextResponse.json({ error: msg });
        }
      } else {
        return NextResponse.json(error);
      }
    }
  }
}

export async function GET(req: NextRequest) {
  connectToMongoDB().catch((err) => NextResponse.json(err));

  try {
    const allBrands = await Brand.find();
    Brand;
    return NextResponse.json({
      success: true,
      users: allBrands,
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
