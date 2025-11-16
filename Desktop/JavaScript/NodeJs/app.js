const express = require('express')

const app = express()

//setup static and middleware
app.use(express.static('./public'))

//resolve = combines paths and converts to an absolute path
// join = it also joins paths safely without converting to absolute
// app.get('/',(req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navabar-app/index.html'))

// })
// adding to static assets 
// SSR


app.all('*', (req,res) => {
    res.status(404).send("Resource Not Found")

})

app.listen(5000,() => {
    console.log("Server is listening on port 5000")
})

