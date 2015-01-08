'use strict';

/*

  Example:

  {
    label: 'Remember me',
    defaultChecked: true,
    checked: true,
    name: 'rememberMe',
    disabled: false,
    onChange: function () {},
    autoFocus: true
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
      attrs: {
        htmlFor: opts.id
      },
      children: [
        {
          tag: 'input',
          attrs: {
            checked: opts.checked,
            disabled: opts.disabled,
            id: opts.id,
            name: opts.name,
            type: 'checkbox',
            autoFocus: opts.autoFocus
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