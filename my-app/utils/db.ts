import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
    process.exit(1); // ออกจากโปรแกรมถ้าเชื่อมต่อไม่สำเร็จ
  }
};

export default connectDB;
