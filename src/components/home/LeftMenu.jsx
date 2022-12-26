import PropTypes from 'prop-types'
import { Buttons } from './button'

export const LeftMenu = () => {
  return (
    <header className="left-menu">
      <nav>
        <Buttons src={'./assets/icons/menu.svg'} name={'Menu'} />
        <Buttons src={'./assets/icons/explorer.svg'} name={'Documents'} />
        <Buttons src={'./assets/icons/git-pull-request.svg'} name={'Git'} />
        <Buttons src={'./assets/icons/extensions.svg'} name={'Extensions'} />
      </nav>
      <nav className="btn-profile">
        <Buttons src={'./assets/icons/account.svg'} name={'Profile'} />
      </nav>
    </header>
  )
}

LeftMenu.defaultProps = {}
LeftMenu.propTypes = {}
