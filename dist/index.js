
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-rba.cjs.production.min.js')
} else {
  module.exports = require('./sdk-rba.cjs.development.js')
}
