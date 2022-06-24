const express = require("express");
const router = express();

const notification = require("../controller/notification");

router
  .route("/")
  .get(notification.getNotification)
  .post(notification.createNotification)
  .patch(notification.deleteNotification);

module.exports = router;
