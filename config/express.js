const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// var expressLayouts = require('express-ejs-layouts')
app.locals.estado = require('./../model/estado.json');

module.exports = () => {
  app.set('view engine', 'ejs');
  app.set('views', './views/');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.format({
      html() {
        res.render('layout');
      },
    });
  });
  app.get('/cadastro', (req, res) => {
    res.format({
      html() {
        res.render('CadastroProjeto/cadastro');
      },
    });
  });

  app.get('/Principal', (req, res) => {
    res.render('TelaPrincipal/home');
  });

  app.use('/css', express.static('public/css'));
  app.use('/js', express.static('public/js'));
  app.use('/tes', express.static('node_modules/materialize-css/dist'));
  app.use('/fonts', express.static('public/fonts'));
  app.use('/jquery', express.static('node_modules/jquery/dist'));
  app.use('/public', express.static('public'));

  return app;
};
