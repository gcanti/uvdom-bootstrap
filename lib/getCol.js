'use strict';

var getBreakpoints = require('./getBreakpoints');

function getCol(opts) {

  var className = null;
  if (opts.breakpoints) {
    className = getBreakpoints(opts.breakpoints);
  }

  return {
    tag: 'div',
    attrs: {
      className: className
    },
    children: opts.children
  };
}

module.exports = getCol;