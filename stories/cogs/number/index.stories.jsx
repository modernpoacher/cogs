import React from 'react'

import NumberCog from '#cogs/cogs/number'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Cogs/Number',
  component: NumberCog,
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

export function Value (args) {
  return (
    <NumberState value={1}>
      <NumberCog {...args} />
    </NumberState>
  )
}

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}

export function DefaultValue (args) {
  return (
    <NumberState defaultValue={1}>
      <NumberCog {...args} />
    </NumberState>
  )
}

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'number',
  name: 'number'
}
