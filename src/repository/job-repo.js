const { Jobs, Users } = require("../database/models");

const createJobServer = async (data) => {
  const newJob = await Jobs.create(data);
  return newJob ? newJob : false;
};

const getJobServer = async (jobId) => {
  const job = await Jobs.findOne({
    where: {
      id: jobId,
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: [
            "id",
            "password",
            "role",
            "refreshToken",
            "createdAt",
            "updatedAt",
          ],
        },

        as: "recruiter_jobs",
      },
    ],
  });
  return job ? job : false;
};

const getAllJobsServer = async () => {
  const jobList = await Jobs.findAll();
  return jobList ? jobList : false;
};

const updateJobServer = async (jobId, data) => {
  const newJob = await Jobs.update(data, {
    where: {
      id: jobId,
    },
  });

  return newJob ? newJob : false;
};

module.exports = {
  createJobServer,
  getAllJobsServer,
  updateJobServer,
  getJobServer,
};
