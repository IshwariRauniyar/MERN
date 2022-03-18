const routes = require("express").Router();
const userRoutes = require("./routes/userRoutes.js");
const userTypeRoutes = require("./routes/userTypeRoutes.js");
const userRoleRoutes = require("./routes/userRoleRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

routes.use("/user", userRoutes);
routes.use("/user_type", userTypeRoutes);
routes.use("/user_role", userRoleRoutes);
routes.use("/auth", authRoutes);

module.exports = routes;
