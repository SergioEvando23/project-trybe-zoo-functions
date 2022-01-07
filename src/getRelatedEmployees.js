const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const isManagerId = managers.some((manager) => manager === id);
  return isManagerId;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employees = data.employees
      .filter((employee) => employee.managers.some((manager) => manager === managerId));
    return employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// Questão referenciada sob ajuda do aluno Laecio Silva turma xp - B
