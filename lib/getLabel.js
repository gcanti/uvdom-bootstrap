'use strict';

var mixin = require('./mixin');

/*

  Example:

  {
    label: 'my label',
    for: 'inputId',
    srOnly: false,
    breakpoints: {
      lg: 8
    },
    align: 'right'
  }

*/

function getLabel(opts) {

  var className = {
    'control-label': true,
    'sr-only': opts.srOnly
  };
  if (opts.align) {
    className['text-' + opts.align] = true;
  }
  if (opts.className) {
    mixin(className, opts.className);
  }

  return {
    tag: 'label',
    attrs: {
      for: opts.for,
      className: className
    },
    children: opts.label
  };
}

module.exports = getLabel;

