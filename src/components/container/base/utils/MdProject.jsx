export const MdProject = ({ name, pUrl }) => {
  if (name.split(' ').length > 1) {
    name = name.split(' ').join('-')
  }
  return (
    <a
      href={`${pUrl}#readme`}
      className="flex flex-row items-center ml-16 w-full "
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-7 h-7 mt-3"
        src="./assets/icons/md.svg"
        alt="mark down"
      />
      <span className="mx-2 text-suspensive">{name}.md</span>
    </a>
  )
}
