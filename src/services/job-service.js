const {
  createJobServer,
  getAllJobsServer,
  updateJobServer,
  getJobServer,
  getJobsByCategoryServer,
  getCategoryById,
} = require("../repository/job-repo");
const { getUser } = require("../repository/user-repo");
const {
  returnResponse,
  returnResponseServerError,
} = require("../common/response");
const { apiMessage, statusCode } = require("../utils/constants");

const createJobService = async (req, res) => {
  // Lấy ra thông tin người dùng gửi lên thông qua accessToken
  const recruiterId = req.id;

  try {
    const newJob = await createJobServer({
      ...req.body,
      recruiterId: recruiterId,
    });

    if (!newJob) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }

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
  try {
    const jobList = await getAllJobsServer();

    if (!jobList) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }
    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS, jobList));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

const getJobService = async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await getJobServer(jobId);

    if (!job) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS, job));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

const getJobsByCategoryService = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await getCategoryById(categoryId);
    const jobs = await getJobsByCategoryServer(categoryId);

    if (!jobs) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }

    return res.status(statusCode.OK).json(
      returnResponse(true, apiMessage.SUCCESS, {
        category,
        jobs,
      })
    );
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

const updateJobService = async (req, res) => {
  const recruiterId = req.id;
  const jobId = req.params.id;

  try {
    // Kiểm tra xem id của người dùng và id của Job có trùng khớp nhau không
    // Nếu trùng khớp mới cho người dùng sửa Job này
    const job = await getJobServer(jobId);

    if (recruiterId !== job.recruiterId) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .json(false, apiMessage.UNAUTHORIZED);
    }

    // ALl good
    // Update Job
    const isUpdated = await updateJobServer(jobId, req.body);

    if (!isUpdated) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }

    const newJob = await getJobServer(jobId);

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

const deleteJobService = async (req, res) => {
  const recruiterId = req.id;
  const jobId = req.params.id;

  // Kiểm tra xem id của người dùng và id của Job có trùng khớp nhau không
  // Nếu trùng khớp mới cho người dùng sửa Job này
  const job = await getJobServer(jobId);

  if (recruiterId !== job.recruiterId) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(false, apiMessage.UNAUTHORIZED);
  }

  const idDeleted = await updateJobServer(jobId, { isDeleted: true });

  if (!idDeleted) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(returnResponse(false, apiMessage.DATA_FOUND));
  }

  return res
    .status(statusCode.OK)
    .json(returnResponse(true, apiMessage.SUCCESS));
};

module.exports = {
  createJobService,
  getAllJobsService,
  updateJobService,
  getJobService,
  deleteJobService,
  getJobsByCategoryService,
};
