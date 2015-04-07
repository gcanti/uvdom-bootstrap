'use strict';

function getCheckbox(attrs, label) {
  return {
    tag: 'div',
    attrs: {
      className: {
        'checkbox': true,
        'disabled': attrs.disabled
      }
    },
    children: {
      tag: 'label',
      attrs: {
        htmlFor: attrs.id
      },
      children: [
        {
          tag: 'input',
          attrs: attrs
        },
        ' ',
        label
      ]
    }
  };
}

module.exports = getCheckbox;