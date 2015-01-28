'use strict';

/*

  Example:

  {
    label: 'Remember me',
    defaultChecked: true,
    checked: true,
    name: 'rememberMe',
    disabled: false,
    events: {
      ...
    },
    autoFocus: true
  }

*/

function getCheckbox(opts) {

  var events = opts.events || {
    change: opts.onChange
  };

  return {
    tag: 'div',
    attrs: {
      className: {
        'checkbox': true,
        'disabled': opts.disabled
      }
    },
    children: {
      tag: 'label',
      attrs: {
        htmlFor: opts.id
      },
      children: [
        {
          tag: 'input',
          attrs: {
            checked: opts.checked,
            disabled: opts.disabled,
            id: opts.id,
            name: opts.name,
            type: 'checkbox',
            autoFocus: opts.autoFocus
          },
          events: events
        },
        ' ',
        opts.label
      ]
    }
  }
}

module.exports = getCheckbox;