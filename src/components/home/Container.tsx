import { Extensions, Git, Menu, Profile, Projects } from '../container'

interface ContainerProps {
  section: string
}

interface Props {
  Container: ContainerProps
}

export const Container: React.FC<Props> = ({ Container }) => {
  interface Show {
    [key: string]: JSX.Element
  }
  const show: Show = {
    Extensions: <Extensions />,
    Git: <Git />,
    Menu: <Menu />,
    Profile: <Profile />,
    Projects: <Projects />
  }
  return <main className='container'>{show[Container.section]}</main>
}
