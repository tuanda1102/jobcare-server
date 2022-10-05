const { assessRecruiterService } = require("../services/assess-service");

const assessRecruiter = async (req, res) => {
  return await assessRecruiterService(req, res);
};

module.exports = { assessRecruiter };
