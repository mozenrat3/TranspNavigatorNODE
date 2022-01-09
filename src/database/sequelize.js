const Sequelize = require("sequelize");
const config = require("../config/sequelize");
const sequelize = new Sequelize('ForProject', 'postgres', '12345',config
);

module.exports = sequelize;

// sequelize
//   .authenticate()
//   .then(() => console.log('Connected.'))
//   .catch((err) => console.error('Connection error: ', err));
