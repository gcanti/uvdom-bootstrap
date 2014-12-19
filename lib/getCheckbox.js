'use strict';

/*

  Example:

  {
    label: 'Remember me',
    defaultChecked: true,
    checked: true,
    name: 'rememberMe',
    disabled: false,
    onChange: function () {}
  }

*/

function getCheckbox(opts) {

  return {
    tag: 'div',
    attrs: {
      className: {
        'checkbox': true,
        'disabled': opts.disabled
      }
    },
    children: {
      tag: 'label',
      children: [
        {
          tag: 'input',
          attrs: {
            type: 'checkbox',
            checked: opts.checked,
            disabled: opts.disabled,
            defaultChecked: opts.defaultChecked,
            name: opts.name,
            value: 'true'
          },
          events: {
            change: opts.onChange
          }
        },
        ' ',
        opts.label
      ]
    }
  }
}

module.exports = getCheckbox;