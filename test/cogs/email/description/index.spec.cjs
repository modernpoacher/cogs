const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/email/description')

describe('#cogs/cogs/email/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
