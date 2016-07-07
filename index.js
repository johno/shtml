'use strict'

const hx = require('hyperx')
const chalk = require('chalk')
const rainbow = require('chalk-rainbow')
const figures = require('figures')
const windowSize = require('window-size')
const repeat = require('repeat-string')
const condenseWhitespace = require('condense-whitespace')
const isBlank = require('is-blank')
const isPresent = require('is-present')
const isWhitespace = require('is-whitespace')
const isNewline = require('is-newline')

const newlineTags = ['p', 'br', 'li', 'ul']

const create = (tagName, attrs, children) => {
  var out = ''

  const appendChildren = children => {
    if (!Array.isArray(children)) return

    for (var i = 0; i < children.length; i++) {
      var node = children[i]

      if (isBlank(node) && !isNewline(node)) continue

      if (Array.isArray(node)) {
        appendChildren(node)
        continue
      }

      if (typeof node === 'string') {
        out = `${out}${node}`
      }
    }
  }

  appendChildren(children)
  const transform = getTransformation(tagName)
  out = transform ? transform(out) : out

  if (tagName === 'li') {
    out = `${figures.bullet} ${out}`
  }

  if (newlineTags.indexOf(tagName) >= 0) {
    return `${out}\n`
  } else {
    return out
  }
}

const getTransformation = (tagName) => {
  if (colors[tagName]) {
    return chalk[tagName]
  } else if (bgColors[tagName]) {
    return chalk[tagName]
  } else if (modifiers[tagName]) {
    return chalk[tagName]
  } else if (tagName === 'rainbow') {
    return rainbow
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

module.exports = hx(create)
