'use strict';

function getFieldset(opts) {

  var children = opts.children.slice();

  if (opts.legend) {
    children.unshift({
      tag: 'legend',
      children: opts.legend
    });
  }

  return {
    tag: 'fieldset',
    attrs: {
      className: opts.className,
      disabled: opts.disabled
    },
    children: children
  };
};

module.exports = getFieldset;

