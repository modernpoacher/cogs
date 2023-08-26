import React from 'react'

import NumberCog from '@modernpoacher/cogs/cogs/number'
import NumberState from '#stories/state/number'

export default {
  title: 'Stories/Cogs/Number',
  component: NumberCog,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    }
  }
}

export const Value = (args) => (
  <NumberState value={1}>
    <NumberCog {...args} />
  </NumberState>
)

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

export const DefaultValue = (args) => (
  <NumberState defaultValue={1}>
    <NumberCog {...args} />
  </NumberState>
)

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
