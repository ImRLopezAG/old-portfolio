import { Extensions, Git, Menu, Profile, Projects } from '../container'

interface ContainerProps {
  section: string
}

export const Container = ({ section }: ContainerProps) => {
  interface Show {
    [key: string]: JSX.Element
  }
  const show: Show = {
    Extensions: <Extensions />,
    Git: <Git />,
    Menu: <Menu />,
    Profile: <Profile />,
    Projects: <Projects />,
  }
  return <main className="container">{show[section]}</main>
}
