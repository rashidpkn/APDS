const orderModel = require('../model/orderModel')

exports.createOrder = async (req, res) => {
    try {
        const { rationCardNo, order, rationShopNo, totalPrice, category } = req.body
        if (rationCardNo && order && rationShopNo && totalPrice && category) {
            const found = await orderModel.findOne({ where: { rationCardNo, isDone: false } })
            if (!found) {
                await orderModel.create({
                    rationCardNo,
                    order,
                    rationShopNo,
                    totalPrice,
                    isDone: false,
                    category: category
                })
                res.send(true)
            } else res.send(false)
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const { rationCardNo } = req.body
        if (rationCardNo) {
            const found = await orderModel.findOne({ where: { rationCardNo, isDone: false } })
            if (found) {
                await orderModel.destroy({ where: { rationCardNo } })
                res.send(true)
            } else res.send(false)
        } res.send(false)
    } catch (error) {

    }
}

exports.getByRationCardNo = async (req, res) => {
    try {
        const { rationCardNo } = req.query
        if (rationCardNo) {
            res.send(await orderModel.findAll({ where: { rationCardNo }, raw: true }))
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}

exports.getByRationShopNo = async (req, res) => {
    try {
        const { rationShopNo } = req.query
        if (rationShopNo) {
            res.send(await orderModel.findAll({ where: { rationShopNo }, raw: true }))
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}


exports.DispathTheOrder = async (req, res) => {
    try {
        const { rationCardNo } = req.body
        if (rationCardNo) {
            const found = await orderModel.findOne({ where: { rationCardNo, isDone: false } })
            if (found) {
                await orderModel.update({ isDone: true }, { where: { rationCardNo } })
                res.send(true)
            } else res.send(false)
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}