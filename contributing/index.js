const { execSync } = require('child_process');

const kleur = require('kleur');

function task(config) {
  const { contributingFile } = config
    .require('contributingFile')
    .values();
        
  try {
    console.log(kleur.green(`Downloading template for ${contributingFile}`));
    execSync(`curl https://raw.githubusercontent.com/nayafia/contributing-template/master/CONTRIBUTING-template.md --fail --output ${contributingFile}`);
  } catch (error) {
    console.log(kleur.red(`Error downloading template for ${contributingFile} - [${error}]`));
  }
}

task.description = 'Adds contributing guidelines';
module.exports = task;
