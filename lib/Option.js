'use strict';

var t = require('tcomb');

var Option = t.struct({
  value: t.Str,
  text: t.Str
}, 'Option');

Option.prototype.render = function () {
  return {
    tag: 'option',
    attrs: {
      value: this.value
    },
    children: this.text
  };
};

module.exports = Option;

