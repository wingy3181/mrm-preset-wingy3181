const { execSync } = require('child_process');
const path = require('path');

const { packageJson, template } = require('mrm-core');
const kleur = require('kleur');

const validateCommitStandard = require('../__utils__/validate-commit-standard');

function task(config) {
  // Task configuration
  const { commit_standard } = config
    .defaults({
      'commit_standard': 'conventional',
    })
    .values();

  // Validate config
  if (!validateCommitStandard(commit_standard)) return;

  // .commit-msg-template
  template('.commit-msg-template', path.join(__dirname, `templates/.commit-msg-template/${commit_standard}`))
    .apply()
    .save();

  // git config --local commit.template '.commit-msg-template'
  try {
    console.log(kleur.green('Update `.git/config` with `commit.template` configuration'));
    execSync("git config --local commit.template '.commit-msg-template'");
  } catch (error) {
    console.log(kleur.red(`Error updating \`.git/config\` with \`commit.template\` configuration - [${error}]`));
  }

  // package.json => Add 'preinstall' npm script
  packageJson()
    .prependScript('preinstall', 'git config --local commit.template ".commit-msg-template"')
    .save()
}

task.description = 'Adds git commit message template to help it easier to follow git conventions';
module.exports = task;
