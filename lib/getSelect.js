'use strict';

/*

  Example:

  {
    defaultValue: 'hello',
    value: 'hello',
    name: 'myname',
    disabled: false,
    ref: 'input'
  }

*/

function getSelect(opts) {

  return {
    tag: 'select',
    attrs: {
      name: opts.name,
      defaultValue: opts.defaultValue,
      value: opts.value,
      disabled: opts.disabled,
      className: {
        'form-control': true
      }
    },
    children: opts.options,
    ref: opts.ref
  };
}

module.exports = getSelect;