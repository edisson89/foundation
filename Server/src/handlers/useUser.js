const {
  userControllers,
  userPostControllers,
  userUpdateControllers,
  userDeleteControllers
} = require("../controllers/userControllers");

const userGet = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await userControllers(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const userPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userPostControllers(email, password);

    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: "error.message" });
  }
};
const userUpdate = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userUpdateControllers(email, password);

    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: "error.message" });
  }
};

const userDelete = async (req, res) => {
  try {
    const { email} = req.body;

    const result = await userDeleteControllers(email);

    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: "error.message" });
  }
};
module.exports = { userGet, userPost, userUpdate,userDelete };
