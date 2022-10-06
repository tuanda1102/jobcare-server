const express = require("express");
const {
  assessRecruiter,
  deleteAssess,
} = require("../controllers/assess-controller");
const assessRoutes = express.Router();
const { verifyToken, checkUser } = require("../middleware/auth-middleware");

// @route POST api/assess
// @desc Assess a recruiter
// @access private
assessRoutes.post("/:id", verifyToken, assessRecruiter);

// @route POST api/assess
// @desc Delete assess a recruiter
// @access private
assessRoutes.delete("/:id", verifyToken, deleteAssess);

module.exports = assessRoutes;
