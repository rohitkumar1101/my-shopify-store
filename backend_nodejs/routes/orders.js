const express = require('express');
const router = express.Router();
const Orders = require('../models/Orders');

//Get all the orders
router.get('/', async (req, res) => {
    try{
        const showOrderData = await Orders.find()
        res.json(showOrderData)
    } catch(err) {
        res.json({msg: err})
    }
})

//When a order is placed on the shopify store
router.post('/', async (req,res) => { 
    const orderData = new Orders(req.body);
    try {
        const savedOrders = await orderData.save()
        res.json(savedOrders)
        console.log("We recieved an order from shopify")
    } catch (err) {
        res.json({msg: err})
    }
});

//Editing an order
router.put('/:orderId', async (req, res) => {
    try { 
        const updateOrder = await Orders.updateMany(
            { _id: req.params.orderId },
            { $set:
                {
                    "customer.email": req.body.email,
                    "customer.first_name": req.body.first_name,
                    "customer.last_name": req.body.last_name,
                    "customer.phone": req.body.phone,
                    "shipping_address.name": req.body.contact_name,
                    "shipping_address.phone": req.body.contact_phone,
                    "shipping_address.address1": req.body.address,
                }
            }
        )
        res.json(updateOrder)
    } catch (err) {
        res.json({msg: err})
    }
})


module.exports = router;