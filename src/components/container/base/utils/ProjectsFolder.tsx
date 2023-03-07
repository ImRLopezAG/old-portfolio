import { MdProject } from './'

interface ProjectsFolderProps {
  name: string
  id: number
  url: string
}

interface Props {
  ProjectsFolder: ProjectsFolderProps
}
export const ProjectsFolder: React.FC<Props> = ({ ProjectsFolder }) => {
  const name = ProjectsFolder.name
  const pUrl = ProjectsFolder.url

  const handleShowProjects = (): void => {
    const projects = document.querySelector(
      `.toggle-folder-${ProjectsFolder.id}`
    ) as HTMLImageElement
    projects.src = projects.src.includes('close')
      ? './assets/icons/folder-open.svg'
      : './assets/icons/folder-close.svg'
    const projectFolder = document.querySelector(
      `.project-folder-${ProjectsFolder.id}`
    ) as HTMLDivElement
    projectFolder.classList.toggle('hidden')
  }
  if (name.split('-').length > 1) {
    ProjectsFolder.name = name.split('-').join(' ')
  }
  return (
    <div>
      <button
        className='button-project select-none'
        onClick={handleShowProjects}
      >
        <img
          className={`toggle-folder-${ProjectsFolder.id} folder-img`}
          src='./assets/icons/folder-close.svg'
          alt='folder'
        />
        <p className='folder-name truncate'>{name}</p>
      </button>
      <div className={`project-folder-${ProjectsFolder.id} hidden`}>
        <MdProject MdProject={{ name, pUrl }} />
      </div>
    </div>
  )
}
