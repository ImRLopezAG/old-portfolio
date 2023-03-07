interface MdProjectProps {
  name: string
  pUrl: string
}

interface Props {
  MdProject: MdProjectProps
}

export const MdProject: React.FC<Props> = ({ MdProject }) => {
  if (MdProject.name.split(' ').length > 1) {
    MdProject.name = MdProject.name.split(' ').join('-')
  }
  return (
    <a
      href={`${MdProject.pUrl}#readme`}
      className='flex flex-row items-center ml-16 w-full '
      target='_blank'
      rel='noreferrer'
    >
      <img
        className='w-7 h-7 mt-3'
        src='./assets/icons/md.svg'
        alt='mark down'
      />
      <span className='mx-2 text-suspensive'>{MdProject.name}.md</span>
    </a>
  )
}
