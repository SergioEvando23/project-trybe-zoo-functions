const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const newArray = [];
  ids.forEach((id) => {
    newArray.push(data.species.find((animal) => animal.id === id));
  });
  return newArray;
}

module.exports = getSpeciesByIds;
