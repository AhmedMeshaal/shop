const {Sequelize} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: Sequelize.STRING
        },
        product_description: {
            type: Sequelize.STRING
        },
        Path: {
            type: Sequelize.STRING
        },
        product_price: {
            type: Sequelize.DECIMAL
        },
        product_quantity: {
            type: Sequelize.INTEGER
        },
        size: {
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.STRING
        },
        UploadedOn: {
            type: Sequelize.DATE
        },
        FileName: {
            type: Sequelize.STRING
        },
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return Product;
}
