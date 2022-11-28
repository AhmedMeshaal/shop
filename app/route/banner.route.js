const banners = require("../controller/banner.controller");
module.exports = function (app) {

    const banners = require('../controller/banner.controller');


    app.get('/api/banner/load_banner', banners.load_banner);

    app.post('/api/banner/save_banner', banners.save_banner);

}