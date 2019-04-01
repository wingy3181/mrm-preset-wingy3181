const { lines } = require('mrm-core');

// nvmrc
function task(config) {
  // Task configuration
  const { version } = config
  .defaults({
    version: '10'
  })
  .values();

  lines('.nvmrc')
    .set([version, ''])
    .save();
}

task.description = 'Adds .nvmrc';
module.exports = task;