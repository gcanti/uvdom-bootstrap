'use strict';

function getFieldset(opts) {
  var children = opts.children.slice();
  if (opts.legend) {
    children.unshift({
      tag: 'legend',
      children: opts.label
    });
  }
  return {
    tag: 'fieldset',
    attrs: {
      className: {
        'has-error': opts.hasError
      }
    },
    children: children
  };
};

module.exports = getFieldset;

