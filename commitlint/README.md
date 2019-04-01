# commitlint

[Mrm](https://github.com/sapegin/mrm) task that:
- Adds [commitlint][commitlint]
- `.commitlintrc.js` configuration with [commitlint][commitlint] rules configured based on the `commit_standard` configuration value
- Adds [husky](https://github.com/typicode/husky)
- Adds/Updates `.huskyrc` to include `commit-msg` git hook to lint the commit message

[commitlint]: https://conventional-changelog.github.io/commitlint/#/

## Usage

```
npm install -g mrm @wingy3181/mrm-preset-wingy3181
mrm commitlint --preset @wingy3181/mrm-preset-wingy3181
mrm commitlint --preset @wingy3181/mrm-preset-wingy3181 --config:commit_standard custom
```

## Options

See [Mrm docs](https://github.com/sapegin/mrm#usage) for more details.

### `commit_standard` (default: `conventional`, options: `conventional`, `custom`)

Commit standard to setup git template for.
- `conventional`: based on [conventional commits][cc]
- `custom`: is closely related to [conventional commits][cc] but allows customisation of types and scopes and other rules if required

[cc]: https://www.conventionalcommits.org/