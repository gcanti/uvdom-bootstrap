'use strict';

module.exports = getLabel;

function getLabel(children) {
  return {
    tag: 'label',
    attrs: {
      className: {
        'control-label': true
      }
    },
    children: children
  };
}