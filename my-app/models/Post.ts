import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    name: {
      type: String,

      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
