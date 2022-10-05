const { Assess } = require("../database/models");

const createAssessServer = async (dataAssess) => {
  const newMessage = await Assess.create(dataAssess);
  return newMessage;
};

module.exports = { createAssessServer };
