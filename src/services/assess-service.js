const { statusCode, apiMessage } = require("../utils/constants");
const { returnResponse } = require("../common/response");
const {
  createAssessServer,
  deleteAssessServer,
  findAssessServer,
} = require("../repository/assess-repo");

const assessRecruiterService = async (req, res) => {
  const userId = req.id;
  const recruiterId = req.params.id;

  try {
    const dataAssess = {
      ...req.body,
      recruiterId,
      userId,
    };
    const newAssess = await createAssessServer(dataAssess);

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS, newAssess));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

const deleteAssessService = async (req, res) => {
  const assessId = req.params.id;
  const userId = req.id;

  try {
    // Kiểm tra xem đánh giá đó có phải của người dùng này hay không
    // Nếu không chính xác thì trả về lỗi
    const assess = await findAssessServer(assessId);

    if (assess && assess.userId !== userId) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.FORBIDDEN));
    }

    // All good
    // Xóa đánh giá
    const idDeleted = await deleteAssessServer(assessId);

    if (!idDeleted) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DB_ERROR));
    }

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

module.exports = { assessRecruiterService, deleteAssessService };
