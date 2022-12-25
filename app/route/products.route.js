const products = require("../controller/products.controller");
module.exports = function(app) {

    const products = require('../controller/products.controller');

//    Retrieve all Products
    app.get('/api/products/load_product', products.load_product);

//    Retrieve Single Product
    app.get('/api/products/:productId', products.findByPk);

//    Create a new Product
    app.post('/api/products/save_product', products.save_product);

    // Update a Product
    app.put('/api/products/:productId', products.update);

    // Delete a Product
    app.delete('/api/products/:productId', products.delete);

//    Upload a new Image
//     app.post('api/products/upload_image/:productId', products.upload_image);

    app.get('/api/products/load_documents/:ProductID', products.load_documents);

    app.post('/api/products/upload_document/:ProductID', products.upload_document);

    app.post('/api/products/upload_image', products.upload_image);
}
