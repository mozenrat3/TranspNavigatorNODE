const logger = require('../mongodb');
module.exports = {
    logging: false,
    host: 'localhost',
  dialect: 'postgres',
    define: { timestamps: false, hooks:{ 
       afterCreate : (record, options) => {
      let log = {
          type : 'afterCreate',
          model : JSON.stringify(record),
          date : Date.now()
      }
      logger.createDbLog(log);
  },

  afterDestroy : (record, options) => {
    console.log("Hello hook");
      let log = {
          type : 'afterDestroy',
          model : JSON.stringify(record),
          date : Date.now()
      }
      logger.createDbLog(log);
  }} }
  };
  