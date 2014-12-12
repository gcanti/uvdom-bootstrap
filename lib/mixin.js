'use strict';

function mixin(a, b) {
  if (!b) { return a; }
  for (var k in b) {
    if (b.hasOwnProperty(k)) {
      a[k] = b[k];
    }
  }
  return a;
}

module.exports = mixin;