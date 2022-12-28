import { useState } from 'react'
import { Container } from './'

import { Buttons, Nav } from './base'

export const Screen = () => {
  const [state, setState] = useState('Profile')
  const setSectionHandler = (section) => {
    setState(section)
  }
  return (
    <>
      <header className="left-menu">
        <Nav setSectionHandler={setSectionHandler} />
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
