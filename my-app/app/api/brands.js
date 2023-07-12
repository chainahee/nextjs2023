// pages/api/brands.js
import connectMongoDB from "@/app/lib/mongodb";

export default async function handler(req, res) {
  try {
    const { db } = await connectMongoDB();
    const brands = await db.collection("brands").find().toArray();

    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
}
