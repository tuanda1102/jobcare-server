const { Jobs } = require("../database/models");

const createJobServer = async (data) => {
  const newJob = await Jobs.create(data);
  return newJob;
};

const getAllJobsServer = async () => {
  const jobList = await Jobs.findAll();
  return jobList ? jobList : false;
};

module.exports = { createJobServer, getAllJobsServer };
