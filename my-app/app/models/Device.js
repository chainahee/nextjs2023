import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: String,
    serial: String,
    disc: String,
    brand: { type: Schema.Types.ObjectId },
    category: { type: Schema.Types.ObjectId },
    startDate: Date,
    endDate: Date,
    status: { type: Schema.Types.ObjectId },
    price: Number,
  },
  { timestamps: true, versionKey: false }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
