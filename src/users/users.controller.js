const userService = require('./users.service');

const createUserController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;

  if (!name || !username || !email || !password || !photo) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'name', 'username', 'email', 'password' ou 'photo'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: 'Usuário já existe!',
    });
  }
  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({
      message: 'Erro ao criar Usuário!',
    });
  }

  res.status(201).send(user);
};
const findAllUserController = async (req, res) => {
  res.send({ message: 'Create Find All ok' });
};

module.exports = { createUserController, findAllUserController };
