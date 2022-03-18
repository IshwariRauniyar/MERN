const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserTypeSchema = new Schema(
  {
    Title: { type: String, required: true },
    Status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { collection: "UserType" },
  { timestamps: true }
);

const UserType = mongoose.model("UserType", UserTypeSchema);

module.exports = UserType;
