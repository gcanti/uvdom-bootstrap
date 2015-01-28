'use strict';

/*

  Example:

  {
    type: 'password',
    defaultValue: 'hello',
    value: 'hello',
    name: 'myname',
    disabled: false,
    placeholder: 'insert your name',
    readOnly: true,
    size: 'lg',
    events: {
      ...
    },
    'aria-describedby': 'password-tip',
    autoFocus: true
  }

*/

function getTextbox(opts) {

  var events = opts.events || {
    change: opts.onChange
  };

  var type = opts.type || 'text';
  var className = {
    'form-control': true
  };
  if (opts.size) {
    className['input-' + opts.size] = true;
  }

  return {
    tag: type === 'textarea' ? 'textarea' : 'input',
    attrs: {
      type: type === 'textarea' ? null : type,
      name: opts.name,
      defaultValue: opts.defaultValue,
      value: opts.value,
      disabled: opts.disabled,
      placeholder: opts.placeholder,
      readOnly: opts.readOnly,
      className: className,
      id: opts.id,
      'aria-describedby': opts['aria-describedby'],
      autoFocus: opts.autoFocus
    },
    events: events
  };
}

module.exports = getTextbox;