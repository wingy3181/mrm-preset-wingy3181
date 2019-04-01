# mrm-preset-wingy3181

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm](https://img.shields.io/npm/v/@wingy3181/mrm-preset-wingy3181.svg)](https://www.npmjs.com/package/@wingy3181/mrm-preset-wingy3181)

wingy3181's tasks via [presets](https://github.com/sapegin/mrm#custom-presets) for [Mrm](https://github.com/sapegin/mrm)

## Table of contents

<!-- To update run: npx markdown-toc --maxdepth 4 -i README.md -->

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Tasks and Aliases](#tasks-and-aliases)
  * [Tasks](#tasks)
  * [Aliases](#aliases)
- [Authors and license](#authors-and-license)
- [References:](#references)

<!-- tocstop -->

## Installation
```
npm install -g mrm @wingy3181/mrm-preset-wingy3181
```

## Usage 
Run a task or an alias:
```
mrm <task/alias> --preset @wingy3181/mrm-preset-wingy3181
```

Create an `mrm` alias to run mrm with preset by default:
```
alias mrm='mrm --preset @wingy3181/mrm-preset-wingy3181'
mrm <task/alias>
```

## Tasks and Aliases

### Tasks
- [commit-msg-template](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/commit-msg-template)
- [commitizen](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/commitizen)
- [commitlint](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/commitlint)
- [contributing](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/contributing)
- [editorconfig](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/editorconfig)
- [gitignore](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/gitignore)
- [license](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/license)
- [nvm](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/nvm)
- [package](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/package)
- [readme](https://github.com/wingy3181/mrm-preset-wingy3181/tree/master/readme)

### Aliases
- commit
  1. commit-msg-template
  2. commitizen
  3. commitlint 
- project
  1. contributing
  2. editorconfig
  3. gitignore
  4. license
  5. readme
- js
  1. package
  2. nvm
  3. contributing
  4. editorconfig
  5. gitignore
  6. license
  7. readme

## Change log

The change log can be found on the [Releases page](https://github.com/wingy3181/mrm-preset-wingy3181/releases) or [CHANGELOG.md](CHANGELOG.md).

## Authors and license

[Cheong Yip](https://wingcheongyip.com) and [contributors](https://github.com/wingy3181/mrm-preset-wingy3181/graphs/contributors).

See the included [LICENSE.md](LICENSE.md) file.

## References:
- https://github.com/jlegrone/create-semantic-module
- https://github.com/commitizen/cz-cli
- https://github.com/sapegin/mrm
- https://github.com/sapegin/mrm-core
- https://github.com/sapegin/mrm-tasks
- https://github.com/MichaelDanilov/mrm-preset-michaeldanilov