'use strict';

function getAlert(opts) {

  var type = opts.type || 'info';
  var className = {
    'alert': true
  };
  className['alert-' + type] = true;

  return {
    tag: 'div',
    attrs: {
      className: className,
      // aria support
      role: 'alert',
      'aria-live': 'assertive'
    },
    children: opts.children
  };
}

module.exports = getAlert;