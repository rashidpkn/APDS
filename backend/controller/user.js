const userModel = require("../model/userModel");

//get all User Details
exports.getUser = async (req, res) => {
  try {
    res.send(
      await userModel.findAll({
        attributes: [
          "id",
          "rationCardNo",
          "cardHolder",
          "rationShopNo",
          "category",
          "mobileNo",
        ],
        raw: true,
      })
    );
  } catch (error) {}
};

//create a user
exports.addUser = async (req, res) => {
  try {
    const {
      rationCardNo,
      cardHolder,
      rationShopNo,
      category,
      mobileNo,
      password,
    } = req.body;
    if (rationCardNo && cardHolder && rationShopNo && category && mobileNo) {
      const found = await userModel.findOne({
        where: { rationCardNo },
        raw: true,
      });
      if (!found) {
        await userModel.create({
          rationCardNo,
          cardHolder,
          rationShopNo,
          category,
          mobileNo: `+91${mobileNo}`,
          password: password ? password : "123",
        });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

//To remove a User
exports.removeUser = async (req, res) => {
  try {
    const { rationCardNo } = req.body;
    if (rationCardNo) {
      const found = await userModel.findOne({ where: { rationCardNo } });
      if (found) {
        await userModel.destroy({ where: { rationCardNo } });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};
//To Delete All User
exports.deleteAllUser = async (req, res) => {
  try {
    await userModel.destroy({ truncate: true, restartIdentity: true });
    res.send(true);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { rationCardNo, password } = req.body;
    if ((rationCardNo, password)) {
      const found = await userModel.findOne({
        where: { rationCardNo, password },
      });
      if (found) {
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {}
};

exports.getSingleUser = async (req, res) => {
  try {
    const { rationCardNo } = req.params;
    if (rationCardNo) {
      const found = await userModel.findOne({
        attributes: [
          "id",
          "rationCardNo",
          "cardHolder",
          "rationShopNo",
          "category",
          "mobileNo",
        ],
        where: { rationCardNo },
      });
      found ? res.send(found) : res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};
