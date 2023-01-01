export const GitRows = ({ date, commit, desc, auth }) => {
  return (
    <tr className="">
      <td className="point">
        <span className="circle"></span>
      </td>
      <td className="data">{desc}</td>
      <td className="data break">{date}</td>
      <td className="data break">{auth}</td>
      <td className="data">{commit}</td>
    </tr>
  )
}
