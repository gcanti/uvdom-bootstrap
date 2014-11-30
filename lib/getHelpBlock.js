'use strict';

var t = require('tcomb');

module.exports = getHelpBlock;

function getHelpBlock(children, className) {
  return {
    tag: 'span',
    attrs: {
      className: t.util.mixin({
        'help-block': true
      }, className)
    },
    children: children
  };
}