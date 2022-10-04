const {
  updateProfile,
  getUser,
  getDetailRecruiterServer,
} = require("../repository/user-repo");
const { statusCode, apiMessage } = require("../utils/constants");
const {
  returnResponse,
  returnResponseServerError,
} = require("../common/response");

const updateUserProfileService = async (req, res) => {
  const { id, email } = req;

  try {
    const user = await getUser(email);

    if (!user) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_MISSING));
    }

    const { password, refreshToken, ...rest } = user.dataValues;

    const data = {
      ...rest,
      ...req.body,
    };

    await updateProfile(id, data);

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

// const assessRecuiterService = async (req, res) => {
//   const userId = req.id;
//   const { message, recruiterId } = req.body;

//   try {
//     const assessed = await createAssessRecruiterServer(
//       message,
//       userId,
//       recruiterId
//     );
//     return res.status(200).json({
//       success: true,
//       message: "Assess successfully!",
//       data: assessed,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error!",
//       data: {},
//     });
//   }
// };

const getDetailRecruiterService = async (req, res) => {
  const recruiterId = +req.params.id;

  try {
    const recruiterDetails = await getDetailRecruiterServer(recruiterId);

    if (!recruiterDetails) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.DATA_FOUND));
    }

    return res
      .status(statusCode.OK)
      .json(returnResponse(true, apiMessage.SUCCESS, recruiterDetails));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponseServerError());
  }
};

module.exports = {
  updateUserProfileService,
  getDetailRecruiterService,
};
