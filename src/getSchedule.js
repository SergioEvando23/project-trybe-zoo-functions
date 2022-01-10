const { hours, species } = require('../data/zoo_data');

function getAvailabilityByDay(day) {
  return species.reduce((acc, specie) => {
    if (specie.availability.includes(day)) {
      acc.push(specie.name);
    }
    return acc;
  }, []);
}

function createSchedule(daysTarget) {
  return daysTarget.reduce((acc, day) => {
    if (day === 'Monday') {
      acc[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return acc;
    }
    acc[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getAvailabilityByDay(day),
    };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  const speciesNames = species.map((specie) => specie.name);
  const days = Object.keys(hours);

  if (speciesNames.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  if (!scheduleTarget || !days.includes(scheduleTarget)) {
    return createSchedule(days);
  }
  if (scheduleTarget) {
    return createSchedule([scheduleTarget]);
  }
}

module.exports = getSchedule;
getSchedule();


//Função completa com a ajuda do aluno Laecio Silva turma xp - b