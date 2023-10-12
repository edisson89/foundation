const { User } = require("../db");

const userControllers = async (email, password) => {
  if (email && password) {
    const validateUser = await User.findOne({
      where: { email: email },
    });
    if (
      validateUser &&
      validateUser.dataValues.email === email &&
      validateUser.dataValues.password === password
    ) {
      return { user: "validated" };
    } else {
      return "error not validaded";
    }
  } else {
    return { error: "email or password not found" };
  }
};

const userPostControllers = async (email, password) => {
  if (email && password) {
    const userCreate = {
      email,
      password,
    };

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: userCreate,
    });
    if (created) {
      return user;
    }
  } else {
    return "Email and Password not founds";
  }
};
const userUpdateControllers = async (email, password) => {
  if ((email, password)) {
    const validateUser = await User.findOne({
      where: { email },
    });

    if (validateUser && validateUser.dataValues.password !== password) {
      const userUpdated = await validateUser.update({ password });
      if (userUpdated) {
        return userUpdated;
      } else {
        return "user not Update";
      }
    } else {
      return "user was already update or user was not found";
    }
  } else {
    return "email and password required";
  }
};

const userDeleteControllers = async (email) => {
  if (email) {
    const deleteUser = await User.destroy({
      where: {
        email,
      },
    });
    if(deleteUser === 1)return 'User delete satisfactoryly'
    return 'User was removed already'
  }
};

module.exports = {
  userControllers,
  userPostControllers,
  userUpdateControllers,
  userDeleteControllers,
};
