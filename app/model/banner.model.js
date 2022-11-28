const {Sequelize} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Banner = sequelize.define('banner', {
       id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       banner_title: {
           type: Sequelize.STRING
       },
       banner_subtitle: {
           type: Sequelize.STRING
        },
       banner_description: {
           type: Sequelize.STRING
       },
       banner_cover: {
           type: Sequelize.STRING
       }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return Banner;
}