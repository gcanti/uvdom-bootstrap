'use strict';

var t = require('tcomb');
var Option = require('./Option');
var getLabel = require('./getLabel');
var getHelpBlock = require('./getHelpBlock');
var getFormGroup = require('./getFormGroup');

var Select = t.struct({
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
}, 'Select');

Select.prototype.render = function () {

  var options = this.options.map(function (option) {
    return option.render();
  });

  var input = {
    tag: 'select',
    attrs: {
      name: this.name,
      className: {
        'form-control': true
      },
      value: this.value,
      defaultValue: this.defaultValue
    },
    children: options,
    ref: this.ref
  };

  var label = this.label ? label(this.label) : null;
  var help = this.help ? getHelpBlock(this.help) : null;
  var error = this.error ? getHelpBlock(this.error, {'error-block': true}) : null;

  var children = [];
  if (label) { children.push(label); }
  children.push(input);
  if (error) { children.push(error); }
  if (help) { children.push(help); }

  if (!this.wrap) {
    return children;
  }

  return getFormGroup(children, {'has-error': this.hasError});
};

module.exports = Select;
