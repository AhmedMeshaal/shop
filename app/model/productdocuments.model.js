module.exports = (sequelize, Sequelize) => {
    const ProductDocuments = sequelize.define('productdocuments', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductID: {
            type: Sequelize.INTEGER
        },
        CategoryID: {
            type: Sequelize.INTEGER
        },
        Name: {
            type: Sequelize.STRING
        },
        Remarks: {
            type: Sequelize.STRING
        },
        Path: {
            type: Sequelize.STRING
        },
        UploadedDate: {
            type: Sequelize.DATE
        },
        UploadedBy: {
            type: Sequelize.STRING
        },
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return ProductDocuments;
}