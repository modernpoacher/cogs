declare module '@modernpoacher/cogs/components/title' {
  import React from 'react'

  export interface TitleProps {
    id: string
    title: string
    required: boolean
    disabled: boolean
    readOnly: boolean
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Title extends React.Component<TitleProps> {}
}
