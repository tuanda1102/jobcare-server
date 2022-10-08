const express = require("express");
const jobRoutes = express.Router();
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByCategory,
} = require("../controllers/job-controller");

const {
  verifyToken,
  checkRecruiter,
} = require("../middleware/auth-middleware");

// @route GET api/job/
// @desc GET all job
// @access public
jobRoutes.get("/", getAllJobs);

// @route GET api/job/
// @desc Get detail 1 job by id
// @access public
jobRoutes.get("/:id", getJob);

// @route GET api/job/category/id
// @desc Get all job of category
// @access public
jobRoutes.get("/category/:id", getJobsByCategory);

// @route POST api/job/
// @desc create a job
// @access private
jobRoutes.post("/", verifyToken, checkRecruiter, createJob);

// @route UPDATE api/job/id
// @desc update a jobs
// @access private
jobRoutes.put("/:id", verifyToken, checkRecruiter, updateJob);

// @route DELETE api/job/id
// @desc Delete a jobs
// @access private
jobRoutes.delete("/:id", verifyToken, checkRecruiter, deleteJob);

module.exports = jobRoutes;
