declare namespace CogsTypes {
  export type OnChangeType = () => void

  export type AnswerDefinitionType = {
    answer: {
      title: string
      value: string | string[]
    }
    changeAnswer: {
      text: string
      href: string
      visuallyHiddenText?: string
    }
  }

  export type ErrorDefinitionType = {
    type: string,
    uri: string,
    params: {
      expectedType: string
    }
  }

  export type ComponentsType = {}

  export type FieldChangeType = {
    text: string,
    href: string
  }

  export type FieldErrorType = {
    text: string,
    href: string
  }
}

declare module 'shinkansen-cogs/cogs' {
  import React from 'react'

  export type CogProps = {
    id: string,
    name: string,
    title: string,
    description: string,
    errorMessage: CogsTypes.ErrorDefinitionType,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    placeholder: string,
    onChange: CogsTypes.OnChangeType
  }

  export default class Cog extends React.Component<CogProps> {}
}

declare module 'shinkansen-cogs/cogs/checkbox' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class CheckboxCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/email' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class EmailCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/number' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class NumberCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/password' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class PasswordCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/radio' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class RadioCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/select' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class SelectCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/text' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class TextCog extends Cog {}
}

declare module 'shinkansen-cogs/cogs/textarea' {
  import Cog from 'shinkansen-cogs/cogs'

  export default class TextareaCog extends Cog {}
}

declare module 'shinkansen-cogs/components/common/disabled' {
  import React from 'react'

  export default function Disabled(): React.JSX.Element
}

declare module 'shinkansen-cogs/components/common/readonly' {
  import React from 'react'

  export default function ReadOnly(): React.JSX.Element
}

declare module 'shinkansen-cogs/components/common/required' {
  import React from 'react'

  export default function Required(): React.JSX.Element
}

declare module 'shinkansen-cogs/components/common/text-content' {
  import React from 'react'

  export type TextContentProps = {
    textContent: string
  }

  export default function TextContent(props: TextContentProps): React.JSX.Element
}

declare module 'shinkansen-cogs/components/description' {
  import React from 'react'

  export type DescriptionProps = {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module 'shinkansen-cogs/components/description/checkbox' {
  import Description from 'shinkansen-cogs/components/description'

  export default class CheckboxDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/email' {
  import Description from 'shinkansen-cogs/components/description'

  export default class EmailDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/number' {
  import Description from 'shinkansen-cogs/components/description'

  export default class NumberDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/password' {
  import Description from 'shinkansen-cogs/components/description'

  export default class PasswordDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/radio' {
  import Description from 'shinkansen-cogs/components/description'

  export default class RadioDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/select' {
  import Description from 'shinkansen-cogs/components/description'

  export default class SelectDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/text' {
  import Description from 'shinkansen-cogs/components/description'

  export default class TextDescription extends Description {}
}

declare module 'shinkansen-cogs/components/description/textarea' {
  import Description from 'shinkansen-cogs/components/description'

  export default class TextareaDescription extends Description {}
}

declare module 'shinkansen-cogs/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = CogsTypes.ErrorDefinitionType

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module 'shinkansen-cogs/components/error-message/checkbox' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class CheckboxErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/email' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class EmailErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/number' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class NumberErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/password' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class PasswordErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/radio' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class RadioErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/select' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class SelectErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/text' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class TextErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/error-message/textarea' {
  import ErrorMessage from 'shinkansen-cogs/components/error-message'

  export default class TextareaErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-cogs/components/field' {
  import React from 'react'

  export type FieldProps = {
    id: string,
    name: string,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    tabIndex: number,
    accessKey: string,
    placeholder: string,
    onChange: CogsTypes.OnChangeType
  }

  export default class Field extends React.Component<FieldProps> {}
}

declare module 'shinkansen-cogs/components/field/checkbox' {
  import Field from 'shinkansen-cogs/components/field'

  export default class CheckboxField extends Field {}
}

declare module 'shinkansen-cogs/components/field/email' {
  import Field from 'shinkansen-cogs/components/field'

  export default class EmailField extends Field {}
}

declare module 'shinkansen-cogs/components/field/number' {
  import Field from 'shinkansen-cogs/components/field'

  export default class NumberField extends Field {}
}

declare module 'shinkansen-cogs/components/field/password' {
  import Field from 'shinkansen-cogs/components/field'

  export default class PasswordField extends Field {}
}

declare module 'shinkansen-cogs/components/field/radio' {
  import Field from 'shinkansen-cogs/components/field'

  export default class RadioField extends Field {}
}

declare module 'shinkansen-cogs/components/field/select' {
  import Field from 'shinkansen-cogs/components/field'

  export default class SelectField extends Field {}
}

declare module 'shinkansen-cogs/components/field/text' {
  import Field from 'shinkansen-cogs/components/field'

  export default class TextField extends Field {}
}

declare module 'shinkansen-cogs/components/field/textarea' {
  import Field from 'shinkansen-cogs/components/field'

  export default class TextareaField extends Field {}
}

declare module 'shinkansen-cogs/components/title' {
  import React from 'react'

  export type TitleProps = {
    id: string,
    title: string,
    required: boolean,
    disabled: boolean,
    readOnly: boolean,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Title extends React.Component<TitleProps> {}
}

declare module 'shinkansen-cogs/components/title/checkbox' {
  import Title from 'shinkansen-cogs/components/title'

  export default class CheckboxTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/email' {
  import Title from 'shinkansen-cogs/components/title'

  export default class EmailTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/number' {
  import Title from 'shinkansen-cogs/components/title'

  export default class NumberTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/password' {
  import Title from 'shinkansen-cogs/components/title'

  export default class PasswordTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/radio' {
  import Title from 'shinkansen-cogs/components/title'

  export default class RadioTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/select' {
  import Title from 'shinkansen-cogs/components/title'

  export default class SelectTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/text' {
  import Title from 'shinkansen-cogs/components/title'

  export default class TextTitle extends Title {}
}

declare module 'shinkansen-cogs/components/title/textarea' {
  import Title from 'shinkansen-cogs/components/title'

  export default class TextareaTitle extends Title {}
}

declare module 'shinkansen-cogs/transformers/error-message' {
  export default function transform (error: CogsTypes.ErrorDefinitionType): CogsTypes.FieldErrorType
}

declare module 'shinkansen-cogs' {
  export { default as CheckboxCog } from 'shinkansen-cogs/cogs/checkbox'
  export { default as EmailCog } from 'shinkansen-cogs/cogs/email'
  export { default as NumberCog } from 'shinkansen-cogs/cogs/number'
  export { default as PasswordCog } from 'shinkansen-cogs/cogs/password'
  export { default as RadioCog } from 'shinkansen-cogs/cogs/radio'
  export { default as SelectCog } from 'shinkansen-cogs/cogs/select'
  export { default as TextCog } from 'shinkansen-cogs/cogs/text'
  export { default as TextareaCog } from 'shinkansen-cogs/cogs/textarea'
}