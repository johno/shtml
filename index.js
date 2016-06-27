const hx = require('hyperx')
const chalk = require('chalk')

module.exports = function shtml (html) {
  return createAndTransformTree(html)
}

const createAndTransformTree = hx((tagName, attrs, children) => {
  if (colors[tagName]) {
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
