import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Super from '#cogs/components/error-message'
import ErrorMessage from '#cogs/cogs/email/error-message'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/components/error-message', () => {
  return {
    __esModule: true,
    default: class MockErrorMessage extends mockComponent {
      getClassName () {
        return 'MOCK CLASSNAME'
      }

      render () {
        const { errorMessage } = this.props

        if (errorMessage) {
          return (
            <span className={this.getClassName()}>
              {errorMessage}
            </span>
          )
        }

        return null
      }
    }
  }
})

describe('#cogs/cogs/email/error-message', () => {
  describe('<ErrorMessage />', () => {
    describe('With required props', () => {
      const component = (
        <ErrorMessage />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(ErrorMessage.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ErrorMessage
            errorMessage='MOCK ERROR MESSAGE'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <ErrorMessage />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'email')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
