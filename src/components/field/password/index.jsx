/**
 * PasswordField component
 */
import React from 'react'
import classnames from 'classnames'
import { ValueField } from '@modernpoacher/cogs/components/field'

export default class PasswordField extends ValueField {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }

  render () {
    const {
      id,
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder
    } = this.props

    const className = this.getClassName()

    return (
      <input
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        accessKey={accessKey}
        placeholder={placeholder}
        onChange={this.handleChange}
        className={className}
        type='password'
        ref={this.setField}
      />
    )
  }
}

PasswordField.propTypes = {
  ...ValueField.propTypes
}

PasswordField.defaultProps = {
  ...ValueField.defaultProps
}
