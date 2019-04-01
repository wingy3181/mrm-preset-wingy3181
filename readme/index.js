const path = require('path');
const { template, packageJson } = require('mrm-core');

function task(config) {
    const { name, url, github, readmeFile, licenseFile, contributingFile, packageName } = config
        .defaults({
            packageName: packageJson().get('name') || path.basename(process.cwd()),
        })
		.require('name', 'url', 'github', 'readmeFile', 'licenseFile', 'contributingFile', 'packageName')
		.values();

	// Create Readme.md (no update)
	const readme = template(readmeFile, path.join(__dirname, 'templates/README.md'));
	if (!readme.exists()) {
		readme
			.apply({
				name,
				url,
                github,
                readmeFile: readmeFile,
                licenseFile: licenseFile,
                contributingFile, contributingFile,
				package: packageName,
			})
			.save();
	}
}

task.description = 'Adds README.md file';
module.exports = task;