const kleur = require('kleur');
const fs = require('fs');
const path = require('path');
const { install, markdown, packageJson, template } = require('mrm-core');

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

  // .czrc
  template('.czrc', path.join(__dirname, `templates/.czrc/${commit_standard}`))
    .apply()
    .save();

  // .cz-config.js
  const czConfigTemplatePath = path.join(__dirname, `templates/.cz-config.js/${commit_standard}`);
  if (fs.existsSync(czConfigTemplatePath)) {
    template('.cz-config.js', czConfigTemplatePath)
      .apply()
      .save();
  }

  // package.json => Add 'commit' npm script
  packageJson()
    .setScript('commit', 'npx git-cz')
    .save()

  // Add commitizen badge to README.md
  try {
    markdown('README.md')
      .addBadge(
        `https://img.shields.io/badge/commitizen-friendly-brightgreen.svg`,
        `http://commitizen.github.io/cz-cli/`,
        'Commitizen friendly'
      )
      .save();
  } catch (error) {
    console.error(kleur.red('Missing README.md or header within README.md to update with badge'));
  }

  // npm install
  const packages = ['commitizen'];
  packages.push(...dependentNpmPackages.commitizen[commit_standard]);
  install(packages, { dev: true });
}

task.description = 'Adds commitizen to help it easier to follow git conventions';
module.exports = task;
