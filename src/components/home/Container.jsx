import { Extensions, Git, Menu, Profile, Projects } from '../container'

export const Container = ({ section }) => {
  const show = {
    Extensions: <Extensions />,
    Git: <Git />,
    Menu: <Menu />,
    Profile: <Profile />,
    Projects: <Projects />,
  }
  return <main className="container">{show[section]}</main>
}
