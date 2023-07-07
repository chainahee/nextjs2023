import mongoose, { Schema } from "mongoose";

const testSchema = new Schema(
  {
    name: String,
    serail: String,
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
