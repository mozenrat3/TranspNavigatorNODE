const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const RoutesStops = sequelize.define("routes_stops", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  stop_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  route_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sort:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = RoutesStops;
