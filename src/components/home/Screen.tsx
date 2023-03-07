import { useState } from 'react'
import { Container } from './'
import { Buttons, Nav } from './base'

export const Screen = (): JSX.Element => {
  const [state, setState] = useState('Profile')
  const setSectionHandler = (section: string): void => {
    setState(section)
  }
  return (
    <>
      <header className='left-menu'>
        <Nav setSectionHandler={setSectionHandler} />
        <nav className='btn-profile'>
          <Buttons
            BProps={{
              src: './assets/icons/account.svg',
              name: 'Profile',
              handleClick: () => setSectionHandler('Profile')
            }}
          />
        </nav>
      </header>
      <Container Container={{ section: state }} />
    </>
  )
}
