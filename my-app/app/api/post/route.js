import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await dbConnect();
    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Error", { status: 500 });
  }
};
