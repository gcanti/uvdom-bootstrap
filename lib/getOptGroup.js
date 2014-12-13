'use strict';

var getOption = require('./getOption');

/*

  Example:

  {
    label: 'group1',
    options: [
      {value: 'value1', text: 'description1'},
      {value: 'value3', text: 'description3'}
    ]
  }

*/

function getOptGroup(opts) {
  return {
    tag: 'optgroup',
    attrs: {
      disabled: opts.disabled,
      label: opts.label
    },
    children: opts.options.map(getOption),
    key: opts.label
  };
}

module.exports = getOptGroup;

