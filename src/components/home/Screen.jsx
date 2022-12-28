import { useState } from 'react'
import { Container } from './'

import { Buttons } from './button'

export const Screen = () => {
  const [state, setState] = useState('Profile')
  const setSectionHandler = (section) => {
    setState(section)
  }
  return (
    <>
      <header className="left-menu">
        <nav>
          <Buttons
            handleClick={() => setSectionHandler('Menu')}
            src={'./assets/icons/menu.svg'}
            name={'Menu'}
          />
          <Buttons
            handleClick={() => setSectionHandler('Projects')}
            src={'./assets/icons/explorer.svg'}
            name={'Documents'}
          />
          <Buttons
            handleClick={() => setSectionHandler('Git')}
            src={'./assets/icons/git-pull-request.svg'}
            name={'Git'}
          />
          <Buttons
            handleClick={() => setSectionHandler('Extensions')}
            src={'./assets/icons/extensions.svg'}
            name={'Extensions'}
          />
        </nav>
        <nav className="btn-profile">
          <Buttons
            handleClick={() => setSectionHandler('Profile')}
            src={'./assets/icons/account.svg'}
            name={'Profile'}
          />
        </nav>
      </header>
      <Container section={state} />
    </>
  )
}
