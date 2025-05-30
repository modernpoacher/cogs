require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/cogs/number/title')

log('`cogs` is awake')

const {
  default: Title
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Title
