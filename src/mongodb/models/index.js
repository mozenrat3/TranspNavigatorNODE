const mongoose = require('../mongoose');

const dbLog = require('./dbLogModel');
const httpLog = require('./httpLogModel');

module.exports = {
    dbLog : dbLog,
    httpLog : httpLog
}