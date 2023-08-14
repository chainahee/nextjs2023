import mongoose, { Schema } from "mongoose";

const statusEmployeeSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const StatusEmployee = mongoose.models.StatusEmployee || mongoose.model("StatusEmployee", statusEmployeeSchema);

export default StatusEmployee;