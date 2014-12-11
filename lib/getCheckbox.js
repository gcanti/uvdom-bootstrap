'use strict';

/*

  Example:

  {
    label: 'Remember me',
    defaultChecked: true,
    checked: true,
    name: 'rememberMe',
    disabled: false,
    ref: 'input'
  }

*/

function getCheckbox(opts) {

  return {
    tag: 'div',
    attrs: {
      className: {
        'checkbox': true
      }
    },
    children: {
      tag: 'label',
      children: [
        {
          tag: 'input',
          attrs: {
            type: 'checkbox',
            defaultChecked: opts.defaultChecked,
            checked: opts.checked,
            name: opts.name,
            disabled: opts.disabled,
            value: 'true'
          },
          ref: opts.ref
        },
        ' ',
        opts.label
      ]
    }
  };
}

module.exports = getCheckbox;