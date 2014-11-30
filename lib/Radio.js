'use strict';

var t = require('tcomb');
var Option = require('./Option');
var getLabel = require('./getLabel');
var getHelpBlock = require('./getHelpBlock');
var getFormGroup = require('./getFormGroup');

var Radio = t.struct({
  ref: t.maybe(t.Str),
  name: t.maybe(t.Str),
  value: t.maybe(t.Str),
  defaultValue: t.maybe(t.Str),
  options: t.list(Option),
  label: t.Any,
  help: t.Any,
  hasError: t.maybe(t.Bool),
  error: t.Any,
  wrap: t.maybe(t.Bool) // wrap with form-group
}, 'Radio');

Radio.getRadio = function (option, name, ref, defaultChecked) {
  return {
    tag: 'div',
    attrs: {
      className: {
        radio: true
      }
    },
    children: {
      tag: 'label',
      children: [
        {
          tag: 'input',
          attrs: {
            type: 'radio',
            name: name,
            value: option.value,
            defaultChecked: defaultChecked
          },
          ref: ref
        },
        option.text
      ]
    }
  };
};

Radio.prototype.render = function () {

  var radios = this.options.map(function (option, i) {
    return Radio.getRadio(
      option,
      this.name,
      this.ref + i,
      option.value === this.defaultValue
    );
  }.bind(this));

  var label = this.label ? label(this.label) : null;
  var help = this.help ? getHelpBlock(this.help) : null;
  var error = this.error ? getHelpBlock(this.error, {'error-block': true}) : null;

  var children = [];
  if (label) { children.push(label); }
  children = children.concat(radios);
  if (error) { children.push(error); }
  if (help) { children.push(help); }

  if (!this.wrap) {
    return children;
  }

  return getFormGroup(children, {'has-error': this.hasError});
};

module.exports = Radio;
