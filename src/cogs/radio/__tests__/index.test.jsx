import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { CheckCog } from '#cogs/cogs'
import Cog from '#cogs/cogs/radio'

import Title from '#cogs/cogs/radio/title'
import Description from '#cogs/cogs/radio/description'
import ErrorMessage from '#cogs/cogs/radio/error-message'
import Field from '#cogs/cogs/radio/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    getId () {
      return 'MOCK ID'
    }

    shouldComponentUpdate () {
      return true
    }

    renderTitle () {
      return 'MOCK TITLE'
    }

    renderDescription () {
      return 'MOCK DESCRIPTION'
    }

    renderErrorMessage () {
      return 'MOCK ERROR MESSAGE'
    }

    renderField () {
      return 'MOCK FIELD'
    }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderField()}
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderErrorMessage()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('#cogs/cogs/radio/title')
jest.mock('#cogs/cogs/radio/description')
jest.mock('#cogs/cogs/radio/error-message')
jest.mock('#cogs/cogs/radio/field')

class MockErrorMessage extends mockComponent {
  state = {}

  render () {
    return null
  }
}

describe('#cogs/cogs/radio', () => {
  beforeAll(() => {
    /*
     *  class defines `state` for instance
     */
    ErrorMessage.mockImplementation(() => new MockErrorMessage())
  })

  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
        />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderTitle`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderTitle)
            .toBeDefined()
        })
      })

      describe('`renderDescription`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderDescription)
            .toBeDefined()
        })
      })

      describe('`renderErrorMessage`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderErrorMessage)
            .toBeDefined()
        })
      })

      describe('`renderField`', () => {
        it('is defined', () => {
          return expect(Cog.prototype.renderField)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            description='MOCK DESCRIPTION'
            errorMessage='MOCK ERROR MESSAGE'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
            onClick={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(CheckCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'radio')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
          onClick={jest.fn()}
        />
      )

      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(CheckCog.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            description: 'MOCK CHANGE DESCRIPTION',
            errorMessage: 'MOCK CHANGE ERROR MESSAGE',
            value: 'MOCK CHANGE VALUE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            description: 'MOCK DESCRIPTION',
            errorMessage: 'MOCK ERROR MESSAGE',
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER'
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderTitle()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
          onClick={jest.fn()}
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderTitle()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Title />`', () => {
        return expect(Title)
          .toBeCalledWith({
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            disabled: true,
            required: true,
            readOnly: true
          }, {})
      })
    })

    describe('`renderDescription()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
          onClick={jest.fn()}
        />
      )

      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderDescription()
      })

      it('renders `<Description />`', () => {
        return expect(Description)
          .toBeCalledWith({
            description: 'MOCK DESCRIPTION'
          }, {})
      })
    })

    describe('`renderErrorMessage()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
          onClick={jest.fn()}
        />
      )

      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderErrorMessage()
      })

      it('renders `<ErrorMessage />`', () => {
        return expect(ErrorMessage)
          .toBeCalledWith({
            errorMessage: 'MOCK ERROR MESSAGE'
          }, {})
      })
    })

    describe('`renderField()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
          onClick={jest.fn()}
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()
      })

      it('invokes `getId`', () => {
        return expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Field />`', () => {
        return expect(Field)
          .toBeCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: expect.any(Function),
            onClick: expect.any(Function)
          }, {})
      })
    })
  })
})
