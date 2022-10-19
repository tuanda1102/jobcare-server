const {
  registerService,
  loginService,
  logoutService,
  checkUserService,
  changePasswordService,
  refreshTokenService,
} = require("../services/auth-service");

const register = async (req, res) => {
  return await registerService(req, res);
};

const registerRecruiter = async (req, res) => {
  return await registerService(req, res);
};

const login = async (req, res) => {
  return await loginService(req, res);
};

const logout = async (req, res) => {
  return await logoutService(req, res);
};

const checkUser = async (req, res) => {
  return await checkUserService(req, res);
};

const changePassword = async (req, res) => {
  return await changePasswordService(req, res);
};

const refreshToken = async (req, res) => {
  return await refreshTokenService(req, res);
};

module.exports = {
  register,
  login,
  logout,
  checkUser,
  registerRecruiter,
  changePassword,
  refreshToken,
};
