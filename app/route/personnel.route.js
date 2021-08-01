module.exports = function(app) {

    const personnels = require('../controller/personnel.controller');

    // Create a new Personnel
    app.post('/api/personnels', personnels.create);

    // Retrieve all Personnels
    app.get('/api/personnels', personnels.findAll);

    // Retrieve a single Personnel by Id
    app.get('/api/personnels/:personnelId', personnels.findByPk);

}
