const express = require('express');
const router = express.Router();
const speakeasy = require('speakeasy');
const User = require('../models/User');
const Token = require('../models/Token');
const TokenUsage = require('../models/TokenUsage');

router.post('/register', async (req, res) => {
  try {
    const { username, secret } = req.body;
    const user = await User.create({ username, secret });

    // Genera el primer token
    const token = speakeasy.totp({
      secret: user.secret,
      encoding: 'base32',
      step: 30,
    });

    await Token.create({ UserId: user.id, token });

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el registro de usuario' });
  }
});

router.get('/generarToken/:cliente', async (req, res) => {
  try {
    const { cliente } = req.params;
    const user = await User.findOne({ where: { username: cliente } });

    if (!user) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Verificar si ya existe un token no usado para este usuario
    let token = await Token.findOne({ where: { UserId: user.id, used: false } });

    if (!token) {
      // Genera un nuevo token
      token = speakeasy.totp({
        secret: user.secret,
        encoding: 'base32',
        step: 30,
      });

      await Token.create({ UserId: user.id, token });
    }

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la generación de token' });
  }
});

router.get('/usarToken/:cliente/:token', async (req, res) => {
  try {
    const { cliente, token } = req.params;
    const user = await User.findOne({ where: { username: cliente } });

    if (!user) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    // Buscar el token correspondiente al usuario y marcarlo como usado
    const userToken = await Token.findOne({ where: { UserId: user.id, token, used: false } });

    if (!userToken) {
      return res.status(401).json({ error: 'Token no válido o ya usado' });
    }

    // Registrar el uso del token
    await TokenUsage.create({ UserId: user.id, TokenId: userToken.id });

    // Marcar el token como usado
    await userToken.update({ used: true });

    res.json({ message: 'Token utilizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la autenticación' });
  }
});

module.exports = router;
