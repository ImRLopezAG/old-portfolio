import { Buttons } from './'

export const Nav = ({ setSectionHandler }) => {
  const menu = [
    {
      name: 'Menu',
      src: './assets/icons/menu.svg',
    },
    {
      name: 'Projects',
      src: './assets/icons/explorer.svg',
    },
    {
      name: 'Git',
      src: './assets/icons/git-pull-request.svg',
    },
    {
      name: 'Extensions',
      src: './assets/icons/extensions.svg',
    },
  ]
  return (
    <nav>
      {menu.map((item, index) => {
        const { name, src } = item
        return (
          <Buttons
            handleClick={() => setSectionHandler(name)}
            src={src}
            name={name}
            key={index + name}
          />
        )
      })}
    </nav>
  )
}
