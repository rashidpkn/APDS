const express = require("express");
const router = express.Router();

const admin = require("../controller/admin");

router
  .route("/")
  .get(admin.getAdmin)
  .post(admin.addAdmin)
  .patch(admin.removeAdmin)
  .delete(admin.deleteAllAdmin);

router.get("/:username", admin.getSingleAdmin);
router.post("/login", admin.login);

module.exports = router;
