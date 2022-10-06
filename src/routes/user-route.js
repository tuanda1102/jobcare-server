const express = require("express");
const userRoutes = express.Router();

const { verifyToken, checkUser } = require("../middleware/auth-middleware");
const {
  updateUserProfile,
  assessRecuiter,
  getDetailRecruiter,
} = require("../controllers/user-controller");

// @route POST api/user/update
// @desc Update profile a user
// @access private
userRoutes.post("/update", verifyToken, updateUserProfile);

// @route POST api/user/assess
// @desc Assess  a recruiter
// @access private
userRoutes.post("/assess", verifyToken, checkUser, assessRecuiter);

// @route GET api/user/id
// @desc Get detail of recruiter
// @access public
userRoutes.get("/:id", getDetailRecruiter);

module.exports = userRoutes;
