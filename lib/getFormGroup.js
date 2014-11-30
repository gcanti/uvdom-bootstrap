'use strict';

var t = require('tcomb');

module.exports = getFormGroup;

function getFormGroup(children, className) {
  return {
    tag: 'div',
    attrs: {
      className: t.util.mixin({
        'form-group': true
      }, className)
    },
    children: children
  };
}