const { Jobs } = require("../models");

const createJobServer = async (data) => {
  const newJob = await Jobs.create(data);
  return newJob;
};

module.exports = { createJobServer };
