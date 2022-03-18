var express = require("express");
var router = express.Router();
const UserRole = require("../models/userRole.model");

router.get("/", (req, res) => {
  UserRole.find({}, (err, userRoles) => {
    if (err) {
      res.send(err);
    }
    res.json(userRoles);
  });
});

router.post("/", async (req, res) => {
  try {
    const UserRoleData = await UserRole.create({
      Role: req.body.Role,
      Status: req.body.Status,
    });
    UserRoleData.save();
    res.json({
      status: "ok",
      message: "user role created successfully",
      data: UserRoleData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while creating" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const UserRoleData = await UserRole.findByIdAndUpdate(req.params.id, {
      Role: req.body.Role,
      Status: req.body.Status,
    });
    UserRoleData.save();
    res.json({
      status: "ok",
      message: "user role updated successfully",
      data: UserRoleData,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while updating" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const UserRoleData = await UserRole.findByIdAndDelete(req.params.id);
    res.json({
      status: "ok",
      message: "user role deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "something went wrong while deleting" });
  }
});
module.exports = router;
