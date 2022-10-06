const {
  assessRecruiterService,
  deleteAssessService,
  changeAssessService,
} = require("../services/assess-service");

const assessRecruiter = async (req, res) => {
  return await assessRecruiterService(req, res);
};

const deleteAssess = async (req, res) => {
  return await deleteAssessService(req, res);
};

const changeAssess = async (req, res) => {
  return await changeAssessService(req, res);
};

module.exports = { assessRecruiter, deleteAssess, changeAssess };
