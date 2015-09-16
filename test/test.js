'use strict'

var assert = require('assert')
var removeMarkdownExtension = require('..')

describe('remove-markdown-extension', function () {

  it('should do remove markdown extensions', function () {
    ['pages/foobar.md', 'pages/foobar.markdown', 'pages/foobar.mdown', 'pages/foobar.MaRkDoWn'].forEach(function (filePath) {
      assert.equal(removeMarkdownExtension(filePath), 'pages/foobar')
    })
  })

  it('does nothing when no markdown extension exists', function () {
    assert.equal(removeMarkdownExtension('pages/foo.md.other-stuff.html'), 'pages/foo.md.other-stuff.html')
  })
})
