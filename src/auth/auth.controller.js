const authService = require('./auth.service');

const loginController = async (req, res) => {
  res.send({ message: 'Login ok' });
};

module.exports = { loginController };
