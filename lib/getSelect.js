'use strict';

/*

  Example:

  {
    defaultValue: 'hello',
    value: 'hello',
    name: 'myname',
    disabled: false,
    size: 'lg',
    events: {
      ...
    },
    'aria-describedby': 'password-tip',
    autoFocus: false
  }

*/

function getSelect(opts) {

  var events = opts.events || {
    change: opts.onChange
  };

  var className = {
    'form-control': true
  };
  if (opts.size) {
    className['input-' + opts.size] = true;
  }

  return {
    tag: 'select',
    attrs: {
      name: opts.name,
      defaultValue: opts.defaultValue,
      value: opts.value,
      disabled: opts.disabled,
      className: className,
      multiple: opts.multiple,
      id: opts.id,
      // aria support
      'aria-describedby': opts['aria-describedby'],
      autoFocus: opts.autoFocus
    },
    children: opts.options,
    events: events
  };
}

module.exports = getSelect;