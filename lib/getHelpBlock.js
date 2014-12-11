'use strict';

/*

  Example:

  {
    help: 'my help',
    hasError: true
  }

*/

function getHelpBlock(opts) {
  return {
    tag: 'span',
    attrs: {
      className: {
        'help-block': true,
        'error-block': opts.hasError
      }
    },
    children: opts.help
  };
}

module.exports = getHelpBlock;

