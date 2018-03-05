const express = require('express');
const User = require('../model/usuarios');

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log(req.client);
    try {
        const user = await User.create(req, body);

        return res.send({ user });

    } catch (error) {
        res.status(400).send({error: 'Deu Ruim' });
    }

});

module.exports = app => app.use('/auth', router);