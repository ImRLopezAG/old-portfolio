export const ProjectButton = () => {
  const handleShowProjects = () => {
    const projects = document.querySelector('.toggle')
    projects.src = projects.src.includes('right')
      ? './assets/icons/caret-down.svg'
      : './assets/icons/caret-right.svg'

    const allProjects = document.querySelector('.project')
    allProjects.classList.toggle('hidden')
  }
  return (
    <button
      onClick={handleShowProjects}
      className="flex flex-row items-center w-full mt-4"
    >
      <img
        className="toggle"
        src="./assets/icons/caret-right.svg"
        alt="right"
      />
      <span className="mx-3 text-xl">Show Projects</span>
    </button>
  )
}
