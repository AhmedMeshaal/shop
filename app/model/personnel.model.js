module.exports = (sequelize, Sequelize) => {
    const Personnel = sequelize.define('personnel', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        team_name: {
            type: Sequelize.STRING
        },
        afcas_id: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return Personnel;
}
