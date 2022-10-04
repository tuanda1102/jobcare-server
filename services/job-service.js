const { createJobServer, getAllJobsServer } = require("../repository/job-repo");
const { getUser } = require("../repository/user-repo");
const {
  returnResponse,
  returnResponseServerError,
} = require("../common/response");
const { ROLE, apiMessage, statusCode } = require("../utils/constants");

const createJobService = async (req, res) => {
  const { email, role, id } = req;

  const recruiter = await getUser(email);

  if (!recruiter || role !== ROLE.RECRUITER) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(returnResponse(false, apiMessage.UNAUTHORIZED));
  }

  try {
    const newJob = await createJobServer({ ...req.body, recruiterId: id });

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS, newJob));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

const getAllJobsService = async (req, res) => {
  const jobList = await getAllJobsServer();

  if (!jobList) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(returnResponse(false, apiMessage.DATA_FOUND));
  }

  try {
    return res
      .status(statusCode.OK)
      .json(returnResponse(false, apiMessage.SUCCESS, jobList));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

module.exports = { createJobService, getAllJobsService };
