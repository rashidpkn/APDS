const feedbackModel = require("../model/feedbackModel");

exports.getFeedback = async (req, res) => {
  try {
    res.send(await feedbackModel.findAll({ raw: true }));
  } catch (error) {
    console.log(error.message);
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const { rationCardNo, cardHolder, feedback } = req.body;
    if (rationCardNo && cardHolder && feedback) {
      await feedbackModel.create({
        rationCardNo,
        cardHolder,
        feedback,
      });
      res.send(true);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const found = await feedbackModel.findOne({ where: { id } });
      if (found) {
        await feedbackModel.destroy({ where: { id } });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {}
};

exports.readFeedback = async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const found = await feedbackModel.findOne({ where: { id } });
      if (found) {
        await feedbackModel.update({ isRead: true }, { where: { id } });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getFeedbackByRationCardNo = async (req, res) => {
  try {
    const { rationCardNo } = req.params;
    if (rationCardNo) {
      res.send(
        await feedbackModel.findAll({ where: { rationCardNo }, raw: true })
      );
    } else res.send(false);
  } catch (error) {}
};

exports.replayMessage = async (req, res) => {
  try {
    const { id, replayMessage } = req.body;
    if (id && replayMessage) {
      const found = await feedbackModel.findOne({ where: { id } });
      if (found) {
        await feedbackModel.update({ replayMessage }, { where: { id } });
        res.send(true);
      } else res.send(false);
    } else res.send(false);
  } catch (error) {
    console.log(error.message);
  }
};
