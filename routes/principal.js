const express = require('express');
const router = express.Router();
const app = express();

//rota para pagina principal
router.get('/Principal', (req, res) => {
    res.render('TelaPrincipal/home');
  });

module.exports = router;