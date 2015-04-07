'use strict';

function getRadio(attrs, text, key) {
  return {
    tag: 'div',
    attrs: {
      className: {
        'radio': true,
        'disabled': attrs.disabled
      }
    },
    children: {
      tag: 'label',
      attrs: {
        htmlFor: attrs.id,
      },
      children: [
        {
          tag: 'input',
          attrs: attrs
        },
        ' ',
        text
      ]
    },
    key: key
  };
}

module.exports = getRadio;