const express = require("express");
const { assessRecruiter } = require("../controllers/assess-controller");
const assessRoutes = express.Router();
const { verifyToken, checkUser } = require("../middleware/auth-middleware");

// @route POST api/assess
// @desc Assess a recruiter
// @access private
assessRoutes.post("/:id", verifyToken, assessRecruiter);

module.exports = assessRoutes;
