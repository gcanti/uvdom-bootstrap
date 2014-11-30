'use strict';

var t = require('tcomb');
var getHelpBlock = require('./getHelpBlock');

var Checkbox = t.struct({
  ref: t.maybe(t.Str),
  name: t.maybe(t.Str),
  checked: t.maybe(t.Bool),
  defaultChecked: t.maybe(t.Bool),
  label: t.Any,
  help: t.Any,
  hasError: t.maybe(t.Bool),
  error: t.Any
}, 'Checkbox');

Checkbox.prototype.render = function () {
  var input = {
    tag: 'input',
    attrs: {
      name: this.name,
      type: 'checkbox',
      checked: this.checked,
      defaultChecked: this.defaultChecked
    },
    ref: this.ref
  };

  if (this.label) {
    input = {
      tag: 'label',
      children: [
        input,
        ' ',
        {
          tag: 'span',
          children: this.label
        }
      ]
    };
  }

  var help = this.help ? getHelpBlock(this.help) : null;
  var error = this.error ? getHelpBlock(this.error, {'error-block': true}) : null;

  var children = [input];
  if (help) { children.push(help); }
  if (error) { children.push(error); }

  // wrapper
  return {
    tag: 'div',
    attrs: {
      className: {
        checkbox: true,
        'has-error': this.hasError
      }
    },
    children: children
  };
};

module.exports = Checkbox;
