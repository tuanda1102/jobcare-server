const {
  registerService,
  loginService,
  logoutService,
  checkUserService,
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

module.exports = { register, login, logout, checkUser, registerRecruiter };
