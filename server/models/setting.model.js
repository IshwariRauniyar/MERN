const mongoose = require("mongoose");
const { Schema } = mongoose;

const SettingSchema = new Schema(
  {
    Title: { type: String },
    Status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    Image: { type: String },
    Name: { type: String },
    UserName: { type: String },
    UserType: { type: String, enum: ["new", "old"], default: "new" },
    UserRole: {
      type: String,
      enum: ["superAdmin", "admin", "user"],
      default: "user",
    },
    Value: { type: String },
    Country: { type: String },
    State: { type: String },
    City: { type: String },
    Address: { type: String },
    CreatedBy: { type: String },
    ModifiedBy: { type: String },
    IsActive: { type: Boolean, default: true },
  },
  { collection: "Setting" },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", SettingSchema);

module.exports = Setting;
