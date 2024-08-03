/**
 * PasswordDescription component
 */
import classnames from 'classnames'
import Description from '@modernpoacher/cogs/components/description'

export default class PasswordDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'password')
  }
}

PasswordDescription.propTypes = {
  ...Description.propTypes
}
