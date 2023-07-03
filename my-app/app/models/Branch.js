import mongoose, { Schema } from "mongoose";

const branchmentSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.models.Branch || mongoose.model("Branch", branchmentSchema);

export default Branch;
