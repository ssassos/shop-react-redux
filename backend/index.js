const express = require('express');
const cors = require("cors");

const products = require("./products/products");

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Shopping Api');
})

app.get('/products', (req, res) => {
    res.send(products);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server started${port}`);
})