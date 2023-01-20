interface GitRowsProps {
  date: string
  commit: string
  desc: string
  auth: string
}

export const GitRows = ({ date, commit, desc, auth }: GitRowsProps) => {
  return (
    <tr className="">
      <td className="point">
        <span className="circle"></span>
      </td>
      <td className="data">{desc}</td>
      <td className="data">{date}</td>
      <td className="data break">{auth}</td>
      <td className="data break">{commit}</td>
    </tr>
  )
}