const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

//app.use() registers middleware that runs for every request
// apply this middleware globally or for a specific route pattern.
// it muse be in order if i use it after home 
// it will be applied only from the about
app.use([ authorize, logger])//app.use('/api',logger)

app.get('/',  (req, res) => {
    res.send('Home')

})

app.get('/about',  (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})
  
app.get('/api/items', (req, res) => {
    res.send('items')
})

app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})