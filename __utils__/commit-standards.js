module.exports = {
    values: ['conventional', 'custom'],
    dependentNpmPackages: {
        commitizen: {
            conventional: ['cz-conventional-changelog'],
            custom: ['cz-customizable'],
        },
        commitlint: {
            conventional: ['@commitlint/config-conventional'],
            custom: [],
        }
    }
};