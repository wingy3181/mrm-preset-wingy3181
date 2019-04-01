const kleur = require('kleur');

const { values: validCommitStandards } = require('./commit-standards');

function validateCommitStandard(commitStandard) {
  const isValidCommitStandard = validCommitStandards.includes(commitStandard);
  if (!isValidCommitStandard) {
    console.log(kleur.red(`Invalid commit standard: '${commitStandard}'. Type must be one of the following: ${validCommitStandards.join(', ')}`));
  }
  return isValidCommitStandard;
}

module.exports = validateCommitStandard;