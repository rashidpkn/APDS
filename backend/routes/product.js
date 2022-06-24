const express = require('express')
const router = express.Router();

const product = require('../controller/product')

router.route('/')
    .get(product.getProducts)
    .post(product.addProduct)
    .patch(product.deleteProduct)

router.get('/category', product.category)


module.exports = router