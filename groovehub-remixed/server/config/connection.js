require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/groovehub-remixed');

module.exports = mongoose.connection;