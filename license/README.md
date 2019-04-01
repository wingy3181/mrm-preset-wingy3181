# license

[Mrm](https://github.com/sapegin/mrm) task that adds license file based on `license` field in `package.json`.
Implementation is re-using the original [mrm-task-license](https://github.com/sapegin/mrm-tasks/tree/master/packages/mrm-task-license)

## What it does

- Creates a license file.

## Usage

```
npm install -g mrm @wingy3181/mrm-preset-wingy3181
mrm license --preset @wingy3181/mrm-preset-wingy3181
```

## Options

See [Mrm docs](https://github.com/sapegin/mrm#usage) for more details.

Below options are overriden by [`config.json`](../config.json)

### `license` (default from `config.json`: `MIT`, default: taken from `package.json`, if not found `MIT` is used)

License name (like `MIT`, `Unlicense`). For full list of supported values see: [`/templates`](./templates/).

### `licenseFile` (default from `config.json`: `LICENSE.md`, default: `License.md`)

File name.

### `name` (default from `config.json`: `Cheong Yip`, default: will try to read from your npm or Git config)

Your name.

### `email` (default from `config.json`: `wingy3181@gmail.com`, default: will try to read from your npm or Git config)

Your email.

### `url` (default from `config.json`: `https://wingcheongyip.com`, default: will try to read from your npm or Git config)

Your site URL.
