'use strict'
var mdExtensions = require('markdown-extensions')

module.exports = function removeMarkdownExtension(filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError('remove-markdown-extension expected a string')
  }

  var mdExtRegex = mdExtensions.join('|')
  var regex = new RegExp('\\.(' + mdExtRegex + ')$', 'i')
  return filePath.replace(regex, '')
}
