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

// req.query sends the data to the backend received from the url
app.get('/api/v1/query',(req, res) => {
    const { search, limit} = req.query 
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    // if(limit) if the limit exist
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    } 
    if (sortedProducts.length < 1){
        res.status(200).send("no products matched  ur search")
    }
    // req.query receives data from the client (browser or frontend).
    // The client sends it in the URL query string, e.g.:
    // You take the full products array (from the backend)
    // Then you filter or limit it based on what the client requested (req.query)
    // This sends the filtered/limited products back to the client.
    // res is the output from the backend, going to the frontend.
    res.status(200).json(sortedProducts)


    // res.send('hello world')
})



app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})