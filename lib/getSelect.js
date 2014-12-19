'use strict';

/*

  Example:

  {
    defaultValue: 'hello',
    value: 'hello',
    name: 'myname',
    disabled: false,
    size: 'lg',
    ref: 'input'
  }

*/

function getSelect(opts) {

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
      id: opts.id
    },
    children: opts.options,
    events: {
      change: opts.onChange
    }
  };
}

module.exports = getSelect;