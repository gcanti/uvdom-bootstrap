'use strict';

function getBreakpoints(breakpoints) {
  var className = {};
  for (var size in breakpoints) {
    if (breakpoints.hasOwnProperty(size)) {
      className['col-' + size + '-' + breakpoints[size]] = true;
    }
  }
  return className;
}

module.exports = getBreakpoints;