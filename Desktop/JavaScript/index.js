//patch = used to update the specific fields of a resource
// Put = update the full field or change it

import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Product Router
const productRouter = express.Router();

// GET all products
productRouter.get('/', (req, res) => {
    res.status(200).send('List of Products');
});

// GET product by id
productRouter.get('/pid/:pid', (req, res) => {
    res.status(200).send(`Product ID: ${req.params.pid}`);
});

// POST create product
productRouter.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send('Product Created');
});

// PUT full update product
productRouter.put('/pid/:pid', (req, res) => {
    console.log(req.body);
    res.status(200).send(`Product ${req.params.pid} Updated`);
});

// PATCH partial update product
productRouter.patch('/:pid/edit', (req, res) => {
    console.log(req.body);
    res.status(200).send(`Product ${req.params.pid} Partially Updated`);
});

// Attach product router
app.use('/product', productRouter);

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// User route with query parameters
app.get('/user/:uid/:type', (req, res) => {
    console.log(req.params); // { uid: '...', type: '...' }
    console.log(req.params.uid);
    console.log(req.params.type);
    console.log(req.query); // { key1: 'value1' }
    res.status(200).send(`User ID is ${req.params.uid}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;
