require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/cogs/components/common/text-content')

log('`cogs` is awake')

const {
  default: TextContent
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = TextContent
