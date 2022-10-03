const { apiMessage } = require("../utils/constants");

const returnResponse = (success, message = "", data = {}) => {
  return {
    success,
    message,
    data,
  };
};

const returnResponseServerError = () => {
  return {
    success: false,
    message: apiMessage.SERVER_ERROR,
    data: {},
  };
};

module.exports = { returnResponse, returnResponseServerError };
