const db = require('../config/db.config');
const Banner = db.banner;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const env = require('../config/env.js');

// Fetch all Banners
exports.load_banner = (req, res) => {
    Banner.findAll().then(banners => {
        //    Send all products to the client
        res.json(banners);
        console.log(banners);
    });
};

// Post a Banner
exports.save_banner = (req, res) => {
    let banner = req.body;
    Banner.create(banner).then(result => {
        res.json(result);
        console.log(result);
    });
};