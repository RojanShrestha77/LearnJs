//practise
//make customerrouter ion a seperate file and import it here
//implement it on /customers path
//GET - /customers/users/all/get -> List of customers
//GET - /customers/users/one/:uid -> specific customer by id
//POST - /customers/users/new/add -> create customers
//PUT - /customers/users/:uid/update -> update customers
//DELETE - /customers/users/:uid/delete/one -> delete customers
//Only logic is enough, no need to acutally store data


import express from 'express';

const productRouter = express.Router();

let products = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 100 },
    { id: 3, name: 'Mango', price: 100 }
];

// Get all products
productRouter.get('/', (req, res) => {
    res.status(200).json(products);
});

// Get a product by ID
productRouter.get(
    '/:pid', 
    (req, res) => {
    const pid = parseInt(req.params.pid);
    const product = products.find(p => p.id === pid);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).send(`Product with ID ${pid} not found`);
    }
});

// Create a product
productRouter.post('/', (req, res) => {
    console.log(req.body);
    const newProduct = { 
        id: products.length + 1, 
        ...req.body 
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Full update (PUT)
productRouter.put('/:pid', (req, res) => {
    const pid = parseInt(req.params.pid);
    const index = products.findIndex(p => p.id === pid);
    if (index !== -1) {
        products[index] = { id: pid, ...req.body };
        res.send(`Updated product ${pid}`);
    } else {
        res.status(404).send(`Product with ID ${pid} not found`);
    }
});

// Partial update (PATCH)
productRouter.patch('/:pid/edit', (req, res) => {
    const pid = parseInt(req.params.pid);
    const product = products.find(p => p.id === pid);
    if (product) {
        Object.assign(product, req.body);
        res.send(`Partially updated product ${pid}`);
    } else {
        res.status(404).send(`Product with ID ${pid} not found`);
    }
});

// Delete a product
productRouter.delete('/:pid', (req, res) => {
    const pid = parseInt(req.params.pid);
    const index = products.findIndex(p => p.id === pid);
    if (index !== -1) {
        products.splice(index, 1);
        res.send(`Deleted product ${pid}`);
    } else {
        res.status(404).send(`Product with ID ${pid} not found`);
    }
});

export default productRouter;
