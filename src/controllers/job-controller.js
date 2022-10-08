const {
  createJobService,
  getAllJobsService,
  updateJobService,
  getJobService,
  deleteJobService,
  getJobsByCategoryService,
} = require("../services/job-service");

const getAllJobs = async (req, res) => {
  return await getAllJobsService(req, res);
};

const getJob = async (req, res) => {
  return await getJobService(req, res);
};

const getJobsByCategory = async (req, res) => {
  return await getJobsByCategoryService(req, res);
};

const createJob = async (req, res) => {
  return await createJobService(req, res);
};

const updateJob = async (req, res) => {
  return await updateJobService(req, res);
};

const deleteJob = async (req, res) => {
  return await deleteJobService(req, res);
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  getJobsByCategory,
};
