import mongoose, { ConnectOptions } from "mongoose";

const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  throw new Error("Invalid env variable: MONGO_URL");
}

export const connectToMongoDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    const { connection } = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    } as ConnectOptions);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    } 
  } catch (error) {
    return Promise.reject(error)
  }
};
