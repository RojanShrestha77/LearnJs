const express = require('express')
const app = express()
const { success } = require('zod')

const auth = require('./routes/auth')
const people = require('./routes/people')

// makes everything inside the methods-public available to the  browser
app.use(express.static('./methods-public'))

// parse form data
// converts the data into the javascript object
// It only parses data that the frontend already sent.
app.use(express.urlencoded({extended: false}))


// ✔ It allows your backend to read JSON data sent by the frontend.
app.use(express.json())

app.use('/login',auth);

app.use('/api/people',people)









app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})