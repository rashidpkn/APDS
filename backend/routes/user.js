var express = require("express");
var router = express.Router();

const user = require("../controller/user");

router
  .route("/")
  .get(user.getUser)
  .post(user.addUser)
  .patch(user.removeUser)
  .delete(user.deleteAllUser);

router.get("/:rationCardNo", user.getSingleUser);

router.post("/login", user.login);

module.exports = router;
