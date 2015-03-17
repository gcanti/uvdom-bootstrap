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
    autoFocus: true,
    className: 'myClassName'
  }

*/

function getCheckbox(opts) {

  var events = opts.events || {
    change: opts.onChange
  };

  var className = null;
  if (opts.className) {
    className = {};
    className[opts.className] = true;
  }

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
            autoFocus: opts.autoFocus,
            className: className
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