const {
  createJobService,
  getAllJobsService,
} = require("../services/job-service");

const getAllJobs = async (req, res) => {
  return await getAllJobsService(req, res);
};
const createJob = async (req, res) => {
  return await createJobService(req, res);
};
const updateJob = async (req, res) => {};
const deleteJob = async (req, res) => {};

module.exports = { getAllJobs, createJob, updateJob, deleteJob };
