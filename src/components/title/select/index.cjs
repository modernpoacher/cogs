require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-cogs/components/title/select')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
