import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    PostID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    authorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
