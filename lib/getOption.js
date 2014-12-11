'use strict';

/*

  Example:

  {
    value: '1',
    text: 'option 1'
  }

*/

function getOption(opts) {
  return {
    tag: 'option',
    attrs: {
      value: opts.value
    },
    children: opts.text,
    key: opts.value
  };
};

module.exports = getOption;

