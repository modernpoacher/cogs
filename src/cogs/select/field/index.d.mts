declare module '#cogs/cogs/select/field' {
  import Field from '#cogs/components/field'

  export default class SelectField extends Field {}
}

declare module '@modernpoacher/cogs/cogs/select/field' {
  export { default } from '#cogs/cogs/select/field'
}
