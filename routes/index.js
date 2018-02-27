const express = require('express');
const router = express.Router();
const app = express();
const model = require('./../model/usuarios')();
// const principal = require('./principal');

//  rota de acesso ao index/layout
router.get('/', (req, res) => {
        res.render('layout');
});
// rota de acesso ao form de cadastro
router.get('/cadastro', (req, res) => {
    res.render('CadastroProjeto/cadastro');
 });

// router.use('/Principal', principal);

 //rota para pagina principal
router.get('/Principal', (req, res) => {
   res.render('TelaPrincipal/home');
});

        // rota para cadastro de usuario
router.post('/add', (req,res) =>{
        let body = req.body;
        body.status = false;

        console.log(req);
});




 module.exports = router;