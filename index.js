const hx = require('hyperx')
const chalk = require('chalk')
const rainbow = require('chalk-rainbow')
const figures = require('figures')
const windowSize = require('window-size')
const repeat = require('repeat-string')
const condenseWhitespace = require('condense-whitespace')
const isPresent = require('is-present')
const isWhitespace = require('is-whitespace')
const isNewline = require('is-newline')

module.exports = function shtml (html) {
  const tree = createAndTransformTree(html)
  console.log(tree.children)
  const cliDom = tree.children.map(stringifyNode).join('')
  return cliDom
}

const createAndTransformTree = hx((tagName, attrs, children) => {
  const node = { tagName, attrs, children }

  switch (tagName) {
    case 'rainbow':
      node.textTransform = rainbow
      break

    default:
      node.textTransform = chalkTransformations(tagName)
  }

  return node
})

const chalkTransformations = (tagName, children) => {
  if (colors[tagName]) {
    return chalk[tagName]
  } else if (bgColors[tagName]) {
    return chalk[tagName]
  } else if (modifiers[tagName]) {
    return chalk[tagName]
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
  bold: true,
  dim: true,
  italic: true,
  underline: true,
  hidden: true,
  strikethrough: true
}

const stringifyNode = nodeOrString => {
  if (typeof nodeOrString === 'string') {
    return nodeOrString
  }

  const node = nodeOrString

  if (isPresent(node.children)) {
    node.children = node.children
                      .map(stringifyNode)
  }

  if (node.tagName === 'br') {
    node.text = '\n'
  }

  if (node.tagName === 'hr') {
    node.text = repeat('_', windowSize.width)
  }

  let str = node.text || (node.children || []).map(c => c.trim()).join(' ')
  console.log('####')
  console.log(node)
  console.log(node.children)
  console.log(str)
  console.log('####')

  if (node.textTransform) {
    str = node.textTransform(str || node.text)
    console.log('transforming')
  }

  console.log('####')
  console.log(str)
  console.log('####')

  return str
}
