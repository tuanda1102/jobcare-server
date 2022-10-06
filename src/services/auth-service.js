require("dotenv").config();
const argon2 = require("argon2");
const { generateToken } = require("../utils/auth-util");
const { returnResponse } = require("../common/response");
const { statusCode, apiMessage } = require("../utils/constants");
const {
  getUser,
  createUser,
  updateRefreshToken,
  deleteRefreshToken,
} = require("../repository/user-repo");

const registerService = async (req, res) => {
  const { email, password, fullname, role } = req.body;

  if (!email || !password || !fullname) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(returnResponse(false, apiMessage.DATA_MISSING));
  }

  try {
    // Kiểm tra xem đã tồn tại User đó chưa
    const user = await getUser(email);
    if (user) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.ACCOUNT_EXIST));
    }

    // ALL good
    // Return token
    const tokens = generateToken({ email });

    const hashedPassword = await argon2.hash(password);

    await createUser({
      email,
      fullname,
      password: hashedPassword,
      role: role ? role : "user",
      refreshToken: tokens.refreshToken,
    });

    return res.status(statusCode.OK).json(
      returnResponse(true, apiMessage.SUCCESS, {
        fullname,
        email,
        role: role ? role : "user",
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      })
    );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

const loginService = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(returnResponse(false, apiMessage.DATA_MISSING));
  }

  try {
    const user = await getUser(email);

    if (!user) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.LOGIN_FAILED));
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.LOGIN_FAILED));
    }

    // All GOOD
    // Return token
    const tokens = generateToken(user);

    // Update refreshToken
    await updateRefreshToken(user, tokens.refreshToken);

    res.status(statusCode.OK).json(
      returnResponse(true, apiMessage.SUCCESS, {
        fullname: user.fullname,
        email: user.email,
        id: user.id,
        role: user.role,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      })
    );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

const logoutService = async (req, res) => {
  try {
    await deleteRefreshToken(req.id);
    return res
      .status(statusCode.OK)
      .send(returnResponse(true, apiMessage.SUCCESS));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

const checkUserService = async (req, res) => {
  try {
    const user = await getUser(req.email);
    if (!user) {
      return res
        .status(statusCode.BAD_REQUEST)
        .json(returnResponse(false, apiMessage.NOT_FOUND));
    }

    return res.status(statusCode.OK).json(
      returnResponse(true, apiMessage.SUCCESS, {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      })
    );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(returnResponse(false, apiMessage.SERVER_ERROR));
  }
};

module.exports = {
  registerService,
  loginService,
  logoutService,
  checkUserService,
};
