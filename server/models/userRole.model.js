const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserRoleSchema = new Schema(
  {
    Role: { type: String, required: true },
    Status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    CreatedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { collection: "UserRole" },
  { timestamps: true }
);

const UserRole = mongoose.model("UserRole", UserRoleSchema);

module.exports = UserRole;
