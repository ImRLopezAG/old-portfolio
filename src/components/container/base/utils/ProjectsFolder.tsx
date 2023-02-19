import { MdProject } from './'

interface ProjectsFolderProps {
  name: string
  id: number
  url: string
}

export const ProjectsFolder = ({ name, id, url }: ProjectsFolderProps): JSX.Element => {
  const handleShowProjects = (): void => {
    const projects = document.querySelector(`.toggle-folder-${id}`) as HTMLImageElement
    projects.src = projects.src.includes('close')
      ? './assets/icons/folder-open.svg'
      : './assets/icons/folder-close.svg'
    const projectFolder = document.querySelector(`.project-folder-${id}`) as HTMLDivElement
    projectFolder.classList.toggle('hidden')
  }
  if (name.split('-').length > 1) {
    name = name.split('-').join(' ')
  }
  return (
    <div>
      <button
        className='button-project select-none'
        onClick={handleShowProjects}
      >
        <img
          className={`toggle-folder-${id} folder-img`}
          src='./assets/icons/folder-close.svg'
          alt='folder'
        />
        <p className='folder-name truncate'>{name}</p>
      </button>
      <div className={`project-folder-${id} hidden`}>
        <MdProject name={name} pUrl={url} />
      </div>
    </div>
  )
}
