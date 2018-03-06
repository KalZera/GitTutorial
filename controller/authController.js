const express = require('express');
const Usuarios = require('../model/usuarios');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new Usuarios(req.body);
    await user.save();
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: 'Deu Ruim' });
  }
});

module.exports = app => app.use('/auth', router);
