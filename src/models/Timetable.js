const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Timetable = sequelize.define("timetable", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  // transport_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  route_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // stop_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  weekdays:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  arrival_time:{
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Timetable;
