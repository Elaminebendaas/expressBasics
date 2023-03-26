const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const itemsRouter = require('./routes/items')
const port = 5000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/items', itemsRouter);



app.listen(port, () => {
    console.log("server is up and running!");
});

