const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/user/:uid/:type',(req,res) => {
    console.log(req.params) // {id: 'some values}
    console.log(req.params.id) //'some valules 
    console.log(req.params.type)
    console.log(req.query) //{key1:'value1'}
    res.status(200).send(`User Id is ${req.params.uid}`)
})
app.listen(port, () => {
    console.log(`Example app Listening at http://localhost:${port}`);

});

//module.exports = app; //common js export
export default app; //ES6 export/module