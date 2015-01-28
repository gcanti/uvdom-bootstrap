'use strict';

/*

  Example:

  {
    type: 'primary',
    block: true,
    active: true,
    size: 'lg',
    disabled: true,
    autoFocus: true,
    events: {
      ...
    }
  }

*/

function getButton(opts) {

  var type = opts.type || 'default';

  var className = {
    'btn': true,
    'btn-block': opts.block,
    'active': opts.active
  };
  className['btn-' + type] = true;
  if (opts.size) {
    className['btn-' + opts.size] = true;
  }

  var events = opts.events || {
    click: opts.click
  };

  return {
    tag: 'button',
    attrs: {
      disabled: opts.disabled,
      className: className,
      autoFocus: opts.autoFocus
    },
    events: events,
    children: opts.label,
    key: opts.key
  }
}

module.exports = getButton;
