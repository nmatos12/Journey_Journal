const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;

mongoose.connect(PORT ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/journey_journal_db');

module.exports = mongoose.connection;