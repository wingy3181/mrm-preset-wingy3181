# TO DO
- ~~[x] As a developer using Cheong's dotfiles, I should be able to optionally use a git commit message convention~~
  - via `~/.nvm/default-packages` to install below npm packages globally no matter which node version is installed via nvm
    - [commitizen](http://commitizen.github.io/cz-cli/) - provides `git cz` command
    - [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) - provides configuration for commitizen via `.czrc` file or `config.commitizen.path` within `package.json`
- [-] As a developer using Cheong's dotfiles, I want to make it easy to follow the git commit message convention
  - Using git template:
      - `git config --global commit.template ".commit-msg-template"` (See dotfiles)
      - Using commitizen:
        - Do same as per existing project but install packages globally
          - i.e. `~/.czrc` (my dotfiles has this)
- [x] As a developer using Cheong's dotfiles, I should be able to customise the git commit message convention
- [x] As a developer, I want to enforce git commit message conventions in an existing node project
  - See `commitlint-101` and https://conventional-changelog.github.io/commitlint/#/
    - `npm install -D husky commitlint @commitlint/config-conventional`
    - `.huskyrc`
      ```
      {
        "hooks": {
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      }
      ```
    - `.commitlintrc.js` (commit lint uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig/) under the covers. See `@commitlint/load/src/index.js`)
      ```
      module.exports = {
        extends: ['@commitlint/config-conventional'],
        rules: {
            'subject-empty': [1, 'never']
        }
      };
      ```
- [x] As a developer, I want to make it easy to follow git commit message conventions in an existing node project
  - Using git template. See https://github.com/lennym/commit-template/issues/3
    - `git config --local commit.template ".commit-msg"`
  - Using commitizen:
    -  `npm install -D commitizen`
    - Choose an existing commitizen adapter or write your own one (See https://github.com/commitizen/cz-cli and https://github.com/SBoudrias/Inquirer.js/)
      -  `npm install -D cz-conventional-changelog` (https://github.com/commitizen/cz-conventional-changelog)
      -  `npm install -D cz-customizable` (https://github.com/leonardoanalista/cz-customizable#options)
      -  `npm install -D cz-jira-smart-commit` (https://github.com/commitizen/cz-jira-smart-commit)
    - Create `.czrc` file with following contents (path value will change depending on the adapter chosen):
      ```
      {
        "path": "node_modules/cz-jira-smart-commit"
      }
      ```
    - If using `cz-customizable`, create `.cz-config.js` file with contents similar to the following (See https://github.com/leonardoanalista/cz-customizable for more options):
      ```
      .
      ```
    - Optionally, create npm script to run commitizen:
      ```
      "scripts": {
        "commit": "npx git-cz"
      }
      ```
    - Optionally, add commitizen badge to your README
- [x] As a developer, I want to make to customise the git commit message convention in an existing node project
  - See above with use of `cz-customizable`
- [x] `.`commitlintrc.js` file using types and scopes from `.cz-config.js`
  - Similar to https://github.com/jlegrone/create-semantic-module (See https://github.com/jlegrone/create-semantic-module/blob/master/commitlint.config.js)
- [x] Use of mrm to linting of git commit messages for a project
- [x] Use of mrm to enforce git commit messages for a project

# Goals
- Enforce via Linting
- Easier to follow
  - Template
  - Commitizen

# Reference
## Example project that utilizes both commitlint and commitizen to creates command to easily add it to a new or existing project
-  https://github.com/jlegrone/create-semantic-module/
## Enforce
- `commitlint`: [docs](https://conventional-changelog.github.io/commitlint/#/) [source - monorepo with adapters](https://github.com/conventional-changelog/commitlint)

## Easier to follow
- `commitizen`: [source](https://github.com/commitizen/cz-cli)
  - Uses [`inquirer`](https://github.com/SBoudrias/Inquirer.js/) underneath covers which is passed to the adapters to control and get answers for interactive command line interface for questions
- `commitizen` adapters:
  - `cz-customizable`: [source](https://github.com/leonardoanalista/cz-customizable)
  - `cz-conventional-changelog`: [source](ccc)
  - `cz-jira-smart-commit`: [source](https://github.com/commitizen/cz-jira-smart-commit)

## Configuration loaders
- `commitlint` uses [`cosmiconfig`](https://github.com/davidtheclark/cosmiconfig)
  - File needs to be `commitlint.config.js`, `.commitlintrc.js`, `.commitlintrc.json`, or `.commitlintrc.yml` or in `package.json` and can be in any ancestor directory from current project directory to user's home directory
  - key under `package.json` is `commitlint`
- `commitizen` uses own config loader. See https://github.com/commitizen/cz-cli/blob/a70c063b06dbdf41af322dab06f83bfddd69149b/src/commitizen/configLoader.js
  - File needs to be `.czrc`, `.cz.json` or in `package.json` and only looks in current project directory and user's home directory
  - key under `package.json` is `config.commitizen.path`
- `cz-customizable` uses [`find-config`](https://github.com/shannonmoeller/find-config)
  - File needs to be `.cz-config.js` or in `package.json` and can be in any ancestor directory from current project directory to user's home directory
  - key under `package.json` is `config.cz-customisable.config`
