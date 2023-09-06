import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: { type: String },
    serial: { type: String, unique: true, require: true },
    disc: { type: String },
    brand: { type: String },
    category: { type: String},
    startDate: { type: Date, default: null }, // ให้ startDate มีค่าเริ่มต้นเป็น null
    endDate: { type: Date, default: null },
    status: { type: String },
    price: { type: Number, default: "0" },
  },
  { timestamps: true, versionKey: false }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
