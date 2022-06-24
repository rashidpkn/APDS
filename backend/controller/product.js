const productModel = require('../model/productModel')

exports.getProducts = async (req, res) => {
    try {
        res.send(await productModel.findAll({ raw: true }))
    } catch (error) {
        console.log(error.message)
    }
}

exports.addProduct = async (req, res) => {
    try {
        const { productId, productName, category, quantity, unitPrice } = req.body
        if (productId && productName && category && quantity) {
            const found = await productModel.findOne({ where: { productId } })
            if (!found) {
                await productModel.create({
                    productId,
                    productName,
                    category,
                    quantity,
                    unitPrice: unitPrice ? unitPrice : 0
                })
                res.send(true)
            } else res.send(false)
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.body
        if (productId) {
            const found = await productModel.findOne({ where: { productId } })
            if (found) {
                await productModel.destroy({ where: { productId } })
                res.send(true)
            } else res.send(false)
        } else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}

exports.category = async (req, res) => {
    try {
        const { category } = req.query
        if (category) {
            res.send(await productModel.findAll({ where: { category }, raw: true }))
        } else res.send(false)
    } catch (error) {
        res.send(false)
    }
}