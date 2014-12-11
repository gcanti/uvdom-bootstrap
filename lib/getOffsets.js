'use strict';

function getOffsets(offsets, className) {
  className = className || {};
  for (var size in offsets) {
    if (offsets.hasOwnProperty(size)) {
      className['col-' + size + '-offset-' + (12 - offsets[size])] = true;
    }
  }
  return className;
}

module.exports = getOffsets;