const { Users } = require("../models");

const getUserList = async () => {
  const userList = await Users.findAll();
  return userList ? userList : false;
};

const getUser = async (email) => {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });
  return user ? user : false;
};

const createUser = async (data) => {
  const user = await Users.create(data);
  return user;
};

const updateRefreshToken = async (user, refreshToken) => {
  const newUser = await Users.update(
    { refreshToken: refreshToken },
    {
      where: {
        id: user.id,
      },
    }
  );
  return newUser;
};

const deleteRefreshToken = (userId) => {
  const userUpdate = Users.update(
    { refreshToken: null },
    {
      where: {
        id: userId,
      },
    }
  );
  return userUpdate;
};

module.exports = {
  getUserList,
  getUser,
  createUser,
  updateRefreshToken,
  deleteRefreshToken,
};
