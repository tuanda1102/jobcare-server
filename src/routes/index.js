const express = require("express");
const authRoutes = require("./auth-route");
const userRoutes = require("./user-route");
const jobRoutes = require("./job-route");
const assessRoutes = require("./assess-route");

const router = express.Router();

router.use("/api/auth", authRoutes);
router.use("/api/user", userRoutes);
router.use("/api/job", jobRoutes);
router.use("/api/assess", assessRoutes);

module.exports = router;
