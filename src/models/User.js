const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");
const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    login: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
      type: Sequelize.STRING(50),
            allowNull: false
    },
    email:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
    }
  },
},
  {
      timestamps: false
    }
  );
  
  module.exports = User;
