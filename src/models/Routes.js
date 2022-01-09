const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Routes = sequelize.define("routes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stop_start:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stop_end:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Routes;
