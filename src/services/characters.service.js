const character = require('../models/Characters');

const findAllCharactersService = async () => {
  const characters = await character.find();
  return characters;
};

const findByIdCharacterService = async (idParam) => {
  const character = await character.findById(idParam);
  return character;
};

const createCharactersService = async (newCharacter) => {
  const createCharacter = await character.create(newCharacter);
  return createCharacter;
};

const updateCharactersService = async (idParam, editCharacter) => {
  const updateCharacter = await character.findByIdAndUpdate(
    idParam,
    editCharacter,
  );
  return [updateCharacter, editCharacter];
};

const deleteCharactersService = async (idParam) => {
  return await character.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharactersService,
  updateCharactersService,
  deleteCharactersService,
};
