const Sequelize = require('sequelize');

const db = require('../__db');

const Example = db.define('example', {
    something: {
        type: Sequelize.STRING,
        allowNull: false
    },
    somethingElse: {
        type: Sequelize.INTEGER
    }
})

module.exports = Example;