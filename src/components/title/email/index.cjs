require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-cogs/components/title/email')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
