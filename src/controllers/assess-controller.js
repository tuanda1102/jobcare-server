const {
  assessRecruiterService,
  deleteAssessService,
} = require("../services/assess-service");

const assessRecruiter = async (req, res) => {
  return await assessRecruiterService(req, res);
};

const deleteAssess = async (req, res) => {
  return await deleteAssessService(req, res);
};

module.exports = { assessRecruiter, deleteAssess };
