const fs = require('fs');
const path = require('path');

const { install, json, template } = require('mrm-core');

const validateCommitStandard = require('../__utils__/validate-commit-standard');
const { dependentNpmPackages } = require('../__utils__/commit-standards');

function task(config) {
  // Task configuration
  const { commit_standard } = config
    .defaults({
      'commit_standard': 'conventional',
    })
    .values();

  // Validate config
  if (!validateCommitStandard(commit_standard)) return;

  // .huskyrc
  const huskyrc = json('.huskyrc')
  huskyrc.set('hooks.commit-msg', 'commitlint -E HUSKY_GIT_PARAMS').save();

  // .commitlintrc.js
  template('.commitlintrc.js', path.join(__dirname, `templates/.commitlintrc.js/${commit_standard}${fs.existsSync('.cz-config.js') ? '.commitizen' : ''}`))
    .apply()
    .save();

  // npm install
  const packages = ['husky', 'commitlint'];
  packages.push(...dependentNpmPackages.commitlint[commit_standard]);
  install(packages, { dev: true });
}

task.description = 'Adds commitlint to enforce git conventions';
module.exports = task;
