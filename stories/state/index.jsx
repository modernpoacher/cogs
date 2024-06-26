import debug from 'debug'

import { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

const log = debug('@modernpoacher/cogs/stories')

export default class State extends Component {
  state = {
    ...this.props
  }

  getChildren () {
    const { children } = this.props

    return children
  }

  render () {
    return this.getChildren()
  }
}

State.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]).isRequired
}

export class ValueState extends State {
  hasDefaultValue () {
    return (
      'defaultValue' in this.props
    )
  }

  mapChildren (children, props = {}) {
    return Children.map(children, (child) => {
      const {
        props: PROPS = {},
        props: {
          children: CHILDREN
        } = {}
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props,
          children: CHILDREN
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultValue()) {
      const { defaultValue } = this.state

      return this.mapChildren(
        children,
        {
          ...props,
          defaultValue,
          onChange: (value) => log(value)
        }
      )
    }

    const { value } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        value,
        onChange: (value) => {
          this.setState({ value }, () => log(value))
        }
      }
    )
  }
}

ValueState.propTypes = {
  ...State.propTypes
}

export class CheckState extends Component {
  state = {
    ...this.props
  }

  hasDefaultChecked () {
    return (
      'defaultChecked' in this.props
    )
  }

  mapChildren (children, props) {
    return Children.map(children, (child) => {
      const {
        props: PROPS
      } = child

      return cloneElement(
        child,
        {
          ...PROPS,
          ...props
        }
      )
    })
  }

  getChildren () {
    const { children, ...props } = this.props

    if (this.hasDefaultChecked()) {
      const { defaultChecked } = this.state

      return this.mapChildren(
        children,
        {
          ...props,
          defaultChecked: !!defaultChecked,
          onChange: (checked) => log(checked)
        }
      )
    }

    const { checked } = this.state

    return this.mapChildren(
      children,
      {
        ...props,
        checked: !!checked,
        onChange: (checked) => {
          this.setState({ checked }, () => log(checked))
        }
      }
    )
  }

  render () {
    return this.getChildren()
  }
}

CheckState.propTypes = {
  ...State.propTypes
}
