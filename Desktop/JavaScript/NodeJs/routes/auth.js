const express = require('express')
const router = express.Router();


// post gets the data from the user 
// here the data is received from the form using the post
router.post('/', (req, res) => {
    const {name} = req.body;
    if (name) {        
        return res.status(200).send(` Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentails')
})

module.exports = router