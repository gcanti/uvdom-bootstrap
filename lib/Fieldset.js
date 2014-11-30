'use strict';

var t = require('tcomb');

var Fieldset = t.struct({
  label: t.Any,
  fields: t.list(t.Any)
}, 'Fieldset');

Fieldset.prototype.render = function () {
  var children = this.fields;
  if (this.label) {
    children.unshift({
      tag: 'legend',
      children: this.label
    });
  }
  return {
    tag: 'fieldset',
    children: children
  };
};

module.exports = Fieldset;

