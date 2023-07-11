import mongoose, { Schema } from "mongoose";

const statusDeviceSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const StatusDevice = mongoose.models.StatusDevice || mongoose.model("StatusDevice", statusDeviceSchema);

export default StatusDevice;
