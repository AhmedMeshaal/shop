const db = require('../config/db.config');
const Personnel = db.personnels;

// Post a Personnel
exports.create = (req, res) => {
        let personnel = req.body;
        Personnel.create(personnel).then(result => {
            res.json(result);
        });
};

// Fetch all Personnels
exports.findAll = (req, res) => {
    Personnel.findAll().then(personnels => {
    //    Send all personnels to Client
        res.json(personnels);
    });
};

// Find a Personnel by Id
exports.findByPk = (req, res) => {
    Personnel.findByPk(req.params.personnelId).then(personnel => {
        res.json(personnel);
    })
};
