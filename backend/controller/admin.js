const adminModel = require("../model/adminModel");

//get all Admin Details
exports.getAdmin = async (req, res) => {
  try {
    res.send(
      await adminModel.findAll({
        attributes: ["id", "username"],
        raw: true,
      })
    );
  } catch (error) {
    console.log(error.message);
  }
};

//create a user
exports.addAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      const found = await adminModel.findOne({
        raw: true,
        where: {
          username,
        },
      });
      if (!found) {
        await adminModel.create({
          username,
          password,
        });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

//To remove a Admin
exports.removeAdmin = async (req, res) => {
  try {
    const { username } = req.body;
    if (username) {
      const found = await adminModel.findOne({
        raw: true,
        where: {
          username,
        },
      });
      if (found) {
        await adminModel.destroy({
          where: {
            username,
          },
        });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};
//To Delete All Admin
exports.deleteAllAdmin = async (req, res) => {
  try {
    await adminModel.destroy({ truncate: true, restartIdentity: true });
    res.send(true);
  } catch (error) {
    console.log(error.message);
  }
};

//get a user details
exports.getSingleAdmin = async (req, res) => {
  try {
    const { username } = req.params;
    if (username) {
      const found = await adminModel.findOne({
        attributes: ["id", "username"],
        where: {
          username,
        },
      });
      if (found) {
        res.send(found);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

//Login a admin
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if ((username, password)) {
      const found = await adminModel.findOne({
        where: {
          username,
          password,
        },
      });
      if (found) {
        res.send(true)
      } else res.send(false)
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};
