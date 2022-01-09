const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Transport = sequelize.define("transport", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  
  type:{
    type: Sequelize.STRING
  }
});

module.exports = Transport;
