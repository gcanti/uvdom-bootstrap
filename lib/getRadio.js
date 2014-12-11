'use strict';

/*

  Example:

  {
    label: 'Option',
    defaultChecked: true,
    checked: true,
    value: '1',
    name: 'option',
    disabled: false,
    ref: 'input'
  }

*/

function getRadio(opts) {

  return {
    tag: 'div',
    attrs: {
      className: {
        'radio': true
      }
    },
    children: {
      tag: 'label',
      children: [
        {
          tag: 'input',
          attrs: {
            type: 'radio',
            value: opts.value,
            name: opts.name,
            defaultChecked: opts.defaultChecked,
            checked: opts.checked,
            disabled: opts.disabled
          },
          ref: opts.ref
        },
        ' ',
        opts.label
      ]
    },
    key: opts.value
  };
}

module.exports = getRadio;