const env = require('./env.js');


const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    logging: false,
    operatorsAliases: 0,
    omitNull: false,
    dialectOptions: {
//    useUTC: true, // -->Add this line. for reading from database
    },
    timezone: '+08:00', // -->Add this line. for writing to database
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
// db.personnels = require('../model/personnel.model')(sequelize, Sequelize);
db.products = require('../model/products.model')(sequelize, Sequelize);
db.banner = require('../model/banner.model')(sequelize, Sequelize);
module.exports = db;
