const db = require('../config/db.config');
const Product = db.products;

// Fetch all Products
exports.findAll = (req, res) => {
    Product.findAll().then(products => {
    //    Send all products to the client
        res.json(products);
    });
};

// Fetch a single Product by ID
exports.findByPk = (req, res) => {
    Product.findByPk(req.params.productId).then(product => {
        res.json(product);
    });
};

// Post a Product
exports.create = (req, res) => {
    let product = req.body;
    Product.create(product).then(result => {
        res.json(result);
    });
};

// Update a Product
exports.update = (req, res) => {
    let product = req.body;
    let id = req.body.id;
    Product.update(product,
        { where: { id:id } }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a product with id = " +id})
    });
};

// Delete a Product
exports.delete = (req, res) => {
    const id = req.body.id;
    Product.destroy(
        { where: { id:id } }
    ).then(() => {
        res.status(200).json({msg:"deleted successfully a customer with id = " + id});
        });
};

