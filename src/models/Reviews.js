const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Reviews = sequelize.define("reviews", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  route_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment:{
    type: Sequelize.STRING
  },
  rate:{
    type: Sequelize.INTEGER,
  },
  dates:{
    type: Sequelize.DATE,
  }
});

module.exports = Reviews;
