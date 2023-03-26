const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())

let items = [
    {
        itemName: "Apple 🍎",
        price: 2.99,
        stock: 48
    },
    {
        itemName: "Carrot 🥕",
        price: 1.99,
        stock: 98
    }
];

router.get('/', (req, res) => {
    res.render("items", {items: items});
});


router.post('/', (req, res) => {
    const {name, price, stock} = req.body;
    console.log(req.body)

    items.push(
        {
            itemName: name,
            price: price,
            stock: stock

    })
    console.log(items);

    res.render("items", {items: items})


})






module.exports = router;