import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: String,
    serial: String,
    disc: String,
    brand: { Type: Schema.Types.ObjectId },
    category: { Type: Schema.Types.ObjectId },
    startDate: Date,
    endDate: Date,
    status: { Type: Schema.Types.ObjectId },
    price: Number,
  },
  { timestamps: true, versionKey: false }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
