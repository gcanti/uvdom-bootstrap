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
      className: className
    },
    children: opts.options,
    ref: opts.ref
  };
}

module.exports = getSelect;