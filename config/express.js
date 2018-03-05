const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./../controller/authController')(app);

// var expressLayouts = require('express-ejs-layouts')
app.locals.estado = require('./../model/estado.json');
const index = require('./../routes/index');

app.set('view engine', 'ejs');
app.set('views', './views/');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',index);
  

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/fonts', express.static('public/fonts'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
// app.use('/tes', express.static('node_modules/materialize-css/dist'));
// app.use('/public', express.static('public'));


  module.exports = app;