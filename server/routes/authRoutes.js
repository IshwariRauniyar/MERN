var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Boom = require("@hapi/boom");
const HttpStatus = require("http-status-codes");

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.Password, 10);
    const Data = await User.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Password: newPassword,
      UserName: req.body.UserName,
      UserType: req.body.UserType,
      UserRole: req.body.UserRole,
    });
    Data.save();
    return res.status(HttpStatus.OK).json({
      success: true,
      message: "User Registered Successfully.",
      code: HttpStatus.OK,
      result: Data,
      // ...(Data && { ...Data }),
    });
  } catch (err) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: "Something went wrong.",
      code: HttpStatus.BAD_REQUEST,
      error: err,
    });
  }
});

router.post("/login", async (req, res, next) => {
  const Users = await User.findOne({
    Email: req.body.Email,
  }).exec();
  if (!Users) {
    // return next(Boom.unauthorized("User with this email not found"));
    return res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: "User with this email not found",
      code: HttpStatus.BAD_REQUEST,
    });
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.Password,
    Users.Password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        UserName: Users.UserName,
        Email: Users.Email,
      },
      "secret123"
    );
    return res.status(HttpStatus.OK).json({
      success: true,
      message: "User Logged in Successfully.",
      code: HttpStatus.OK,
      result: {
        user: Users,
        token: token,
      },
    });
  } else {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Invalid Password.",
      code: HttpStatus.UNAUTHORIZED,
    });
  }
});

module.exports = router;
