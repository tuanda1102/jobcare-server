const express = require("express");
const jobRoutes = express.Router();
const {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/job-controller");

const {
  verifyToken,
  checkRecruiter,
} = require("../middleware/auth-middleware");

// @route GET api/jobs/
// @desc GET all jobs
// @access public
jobRoutes.get("/", getAllJobs);

// @route POST api/jobs/
// @desc create a jobs
// @access private
jobRoutes.post("/", verifyToken, checkRecruiter, createJob);

// @route UPDATE api/jobs/id
// @desc update a jobs
// @access private
jobRoutes.post("/:id", verifyToken, checkRecruiter, updateJob);

// @route DELETE api/jobs/id
// @desc Delete a jobs
// @access private
jobRoutes.delete("/:id", verifyToken, checkRecruiter, deleteJob);

module.exports = jobRoutes;
