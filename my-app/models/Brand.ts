import mongoose from "mongoose";

const { Schema } = mongoose;

const bradSchema = new Schema(
  {
    name: {
      type: String,

      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Brnd", bradSchema);
