const notificationModel = require("../model/notificationModel");

exports.getNotification = async (req, res) => {
  try {
    res.send(await notificationModel.findAll({ raw: true }))
  } catch (error) {
    console.log(error.message);
  }
};

exports.createNotification = async (req, res) => {
  try {
    const { notification } = req.body
    if (notification) {
      await notificationModel.create({ notification })
      res.send(true)
    } else res.send(false)
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const { id } = req.body
    if (id) {
      const found = await notificationModel.findOne({ where: { id } })
      if (found) {
        notificationModel.destroy({ where: { id } })
        res.send(true)
      } else res.send(false)
    }
    else res.send(false)
  } catch (error) {
    console.log(error.message);
  }
};
