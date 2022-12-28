export const Contact = ({ link, icon }) => {
  return (
    <a className='social-item text-blue-500' href={link} rel="noreferrer" target="_blank">
      <i className={icon}></i>
    </a>
  )
}
