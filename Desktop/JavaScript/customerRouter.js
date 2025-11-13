import express from 'express';

const customerRouter = express.Router();

let customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

customerRouter.get('/users/all/get', (req,res) => {
    res.status(200).send('List of customers');
});

customerRouter.get('/users/one/:uid', (req,res) => {
    const uid = req.params.uid;
    res.status(200).send(`customoers detaisl ${uid}`)
})

customerRouter.post('/', (req,res) => {
    console.log(req.body);
        const newCustomer = { 
        id: customers.length + 1, 
        ...req.body 
    };
    products.push(newCustomer);
    res.status(201).json(newCustomer);

})

customerRouter.put('/:uid', (req, res) => {
    const uid = parseInt(req.params.pid);
    const index = customers.findIndex(p => p.id === pid);
    if (index !== -1) {
        customers[index] = { id: uid, ...req.body };
        res.send(`Updated customer ${uid}`);
    } else {
        res.status(404).send(`customer with ID ${uid} not found`);
    }
});

customerRouter.patch('/:uid/edit', (req, res) => {
    const uid = parseInt(req.params.pid);
    const customer = customers.find(p => p.id === uid);
    if (product) {
        Object.assign(customer, req.body);
        res.send(`Partially updated customer ${uid}`);
    } else {
        res.status(404).send(`customer ${uid} not found`);
    }
});


customerRouter.delete('/:uid', (req, res) => {
    const uid = parseInt(req.params.pid);
    const index = customers.findIndex(p => p.id === pid);
    if (index !== -1) {
        customers.splice(index, 1[0]);
        res.send(`Deleted product ${uid}`);
    } else {
        res.status(404).send(`Product with ID ${uid} not found`);
    }
});
