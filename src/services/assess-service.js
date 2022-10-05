const { statusCode, apiMessage } = require("../utils/constants");
const { returnResponse } = require("../common/response");
const { createAssessServer } = require("../repository/assess-repo");

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

module.exports = { assessRecruiterService };
