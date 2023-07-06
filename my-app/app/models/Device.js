import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    serial: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
    },
    disc: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
