const returnResponse = (success, message = "", data = {}) => {
  return {
    success,
    message,
    data,
  };
};

module.exports = { returnResponse };
