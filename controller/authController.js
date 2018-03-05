const express = require('express');
const Usuario = require('../model/usuarios');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        console.log(Usuario);
        const user = await Usuario.create(req, body);

        return res.send({ user });

    } catch (error) {
        res.status(400).send({error: 'Deu Ruim' });
    }

});

module.exports = app => app.use('/auth', router);