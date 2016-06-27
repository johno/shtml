const hx = require('hyperx')
const chalk = require('chalk')
const rainbow = require('chalk-rainbow')
const figures = require('figures')

module.exports = function shtml (html) {
  const tree = createAndTransformTree(html)
  return tree
}

const createAndTransformTree = hx((tagName, attrs, children) => {
  if (tagName === 'rainbow') {
    return rainbow(children.toString())
  } else if (tagName === 'p') {
    return children.join('') + '\n'
  } else if (tagName === 'ul') {
    return children.join('') + '\n'
  } else if (tagName === 'li') {
    return `${figures.bullet} ${children.join('')}`
  } else if (tagName === 'br') {
    return '\n'
  } else if (colors[tagName]) {
    return chalk[tagName](children.join(''))
  } else if (bgColors[tagName]) {
    return chalk[tagName](children.join(''))
  } else {
    return children.toString()
  }
})

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
