var express = require("express");
var router = express.Router();
const User = require("../models/user.model");
const Setting = require("../models/setting.model");
const UserType = require("../models/userType.model");

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const UserData = await User.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      UserName: req.body.UserName,
      // UserType: await UserType.findOne({ Title: "new" }),
      UserType: req.body.UserType,
      UserRole: req.body.UserRole,
      Country: req.body.Country,
      State: req.body.State,
      City: req.body.City,
      Address: req.body.Address,
    });
    UserData.save();
    res.json({
      status: "ok",
      message: "user created successfully",
      data: UserData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while creating" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const UserData = await User.findByIdAndUpdate(req.params.id, {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      UserName: req.body.UserName,
      UserType: req.body.UserType,
      UserRole: req.body.UserRole,
      Country: req.body.Country,
      State: req.body.State,
      City: req.body.City,
      Address: req.body.Address,
    });
    UserData.save();
    res.json({
      status: "ok",
      message: "user updated successfully",
      //   data: UserData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while updating" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const UserData = await User.findByIdAndDelete(req.params.id);
    res.json({
      status: "ok",
      message: "user deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while deleting" });
  }
});

module.exports = router;
