const hx = require('hyperx')
const chalk = require('chalk')
const rainbow = require('chalk-rainbow')
const figures = require('figures')
const windowSize = require('window-size')
const repeat = require('repeat-string')
const isPresent = require('is-present')
const isWhitespace = require('is-whitespace')
const isNewline = require('is-newline')

module.exports = function shtml (html) {
  const tree = createAndTransformTree(html)
  return tree
}

const createAndTransformTree = hx((tagName, attrs, children) => {
  children = (children || []).filter(significantChild).join('')

  switch (tagName) {
    case 'rainbow':
      return rainbow(children)

    case 'p':
    case 'ul':
      return `${children}\n`

    case 'li':
      return `${figures.bullet} ${children}`

    case 'br':
      return '\n'

    case 'hr':
      return repeat('_', windowSize.width)

    default:
      return chalkTransformations(tagName, children)
  }
})

const chalkTransformations = (tagName, children) => {
  if (colors[tagName]) {
    return chalk[tagName](children)
  } else if (bgColors[tagName]) {
    return chalk[tagName](children)
  } else if (modifiers[tagName]) {
    return chalk[tagName](children)
  } else {
    return children
  }
}

const colors = {
  black: true,
  red: true,
  green: true,
  yellow: true,
  blue: true,
  magenta: true,
  cyan: true,
  white: true,
  gray: true
}

const bgColors = {
  bgBlack: true,
  bgRed: true,
  bgGreen: true,
  bgYellow: true,
  bgBlue: true,
  bgMagenta: true,
  bgCyan: true,
  bgWhite: true,
  bgGray: true
}

const modifiers = {
  reset: true,
  bold: true,
  dim: true,
  italic: true,
  underline: true,
  inverse: true,
  hidden: true,
  strikethrough: true
}

// We want to ignore any whitespace
// that isn't explicity added through
// a tag
const significantChild = str => (
  isPresent(str) || isWhitespace(str) && isNewline(str)
)
