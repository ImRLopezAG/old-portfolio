import { DevProfile } from './base'
import { ProjectButton, ProjectsFolder } from './base/utils'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Portfolio',
      description: 'My personal Portfolio 😊',
    },
    {
      id: 2,
      name: 'Forget',
      description: 'Forget is an entrepreneurship project about a store to sell clothes and merchandise.',
    },
    {
      id: 3,
      name: 'Bookshop App',
      description: 'An application that allows you to manage a library with sequelize as data persistence handlebars as view renderer and express for server administration',
    },
    {
      id: 4,
      name: 'Social Network App',
      description: 'This is a project',
    },
    {
      id: 5,
      name: 'Pokedex',
      description: 'Pokedex manager with all pokemons, regions and types.',
    },
    {
      id: 6,
      name: 'Registration System',
      description: 'A small registration system developed with JQuery and bootstrap with form validation',
    },
    {
      id: 7,
      name: 'Movies Manager',
      description: 'This is a project',
    },
    {
      id: 8,
      name: 'Gif App',
      description: 'A little gif finder using Giphy Api',
    },
    {
      id: 9,
      name: 'Blog App',
      description: 'This is a project',
    },
  ]
  return (
    <div className="side c-grid">
      <div className="side-left left">
        <div className="folder">
          <ProjectButton />
          <div className="all-pro">
            <div className='project hidden'>
              {projects.map((project, index) => (
                <ProjectsFolder key={index} name={project.name} id={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="side-right right">
        <DevProfile refer='These are some projects in which I have worked both freelance and personally' />
      </div>
    </div>
  )
}
