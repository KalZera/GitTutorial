var express = require('express')
var bodyParser = require('body-parser')
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
                res.render('pages/CadastroProjeto/cadastro');
            }
        })
    });
    return app;
}