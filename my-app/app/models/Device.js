import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: { type: String },
    serial: { type: String },
    disc: { type: String },
    brand: [{ type: Schema.Types.ObjectId, ref: "Brand" }],
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    startDate: { type: Date },
    endDate: { type: Date },
    status: [{ type: Schema.Types.ObjectId, ref: "StatusDevice" }],
    price: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
