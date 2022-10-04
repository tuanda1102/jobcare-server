const {
  updateUserProfileService,
  getDetailRecruiterService,
} = require("../services/users-service");

const updateUserProfile = async (req, res) => {
  return await updateUserProfileService(req, res);
};

const assessRecuiter = async (req, res) => {
  return await assessRecuiterService(req, res);
};

const getDetailRecruiter = async (req, res) => {
  return await getDetailRecruiterService(req, res);
};

module.exports = { updateUserProfile, assessRecuiter, getDetailRecruiter };
