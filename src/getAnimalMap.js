const data = require('../data/zoo_data');

function filterGenre(genre) {
  const animals = [];
  data.species.forEach((specie) => {
    const test = specie.residents.some((animal) => animal.sex === genre.sex);
    if (test) {
      animals.push(specie.name);
    }
  });
  return animals;
}
function speciesByLocation() {
  const animalsLocation = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((animal) => {
    animalsLocation[animal.location].push(animal.name);
  });
  return animalsLocation;
}
function getAnimalMap(options) {
  return speciesByLocation();
}
module.exports = getAnimalMap;
