# shtml [![Build Status](https://secure.travis-ci.org/johnotander/shtml.svg?branch=master)](https://travis-ci.org/johnotander/shtml) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Style shell output in an html-like fashion.
This library draws inspiration from [chx](https://github.com/zeit/chx) but differs because it uses JavaScript template literals.

Requires no transpilation or babelscript.

## Installation

```bash
npm install --save shtml
```

## Usage

```javascript
const shtml = require('shtml')

console.log(shtml`
  <ul>
    <li>Item <red>A</red></li>
    <li>Item <rainbow>B</rainbow></li>
  </ul>
`)

console.log(shtml`
  <span>
    <rainbow>Hello, world!</rainbow><br>
    <underline>This is pretty neat.</underline>
  </span>
`)
```

#### Supported tags

Tag | Usage | Description
--- | ---   | -----------
`<p>` | `<p>...</p>` | Wrapper for text, adds a new line to the end
`<br>` | `<br>` | Adds a newline
`<hr>` | `<hr>` | Adds a horizontal rule
`<ul>` | `<ul><li>Item A</li><li>Item B</li></ul>` | Adds an unordered list with bullet points
`<color>` | `<red>...</red>` | Color the text, see the [supported colors](#colors) below
`<bgcolor>` | `<bgcyan>...</bgcyan>` | Color the background of text, see the [supported colors](#colors) below
`<rainbow>` | `<rainbow>...</rainbow>` | Get rainbow colored text

#### Colors

In order to color console text, `shtml` uses [`chalk`](https://npmjs.com/package/chalk).
The following colors are supported:

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
