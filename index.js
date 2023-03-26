const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

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

app.use(bodyParser.json());


app.get('/items', (req, res) => {
    res.send(items);
});



app.post('/items', (req, res) =>{
    items.push(req.body);
    res.send("We have received your request and pushed to db")
});



app.delete('/items/:id', (req, res) => {
    res.send(` ${JSON.stringify(items[req.params.id - 1])} The item shown has been deleted no going back :P`);
    items.splice(req.params.id - 1, 1);
});


app.listen(port, () => {
    console.log("server is up and running!");
});

