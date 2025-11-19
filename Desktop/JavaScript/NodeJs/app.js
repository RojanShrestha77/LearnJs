const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))

app.get('/api/people', (req, res) => {
    res.status(200).json({sucess:true,data:people})
})

app.get('/login', (req, res) => {
    res.send('POST')
})

app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})