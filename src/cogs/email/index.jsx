/**
 * EmailCog component
 */
import React from 'react'
import classnames from 'classnames'

import { ValueCog } from '@modernpoacher/cogs/cogs'
import Title from '@modernpoacher/cogs/components/title/email'
import Description from '@modernpoacher/cogs/components/description/email'
import ErrorMessage from '@modernpoacher/cogs/components/error-message/email'
import Field from '@modernpoacher/cogs/components/field/email'

export default class EmailCog extends ValueCog {
  getClassName () {
    return classnames(super.getClassName(), 'email')
  }

  handleChange = (value) => {
    const {
      onChange,
      name
    } = this.props

    onChange(name, value)
  }

  renderTitle () {
    const id = this.getId()

    const {
      title,
      required,
      disabled,
      readOnly
    } = this.props

    return (
      <Title
        id={id}
        title={title}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
      />
    )
  }

  renderDescription () {
    const {
      description
    } = this.props

    return (
      <Description
        description={description}
      />
    )
  }

  renderErrorMessage () {
    const {
      errorMessage
    } = this.props

    return (
      <ErrorMessage
        errorMessage={errorMessage}
      />
    )
  }

  renderField () {
    const id = this.getId()

    const {
      name,
      value,
      defaultValue,
      required,
      disabled,
      readOnly,
      tabIndex,
      accessKey,
      placeholder,
      fieldRef
    } = this.props

    return (
      <Field
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
        fieldRef={fieldRef}
      />
    )
  }
}

EmailCog.propTypes = {
  ...ValueCog.propTypes
}

EmailCog.defaultProps = {
  ...ValueCog.defaultProps
}
