const path = require('path');
const { json } = require('mrm-core');

function task(config) {
  const {
    name,
    email,
    url,
    github,
  } = config.require('name', 'email', 'url', 'github').values();

  const packageName = path.basename(process.cwd());
  const repository = `${github}/${packageName}`;

  const pkgJson = {
    name: packageName,
    version: '0.0.1',
    description: '',
    author: {
      name,
      email,
      url,
    },
    homepage: `https://github.com/${repository}`,
    license: 'MIT',
    keywords: [],
    engines: {
      node: '>=10',
    },
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
    },
    dependencies: {},
    devDependencies: {},
  };

  // Create package.json if doesn't exist already
  const pkg = json('package.json', pkgJson);
  pkg.save();
}

task.description = 'Adds package.json';
module.exports = task;