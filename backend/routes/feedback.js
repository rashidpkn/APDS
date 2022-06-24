const express = require("express");
const router = express.Router();

const feedback = require("../controller/feedback");

router
  .route("/")
  .get(feedback.getFeedback)
  .post(feedback.createFeedback)
  .patch(feedback.deleteFeedback);

router.patch("/read", feedback.readFeedback);

router.get("/:rationCardNo", feedback.getFeedbackByRationCardNo);

router.post("/replay", feedback.replayMessage);

module.exports = router;
