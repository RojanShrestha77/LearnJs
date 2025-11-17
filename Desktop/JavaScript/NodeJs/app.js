const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req, res) => {
    const newProducts = products.map((product) => {
        const {id, name ,image} = product
        return {id, name, image}

    })
    res.json(newProducts)
})

//route params
app.get('/api/products/:productID',(req, res) => {
    // const productID = req.params.productID
    // {productID} sets the productID from the req.params its same like writing in above
    const {productID} = req.params; 

    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req, res) => {
    console.log(req.params)
    res.send('Hello world')
})
// to get single product
// app.get('/api/products/1', (req, res) => {
//     const singleProducts = products.find((product) => product.id === 1)

//     res.json(singleProducts)
// })
app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})