const db = require('../config/db.config');
const env = require('../config/env.js');
const Product = db.products;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var fs = require('fs');
var path = require('path');
var moment = require('moment');


const ProductDocument = db.productdocument;


// Fetch all Products
exports.load_product = (req, res) => {
    Product.findAll().then(products => {
    //    Send all products to the client
        res.json(products);
        console.log(products);
    });
};

// Fetch a single Product by ID
exports.findByPk = (req, res) => {
    Product.findByPk(req.params.productId).then(product => {
        res.json(product);
    });
};

// Post a Product
exports.save_product = (req, res) => {
    let product = req.body;
    Product.create(product).then(result => {
        res.json(result);
        console.log(result);
    });
};

// Update a Product
exports.update = (req, res) => {
    let product = req.body;
    let id = req.body.id;
    Product.update(product,
        { where: { id:id } }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a products with id = " +id})
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


exports.load_documents = (req, res) => {

    let ProductID = req.params.ProductID;
    console.log(ProductID);

    let sqlProduct = `SELECT productdocuments.id, productdocuments.ProductID, productdocuments.CategoryID, productdocuments.Remarks,
                productdocuments.Path, productdocuments.UploadedDate, productdocuments.UploadedBy
                FROM products, productdocuments WHERE products.id = productdocuments.ProductID AND ProductID='${ProductID}'`;

    const { QueryTypes } = require('sequelize');
    db.sequelize.query(sqlProduct,{
        type: QueryTypes.SELECT
    }).then(record => {

        if (record.length == 0) return  res.status(404).send('No Record');

        res.status(200).send({ "document_data": record});
        console.log(ProductID);
    });
};

// exports.get_categories_types = (req, res) => {
//
//     let sqlTypes = `SELECT id, Name FROM productdocumentcategory ORDER BY Name`;
//
//     const { QueryTypes } = require('sequelize');
//     db.sequelize.query(sqlTypes,{
//         type: QueryTypes.SELECT
//     }).then(record => {
//
//         if (record.length == 0) return  res.status(404).send('No Record');
//         res.status(200).send({ "document_types": record});
//     });
// };
