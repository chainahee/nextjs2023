import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
  try {
    await connectDB();

    const brand = await Post.find();

    return new NextResponse(brand, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
