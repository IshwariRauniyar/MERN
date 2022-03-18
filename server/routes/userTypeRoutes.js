var express = require("express");
var router = express.Router();
const UserType = require("../models/userType.model");

router.get("/", (req, res) => {
  UserType.find({}, (err, userTypes) => {
    if (err) {
      res.send(err);
    }
    res.json(userTypes);
  });
});

router.post("/", async (req, res) => {
  try {
    const UserTypeData = await UserType.create({
      Title: req.body.Title,
      Status: req.body.Status,
    });
    UserTypeData.save();
    res.json({
      status: "ok",
      message: "user type created successfully",
      data: UserTypeData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while creating" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const UserTypeData = await UserType.findByIdAndUpdate(req.params.id, {
      Title: req.body.Title,
      Status: req.body.Status,
    });
    UserTypeData.save();
    res.json({
      status: "ok",
      message: "user type updated successfully",
      data: UserTypeData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while updating" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const UserTypeData = await UserType.findByIdAndDelete(req.params.id);
    res.json({
      status: "ok",
      message: "user type deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while deleting" });
  }
});

module.exports = router;
