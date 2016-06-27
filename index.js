const hx = require('hyperx')
const chalk = require('chalk')
const rainbow = require('chalk-rainbow')
const figures = require('figures')

module.exports = function shtml (html) {
  const tree = createAndTransformTree(html)
  return tree
}

const createAndTransformTree = hx((tagName, attrs, children) => {
  children = (children || []).join('')

  if (tagName === 'rainbow') {
    return rainbow(children)
  } else if (tagName === 'p') {
    return children + '\n'
  } else if (tagName === 'ul') {
    return children + '\n'
  } else if (tagName === 'li') {
    return `${figures.bullet} ${children}`
  } else if (tagName === 'br') {
    return '\n'
  } else if (colors[tagName]) {
    return chalk[tagName](children)
  } else if (bgColors[tagName]) {
    return chalk[tagName](children)
  } else if (modifiers[tagName]) {
    return chalk[tagName](children)
  } else {
    return children
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
