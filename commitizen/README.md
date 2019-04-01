# commitizen

[Mrm](https://github.com/sapegin/mrm) task that adds:
- [commitizen][commitizen]
- `commit` npm script to run commitizen via `npx git-cz` 
- a [commitizen][commitizen] badge to `README.md`

[commitizen]: http://commitizen.github.io/cz-cli/

## Usage

```
npm install -g mrm @wingy3181/mrm-preset-wingy3181
mrm commitizen --preset @wingy3181/mrm-preset-wingy3181
mrm commitizen --preset @wingy3181/mrm-preset-wingy3181 --config:commit_standard custom
```

## Options

See [Mrm docs](https://github.com/sapegin/mrm#usage) for more details.

### `commit_standard` (default: `conventional`, options: `conventional`, `custom`)

Commit standard to setup git template for.
- `conventional`: based on [conventional commits][cc]
- `custom`: is closely related to [conventional commits][cc] but allows customisation of types and scopes and other rules if required

[cc]: https://www.conventionalcommits.org/
