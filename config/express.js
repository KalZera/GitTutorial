var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
// var expressLayouts = require('express-ejs-layouts')

module.exports = function(){
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './views/');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.get('/', function(req, res){
        res.format({
            html:function(){
                res.render('layout');
            }
        })
    });
    app.get('/cadastro', function(req, res){
        res.format({
            html:function(){
                res.render('CadastroProjeto/cadastro');
            }
        })
    });
    app.use('/css',express.static('public/css'));
    app.use('/js',express.static('public/js'));
    app.use('/tes',express.static('node_modules/materialize-css/dist'));
    app.use('/fonts',express.static('public/fonts'));
    app.use('/jquery',express.static('node_modules/jquery/dist'));
    
    return app;
}