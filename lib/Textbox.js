'use strict';

var t = require('tcomb');
var getLabel = require('./getLabel');
var getHelpBlock = require('./getHelpBlock');
var getFormGroup = require('./getFormGroup');

var TextboxType = t.enums.of('hidden text textarea password color date datetime datetime-local email month number range search tel time url week', 'TypeAttr');

var Textbox = t.struct({
  ref: t.maybe(t.Str),
  type: t.maybe(TextboxType),
  name: t.maybe(t.Str),
  value: t.maybe(t.Str),
  defaultValue: t.maybe(t.Str),
  placeholder: t.maybe(t.Str),
  label: t.Any,
  help: t.Any,
  hasError: t.maybe(t.Bool),
  error: t.Any,
  wrap: t.maybe(t.Bool) // wrap with form-group
}, 'Textbox');

Textbox.prototype.render = function () {
  var type = this.type || 'text';

  if (type === 'hidden') {
    return {
      tag: 'input',
      attrs: {
        name: this.name,
        type: 'hidden',
        value: this.value,
        defaultValue: this.defaultValue
      },
      ref: this.ref
    };
  }

  var tag = (type === 'textarea') ? 'textarea' : 'input';
  var type = (type === 'textarea') ? null : type;

  var input = {
    tag: tag,
    attrs: {
      name: this.name,
      type: type,
      placeholder: this.placeholder,
      className: {
        'form-control': true
      },
      value: this.value,
      defaultValue: this.defaultValue
    },
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

module.exports = Textbox;
