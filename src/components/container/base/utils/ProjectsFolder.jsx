export const ProjectsFolder = ({ name, id }) => {
  const handleShowProjects = () => {
    const projects = document.querySelector(`.toggle-folder-${id}`)
    projects.src = projects.src.includes('close')
      ? './assets/icons/folder-open.svg'
      : './assets/icons/folder-close.svg'
  }
  return (
    <>
      <button
        className="button-project select-none"
        onClick={handleShowProjects}
      >
        <img
          className={`toggle-folder-${id} folder-img`}
          src="./assets/icons/folder-close.svg"
          alt="folder"
        />
        <p className="folder-name ">{name}</p>
      </button>
      <div></div>
    </>
  )
}
