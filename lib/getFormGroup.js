'use strict';

function getFormGroup(opts) {

  var className = {
    'form-group': true,
    'has-error': opts.hasError
  };
  if (opts.className) {
    className[opts.className] = true;
  }

  return {
    tag: 'div',
    attrs: {
      className: className
    },
    children: opts.children
  };
}

module.exports = getFormGroup;