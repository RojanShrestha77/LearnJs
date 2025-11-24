const express = require('express')
const app = express()
const {people} = require('./data')
const { success } = require('zod')

// makes everything inside the methods-public available to the  browser
app.use(express.static('./methods-public'))

// parse form data
// converts the data into the javascript object
// It only parses data that the frontend already sent.
app.use(express.urlencoded({extended: false}))


// ✔ It allows your backend to read JSON data sent by the frontend.
app.use(express.json())



app.get('/api/people', (req, res) => {
    res.status(200).json({sucess:true,data:people})
})

app.post('/api/people', (req, res) => {
     const {name} = req.body;
     if (!name) {
        return res.status(400).json({success:false, msg: 'please provide your name value '})
     }
     res.status(201).send({success:true, person:name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg:"Please provide the credentials"})
    } 

    res.status(201).send({success: true, data: [...people,name]})
})
// post gets the data from the user 
// here the data is received from the form using the post
app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {        
        return res.status(200).send(` Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentails')
})

// app.put = its used for updating the data
app.put('/api/people/:id', (req, res)=> {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res.status(400).json( {success: false, msg: `person with the ${id} was not found`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name

        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople})
}) 


app.delete('/api/people/:id', (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(400).json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    // keep all the id that do not match the id provided in the url

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople})
})


app.listen(5000, () => {
    console.log("Server is running in the port 5000")
})