const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");

const UserSchema = new Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "provided email is invalid"],
      index: true,
    },
    Password: { type: String, required: true },
    // Hashed_Password: { type: String, default: "" },
    // AuthToken: { type: String, default: "" },
    Image: String,
    UserName: {
      type: String,
      required: true,
    },
    UserType: { type: String, required: true },
    UserRole: { type: String, required: true },
    Country: { type: String },
    State: { type: String },
    City: { type: String },
    Address: { type: String },
  },
  { collection: "User" },
  { timestamps: true }
);

// // virtual hashed_password save
// UserSchema.virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.Hashed_Password = this.encryptPassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// //Methods
// UserSchema.methods = {
//   //Authenticate -check if the password are the same
//   authenticate: function (password) {
//     return bcrypt.compareSync(password, this.hashed_password);
//   },

//   //Encrypt Password
//   encryptPassword: function (password) {
//     if (!password) return "";
//     try {
//       return bcrypt.hashSync(password, 10);
//     } catch (err) {
//       return "";
//     }
//   },
// };

const User = mongoose.model("User", UserSchema);

module.exports = User;
