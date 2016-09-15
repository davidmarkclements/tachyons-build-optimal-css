# tachyons-build-optimal-css

Transpile Tachyons PostCSS to vanilla CSS, optionally supply a whitelist
for optimal CSS output.

This build process also removes comments, autoprefixes, and has options for minifying the output or repeating class selectors (to play nice with overly specific CSS frameworks).

## Installation

```bash
npm install --save-dev tachyons-build-optimal-css
```

## Usage

```javascript
const fs = require('fs')
const build = require('tachyons-build-optimal-css')

const input = fs.readFileSync('input.css', 'utf8')

build(input, {
  from: 'input.css',
  to: 'output.css',
  minify: true,
  whitelist: ['w4', 'w2', 'mw4'],
}).then(result => {
  fs.writeFileSync('output.css', result.css)
})
```

#### Options

| Option | Default | Description | Values |
| ------ | ------- | ----------- | ------ |
| `from` | `undefined` | The input file name | file name |
| `to` | `undefined` | The output file name | file name |
| `minify` | `false` | Minify the output CSS | `true`, `false` |
| `repeat` | `false` | Whether to repeat classes in selectors | `1..10` |
| `whitelist` | `{}` | Restrict output CSS to whitelist | tachyons classes |

## License

MIT
