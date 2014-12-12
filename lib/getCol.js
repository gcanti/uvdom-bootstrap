'use strict';

var getBreakpoints = require('./getBreakpoints');

function getCol(opts) {

  var className = opts.breakpoints ? getBreakpoints(opts.breakpoints) : null;

  return {
    tag: 'div',
    attrs: {
      className: className
    },
    children: opts.children
  };
}

module.exports = getCol;