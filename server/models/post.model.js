const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    _id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    image: { type: String },
    detail: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    seoTitle: { type: String, required: true },
    seoDescription: { type: String, required: true },
    publishedAfter: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: "post_data" }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
