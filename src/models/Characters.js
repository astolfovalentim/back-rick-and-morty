const mongoose = require('mongoose');

const charactersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
});

const character = mongoose.model('characters', charactersSchema);

module.exports = character;
