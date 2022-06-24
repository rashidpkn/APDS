const shopModel = require("../model/shopModel");

//get all Shop Details
exports.getShop = async (req, res) => {
  try {
    res.send(
      await shopModel.findAll({
        attributes: [
          "id",
          "rationShopNo",
          "rationShopName",
          "shopKeeperName",
          "mobileNo",
        ],
        raw: true,
      })
    );
  } catch (error) {
    console.log(error.message);
  }
};

//create a Shop
exports.addShop = async (req, res) => {
  try {
    const { rationShopNo, rationShopName, shopKeeperName, mobileNo, password } =
      req.body;
    if (rationShopNo && rationShopName && shopKeeperName && mobileNo) {
      const found = await shopModel.findOne({
        where: { rationShopNo },
        raw: true,
      });
      if (!found) {
        await shopModel.create({
          rationShopNo,
          rationShopName,
          shopKeeperName,
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

//To remove a Shop
exports.removeShop = async (req, res) => {
  try {
    const { rationShopNo } = req.body;
    if (rationShopNo) {
      const found = await shopModel.findOne({
        where: { rationShopNo },
        raw: true,
      });
      if (found) {
        await shopModel.destroy({ where: { rationShopNo } });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

//To Delete All Shop
exports.deleteAllShop = async (req, res) => {
  try {
    await shopModel.destroy({ truncate: true, restartIdentity: true });
    res.send(true);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getSingleShop = async (req, res) => {
  try {
    const { rationShopNo } = req.params;
    if (rationShopNo) {
      const found = await shopModel.findOne({
        attributes: [
          "id",
          "rationShopNo",
          "rationShopName",
          "shopKeeperName",
          "mobileNo",
        ],
        where: { rationShopNo },
      });
      found ? res.send(found) : res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  const { rationShopNo, password } = req.body;
  try {
    if (rationShopNo && password) {
      const found = await shopModel.findOne({
        where: {
          rationShopNo,
          password,
        },
      });
      if (found) {
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {}
};
