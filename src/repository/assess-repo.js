const { Assess } = require("../database/models");

const createAssessServer = async (dataAssess) => {
  const newMessage = await Assess.create(dataAssess);
  return newMessage;
};

const findAssessServer = async (assessId) => {
  const assess = await Assess.findByPk(assessId);
  return assess ? assess : false;
};

const deleteAssessServer = async (assessId) => {
  const idDeleted = await Assess.destroy({
    where: {
      id: assessId,
    },
  });

  return idDeleted ? true : false;
};

module.exports = { createAssessServer, deleteAssessServer, findAssessServer };
