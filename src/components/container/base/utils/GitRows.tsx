interface GitRowsProps {
  date: string
  commit: string
  desc: string
}
interface Props {
  Git: GitRowsProps
}

export const GitRows: React.FC<Props> = ({ Git }) => {
  return (
    <tr className=''>
      <td className='point'>
        <span className='circle' />
      </td>
      <td className='data'>{Git.desc}</td>
      <td className='data'>{Git.date}</td>
      <td className='data break'>Angel Lopez</td>
      <td className='data break'>{Git.commit}</td>
    </tr>
  )
}
