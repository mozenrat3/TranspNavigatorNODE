const { Sequelize } = require('sequelize')



// Вариант 2: передача параметров по отдельности (для других диалектов)
const sequelize = new Sequelize('ForProject', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres' /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch((err) => console.error('Connection error: ', err));


 //sequelize.close()