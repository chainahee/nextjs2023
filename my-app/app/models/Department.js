import mongoose, { Schema } from "mongoose";

const departmentSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.models.Department || mongoose.model("Department", departmentSchema);

export default Department;
