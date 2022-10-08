const express = require("express");
const {
  assessRecruiter,
  deleteAssess,
  changeAssess,
} = require("../controllers/assess-controller");
const assessRoutes = express.Router();
const { verifyToken } = require("../middleware/auth-middleware");

// @route POST api/assess
// @desc Assess a recruiter
// @access private
assessRoutes.post("/:id", verifyToken, assessRecruiter);

// @route DELETE api/assess
// @desc Delete assess a recruiter
// @access private
assessRoutes.delete("/:id", verifyToken, deleteAssess);

// @route PUT api/assess
// @desc Change assess a recruiter
// @access private
assessRoutes.put("/:id", verifyToken, changeAssess);

module.exports = assessRoutes;
