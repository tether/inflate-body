/**
 * Dependencies.
 */

const inflate = require('inflation')
const raw = require('raw-body')


/**
 * Unzip a HTTP stream and validate its buffer size.
 *
 * @param {HttpIncomingMessage} request
 * @param {Object} options
 * @return {Promise}
 * @api public
 */

module.exports = function (request, options) {
  return raw(inflate(request, options.encoding || 'utf-8'), options)
}
