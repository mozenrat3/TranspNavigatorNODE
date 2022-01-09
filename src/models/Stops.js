const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Stops = sequelize.define("stops", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  coords: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Stops;
