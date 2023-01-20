import { Buttons } from './'

interface NavProps {
  setSectionHandler: (section: string) => void
}

export const Nav = ({ setSectionHandler }: NavProps) => {
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
      src: './assets/icons/git-branch.svg',
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
            key={Math.random()}
          />
        )
      })}
    </nav>
  )
}
