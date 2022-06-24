const express = require("express");
const router = express.Router();

const shop = require("../controller/shop");

router
  .route("/")
  .get(shop.getShop)
  .post(shop.addShop)
  .patch(shop.removeShop)
  .delete(shop.deleteAllShop);

router.get("/:rationShopNo", shop.getSingleShop);

router.post("/login", shop.login);

module.exports = router;
