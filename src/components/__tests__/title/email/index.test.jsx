import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from 'shinkansen-cogs/components/title'
import Title from 'shinkansen-cogs/components/title/email'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/title', () => ({
  __esModule: true,
  default: class MockTitle extends mockComponent {
    getClassName () { }

    renderTextContent () { }

    render () {
      const { title } = this.props

      if (title) {
        const { id } = this.props

        return (
          <label htmlFor={id} className={this.getClassName()}>
            {this.renderTextContent()}
          </label>
        )
      }

      return null
    }
  }
}))

describe('shinkansen-cogs/components/title/email', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title id='MOCK ID' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Title
            id='MOCK ID'
            title='MOCK TITLE'
            required
            disabled
            readOnly
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
          <Title id='MOCK ID' />
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
