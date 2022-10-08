const { Jobs, Users, JobCategories } = require("../database/models");

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

const getAllCategories = async () => {
  const categories = await JobCategories.findAll();
  return categories ? categories : false;
};

const getCategoryById = async (categoryId) => {
  const category = await JobCategories.findByPk(categoryId);
  return category ? category : false;
};

const getJobsByCategoryServer = async (categoryId) => {
  const jobCategories = await Jobs.findAll({
    where: {
      categoryId: categoryId,
    },
  });

  return jobCategories ? jobCategories : false;
};

const getAllJobsServer = async () => {
  const jobList = await Jobs.findAll({
    where: {
      isDeleted: false,
    },
  });
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
  getJobsByCategoryServer,
  getAllCategories,
  getCategoryById,
};
