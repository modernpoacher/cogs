require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets|@modernpoacher\/gremlins)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/cogs/textarea/title')

log('`cogs` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
