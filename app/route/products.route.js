const products = require("../controller/products.controller");
module.exports = function(app) {

    const products = require('../controller/products.controller');

//    Retrieve all Products
    app.get('/api/products', products.findAll);

//    Retrieve Single Product
    app.get('/api/products/:productId', products.findByPk);

//    Create a new Product
    app.post('/api/products', products.create);

    app.put('/api/products/:productId', products.update);

    app.delete('/api/products/:productId', products.delete);
}
