const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bares');
mongoose.Promise = global.Promise;

module.exports = mongoose;