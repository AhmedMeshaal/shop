const env = {
    database: 'shop',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    shop_image_path: 'C:/shop-ui/src/assets/img/uploads/',
    shop_root_path: 'C:/shop-ui/',
};

module.exports = env;
