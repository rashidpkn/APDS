const express = require('express')
const router = express.Router()

const order = require('../controller/order')

router.route('/')
    .post(order.createOrder)//create a order
    .patch(order.deleteOrder)//delete a order

router.get('/rationCardNo', order.getByRationCardNo)//get all orders by ration card No
router.get('/rationShopNo', order.getByRationShopNo)//get all orders by ration shop no
router.patch('/dispatch-the-order', order.DispathTheOrder)//dispath the order


module.exports = router